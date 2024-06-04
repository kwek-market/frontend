import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useGetCustomerOrders } from "../../../hooks/admin/customers";
import AdminTable from "../../table";

export const OrderTable = ({ token, id }: { token?: string; id?: string }) => {
  const router = useRouter();

  const [search, useSearch] = useState("");
  const [orderPage, setOrderPage] = useState(1);
  const [page, setPage] = useState(1);

  const {
    data: customerOrders,
    isLoading: isLoadingCustomerOrders,
    error: customerError,
  } = useGetCustomerOrders({
    page,
    pageSize: 5,
    id: id?.toString() as string,
    token,
  });

  const orders = customerOrders?.getCustomerOrdersPaginated?.objects;

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "order_number",
      render: (order_number, object) => (
        <Link
          href={"/admin/customers/" + router.query?.id + "/order-detail/" +  object?.id}
        >
          <a className=' tw-text-black-kwek100'>{order_number}</a>
        </Link>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "dateCreated",
      key: "order_date",
      render: (date, object) => <div className=''>{new Date(date).toDateString()}</div>,
    },
    {
      title: "No of Items",
      dataIndex: "cartItems",
      key: "no_of_items",
      render: (cartItems, object) => <div className=''>{cartItems?.length}</div>,
    },
    {
      title: "Status",
      dataIndex: "deliveryStatus",
      key: "status",
    },
    {
      title: "Amount",
      dataIndex: "orderPriceTotal",
      key: "amount",
      render: (amount, object) => <div className=''>${amount}</div>,
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (paid, object) => <div className=''>{paid ? "Paid" : "Not Paid"}</div>,
    },
  ];

  return (
    <AdminTable
      data={orders}
      columns={columns}
      isLoading={isLoadingCustomerOrders}
      numberOfPages={customerOrders?.getCustomerOrdersPaginated?.pages}
      page={customerOrders?.getCustomerOrdersPaginated?.page}
      goToNext={() => {
        if (customerOrders?.getCustomerOrdersPaginated?.hasNext) setOrderPage(orderPage + 1);
      }}
      goToPrev={() => {
        if (customerOrders?.getCustomerOrdersPaginated?.hasPrev) setOrderPage(orderPage - 1);
      }}
      goToPage={page => {
        setOrderPage(page);
      }}
    />
  );
};
