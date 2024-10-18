import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import { AdminLayout } from "@/layouts";
import { Button, Empty, Popconfirm, message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../../../../components/Loader/Loader";
import { OrderTable } from "../../../../../components/admin/orderTable/orderTable";
import { getOrderText } from "../../../../../helpers/helper";
import { useGetOrdersAdmin, useUpdateOrderDeliveryStatus } from "../../../../../hooks/admin/orders";
import useCancelOrder from "../../../../../hooks/useCancelOrder";
import { RootState } from "../../../../../store/rootReducer";
import {
  OrderDeliveryStatus,
  OrderDeliveryStatusWhenPaid,
  UpdateOrderDeliveryStatusSchema,
} from "../../../../../validations/orders";
import { queryClient } from "../../../../_app";

const OrderDetail = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const { data, isLoading, error } = useGetOrdersAdmin({
    id: router.query?.orderId as string,
    token: user?.token,
  });

  const { mutate: cancelOrder, isLoading: isCancellingOrder } = useCancelOrder();
  const { mutate: updateStatus, isLoading: isLoadingStatus } = useUpdateOrderDeliveryStatus();

  const [selectedStatus, setSelectedStatus] = useState("");

  const order = data?.order;

  useEffect(() => {
    if (order) {
      setSelectedStatus(order?.deliveryStatus);
    }
  }, [order]);

  const handleCancelOrder = async () => {
    cancelOrder(
      { orderId: router?.query?.orderId as string, token: user.token },
      {
        onSuccess(data) {
          queryClient.invalidateQueries(["orders", "admin", router.query?.orderId]);
          message.success(data?.cancelOrder?.message);
        },
        onError: error => {
          message.error((error as { message: string }).message);
        },
      }
    );
  };

  const handleUpdateOrderStatus = value => {
    setSelectedStatus(value);
    const data = {
      orderId: router?.query.orderId,
      token: user?.token,
      deliveryStatus: value,
    };

    const validData = UpdateOrderDeliveryStatusSchema.parse(data);

    updateStatus(validData, {
      onSuccess() {
        queryClient.invalidateQueries(["orders", "admin", router.query?.orderId]);
      },
      onError: error => {
        message.error((error as { message: string }).message);
      },
    });
  };

  console.log("🚀 ~~ OrderDetail ~~ order:", order?.user?.billingSet?.at(-1), order);

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Customers", path: "/admin/customers" },
          {
            name: router.query?.id as string,
            path: "/admin/customers/" + router.query?.id,
          },
          {
            name: "Order List",
            path: "/admin/customers/" + router.query?.id + "/order-list",
          },
          {
            name: "Order Detail",
            path: "/admin/customers/" + router.query?.id + "/order-list/" + router.query?.orderId,
          },
        ]}
        header='Order Detail'
      />

      <div className=' tw-mt-12 tw-font-poppins'>
        {isLoading ? <Load className='tw-w-64' /> : null}
        {order?.user ? (
          <CustomerDetail
            image='/images/pp.png'
            name={order?.user?.fullName}
            email={order?.user?.email}
            phone={
              order?.user?.sellerProfile?.[0]?.phoneNumber ||
              order?.user?.billingSet?.at(-1)?.contact
            }
          />
        ) : null}

        {error ? <Empty description={(error as any).message} /> : null}
        {isLoading ? <Load className='tw-w-96' /> : null}
        {order ? (
          <div className=' tw-mt-9 tw-text-[#574240]'>
            <h1 className=' tw-font-semibold tw-text-[#574240] tw-text-[2rem] tw-mb-0 '>
              Order Details
            </h1>
            <div className=' tw-border-b tw-border-gray-kwek700 tw-mt-5 tw-w-full' />

            <div>
              <div className=' tw-flex tw-justify-between tw-pt-4 tw-items-center'>
                <p className=' tw-mb-0  tw-font-semibold tw-text-xl'>Order No. {order?.orderId}</p>
                <p className='tw-mb-0'>{order?.cartItems.length} items</p>
              </div>
              <div className=' tw-flex tw-justify-between tw-pt-4 tw-items-center '>
                <p className='tw-mb-0 tw-font-medium'>Placed on: </p>
                <p className='tw-mb-0'>{new Date(order?.dateCreated).toLocaleDateString()}</p>
              </div>
              <div className=' tw-flex tw-justify-between tw-pt-2 tw-items-center '>
                <p className='tw-mb-0 tw-font-medium'>Total:</p>
                <p className='tw-mb-0'>NGN {order?.orderPriceTotal}</p>
              </div>
              <div className=' tw-flex tw-justify-between tw-pt-2 tw-items-center '>
                <p className='tw-mb-0 tw-font-medium'>Order Status</p>
                <p
                  className={`tw-mb-0 tw-px-2 tw-py-1 tw-font-semibold tw-uppercase tw-text-white-100 ${
                    getOrderText(order).statusStyle
                  }`}
                >
                  {getOrderText(order).status}
                </p>
              </div>

              <div className='tw-space-x-2'>
                <label className='text-lg'>Update Delivery Status: </label>
                <select
                  onChange={e => handleUpdateOrderStatus(e.target.value)}
                  className='tw-rounded-lg'
                  name='updateDeliveryStatus'
                  defaultValue={selectedStatus}
                >
                  {Object.values(
                    !order?.paid ? OrderDeliveryStatus : OrderDeliveryStatusWhenPaid
                  )?.map(status => (
                    <option key={status} value={status} className='tw-capitalize'>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {!order?.closed && !order?.paid ? (
                <Popconfirm
                  title='Are you sure you want to close this order, this action cannot be undone'
                  onConfirm={handleCancelOrder}
                >
                  <Button
                    loading={isCancellingOrder}
                    className='mt-4'
                    size='large'
                    type='primary'
                    danger
                  >
                    Close Order
                  </Button>
                </Popconfirm>
              ) : null}

              <div className=' tw-flex tw-justify-between tw-pt-12 tw-items-center '>
                <p className='tw-mb-0 tw-font-medium tw-text-lg tw-text-[#AF1328]'>
                  ITEMS ({order?.cartItems.length})
                </p>
                <div className=' tw-flex tw-gap-x-4 tw-items-center '>
                  <div
                    className={` tw-text-white-100 tw-rounded-sm tw-px-3 tw-py-1 ${
                      getOrderText(order).className
                    }`}
                  >
                    {getOrderText(order).text}
                  </div>
                  <p className='tw-mb-0'>{new Date(order?.dateCreated).toDateString()}</p>
                </div>
              </div>
              <div className=' tw-border-b tw-border-gray-kwek700 tw-mt-4 tw-w-full' />

              <div className=' tw-pt-6 tw-space-y-4'>
                {order?.cartItems.map((item, index) => (
                  <Item
                    key={item?.id}
                    image={item?.product?.image[0]?.imageUrl}
                    name={item?.product?.productTitle}
                    qty={item?.quantity}
                    amount={item?.price}
                    size={item?.product?.size}
                    color={item?.product?.color}
                    brand={item?.product?.brand}
                    fullName={item?.product?.user?.fullName}
                    email={item?.product?.user?.email}
                    phone={item?.product?.user?.phone}
                  />
                ))}
              </div>

              <div className=' tw-grid tw-gap-y-8 md:tw-grid-cols-2 tw-gap-x-8 tw-text-[#574240] tw-mt-8'>
                <div className=' tw-bg-review tw-rounded-2xl tw-p-8'>
                  <h2 className='tw-mb-0 tw-text-2xl tw-font-semibold tw-text-[#574240]'>
                    Payment Information
                  </h2>

                  <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                    <p className=' tw-font-semibold tw-mb-0'>Payment Method</p>
                    <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{order?.paymentMethod}</p>
                  </div>
                  <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                    <p className=' tw-font-semibold tw-mb-0'>Payment Details</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-2'>
                      Items subtotal: NGN {order.orderPrice}
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-1'>
                      Delivery Cost: NGN {order.orderPriceTotal - order.orderPrice}
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-1'>
                      Total: NGN {order.orderPriceTotal}
                    </p>
                  </div>
                </div>
                <div className='tw-bg-review tw-rounded-2xl tw-p-8'>
                  <h2 className='tw-mb-0 tw-text-2xl tw-font-semibold tw-text-[#574240]'>
                    Delivery Information
                  </h2>

                  <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                    <p className=' tw-font-semibold tw-mb-0'>Delivery Status</p>
                    <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{order?.deliveryStatus}</p>
                  </div>

                  <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                    <p className=' tw-font-semibold tw-mb-0'>Delivery Method</p>
                    <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{order?.deliveryMethod}</p>
                  </div>

                  <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                    <p className=' tw-font-semibold tw-mb-0'>Delivery Address</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-2'>
                      {order?.doorStep?.fullName}
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-1'>
                      {order?.doorStep?.address},
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-1'>
                      {order?.doorStep?.city}, {order?.doorStep?.state}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className='tw-mt-10'>
          <h2 className='tw-text-2xl tw-font-bold'>More Customer Orders </h2>

          {order ? <OrderTable id={order?.user?.id as string} token={user?.token} /> : null}
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderDetail;

export const Item = ({ image, name, qty, amount, size, color, brand, fullName, email, phone }) => {
  return (
    <div className='tw-border-gray-kwek700 tw-border tw-rounded-2xl tw-pl-2 tw-py-2 lg:tw-flex tw-gap-x-6 tw-pr-8'>
      {/* <Image
        src={image}
        alt="item"
        width={121}
        height={101}
        className=" tw-rounded-xl tw-object-cover tw-overflow-hidden"
      /> */}
      <img
        src={image}
        alt='item'
        className='tw-w-full tw-h-44 lg:tw-w-[121px] lg:tw-h-[101px] tw-rounded-xl tw-object-cover tw-overflow-hidden'
      />
      <div className='tw-flex tw-justify-between tw-w-full tw-pt-5'>
        <div className='tw-space-y-1'>
          <p className='tw-mb-0 tw-font-medium tw-text-xl tw-text-black-kwek100'>{name}</p>

          {size ? (
            <p className='tw-font-medium'>
              Size: <span className='tw-font-light'>{size}</span>
            </p>
          ) : null}
          {color ? (
            <p className='tw-font-medium'>
              Color: <span className='tw-font-light'>{color}</span>
            </p>
          ) : null}
          {brand ? (
            <p className='tw-font-medium'>
              Brand: <span className='tw-font-light'>{brand}</span>
            </p>
          ) : null}

          {fullName ? (
            <p className='tw-font-medium'>
              Vendor Name: <span className='tw-font-light'>{fullName}</span>
            </p>
          ) : null}

          {email ? (
            <p className='tw-font-medium'>
              Vendor email: <span className='tw-font-light'>{email}</span>
            </p>
          ) : null}

          {phone ? (
            <p className='tw-font-medium'>
              Vendor no: <span className='tw-font-light'>{phone}</span>
            </p>
          ) : null}
        </div>
        <div className='tw-space-y-1'>
          <span className='tw-block tw-text-opacity-60 tw-text-right'>QTY: {qty}</span>
          <span className='tw-block tw-text-opacity-60 tw-text-right'>Price: {Number(amount)}</span>
          <p className='tw-mb-0 tw-font-medium tw-text-xl tw-text-right tw-pt-2'>
            NGN {Number(amount * qty)}
          </p>
        </div>
      </div>
    </div>
  );
};
