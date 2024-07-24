import AdminTable from "@/components/table";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductOrders } from "../../../hooks/admin/products";
import { RootState } from "../../../store/rootReducer";
import { OrderDeliveryStatus } from "../../../validations/orders";

interface Prop {
  isFetching?: boolean;
  data?: any;
}

const OrderHistory = ({ isFetching }: Prop) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state);

  const { data, isLoading, error } = useGetProductOrders({
    page,
    pageSize: 5,
    productId: router.query.id as string,
    token: user?.token,
  });

  const orders = data?.allOrders?.objects;

  const transformedOrder = useMemo(() => {
    return orders?.map(order => ({
      ...order,
      customerName: order?.user?.fullName,
      quantity: order?.cartItems?.quantity,
      doorStepAddress: order?.doorStep?.address,
    }));
  }, [orders]);

  console.log("🚀 ~~ transformedOrder ~~ transformedOrder:", transformedOrder);
  const pagination = data?.allOrders;

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "orderId",
      render: (orderId, order) => (
        <Link
          href={"/admin/customers/" + order?.user?.id + "/order-detail/" + order?.id}
          className=' tw-text-black-kwek100'>
          {orderId}
        </Link>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
      render: data => (
        <div className='tw-flex tw-gap-x-2'>
          {console.log(data)}
          <Image
            src={"/images/pp.png"}
            alt='pp'
            className='tw-rounded-full tw-overflow-hidden tw-min-w-[24px]'
            height={24}
            width={24}
            layout='fixed'
          />
          <span className='tw-line-clamp-1'>{data}</span>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "cartItems",
      key: "cartItems",
      render: (cartItems: Record<"quantity", number>[]) => (
        <span>{cartItems.reduce((prev, next) => prev + next.quantity, 0)}</span>
      ),
    },
    {
      title: "Total amount",
      dataIndex: "orderPriceTotal",
      key: "orderPriceTotal",
    },
    {
      title: "Delivery Location",
      key: "doorStepAddress",
      dataIndex: "doorStepAddress",
    },
    {
      title: "Date of Purchase",
      key: "dateCreated",
      dataIndex: "dateCreated",
    },
    {
      title: "Status",
      key: "deliveryStatus",
      dataIndex: "deliveryStatus",
      render: (status: string) => (
        <span
          className={`${
            status?.toLowerCase() === OrderDeliveryStatus.Delivered ? "tw-bg-[#009D19]" : "tw-bg-[#FFC107]"
          } tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-px-3 tw-py-2`}
        >
          {status}
        </span>
      ),
    },
  ];

  return (
    <div>
      <AdminTable
        data={transformedOrder}
        columns={columns}
        isLoading={isLoading}
        numberOfPages={pagination?.pages}
        page={pagination?.page}
        goToNext={() => {
          if (pagination?.hasNext) setPage(page + 1);
        }}
        goToPrev={() => {
          if (pagination?.hasPrev) setPage(page - 1);
        }}
        goToPage={page => {
          setPage(page);
        }}
      />
    </div>
  );
};

export default OrderHistory;
