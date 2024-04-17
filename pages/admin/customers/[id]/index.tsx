import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import { FormHead } from "@/components/admin/form";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Empty, Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../../../components/Loader/Loader";
import { PAGE_SIZE } from "../../../../constants/constants";
import { useGetCustomerOrders, useGetCustomerTotalOrders } from "../../../../hooks/admin/customers";
import { userGetUserById } from "../../../../hooks/admin/user";
import { RootState } from "../../../../store/rootReducer";

const Customer = () => {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  const { user } = useSelector((state: RootState) => state);

  const [page, setPage] = useState(1);

  const {
    data: totalOrders,
    isLoading: isLoadingTotalOrders,
    error,
  } = useGetCustomerTotalOrders({
    id: router.query.id as string,
    token: user.token,
  });

  const {
    data: orders,
    isLoading: isOrdersLoading,
    error: ordersError,
  } = useGetCustomerOrders({
    page,
    pageSize: PAGE_SIZE,
    token: user.token,
    id: router.query.id as string,
  });

  const {
    data: customerData,
    isLoading: isLoadingCustomerData,
    error: customerDataError,
  } = userGetUserById({
    id: router.query.id as string,
    token: user.token,
  });

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "order_number",
      render: order_number => (
        <Link
          href={"/admin/customers/" + router.query?.id + "/order-detail/" + "order-" + order_number}
          className=' tw-text-black-kwek100'>
          {order_number}
        </Link>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "dateCreated",
      key: "order_date",
    },
    {
      title: "No of Items",
      dataIndex: "no_of_items",
      key: "no_of_items",
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
    },
    {
      title: "Payment",
      dataIndex: "paid",
      key: "payment",
    },
  ];

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
        ]}
        header='Customer Info'
        buttonPath=''
        buttonText='Send Email'
      />

      <div className=' tw-mt-12 tw-font-poppins'>
        {/* THE CUSTOMER DETAILS */}

        {isLoadingCustomerData ? <Load className='tw-h-64' /> : null}
        {customerData?.getUserById ? (
          <CustomerDetail
            image='/images/pp.png'
            name={customerData?.getUserById?.fullName}
            email={customerData?.getUserById?.email}
            phone={customerData?.getUserById?.phoneNumber}
          />
        ) : null}

        {/* THE ORDER ANALYTICS */}
        <div className=' tw-pt-6  tw-w-[50vw] tw-grid tw-grid-cols-3 tw-gap-x-4'>
          {isLoadingTotalOrders ? <Load /> : null}
          {totalOrders?.getCustomerOrders ? (
            <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
              <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Total No of Orders</p>
              <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>
                {totalOrders?.getCustomerOrders?.totalOrders}
              </p>
            </div>
          ) : null}

          <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
            <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Average Order Value</p>
            <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>14</p>
          </div>

          <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
            <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Total Spent</p>
            <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>14</p>
          </div>
        </div>
        <div className=' tw-py-4'>
          <Tabs
            animated
            tabBarStyle={{ borderColor: "red" }}
            className='adminTab'
            activeKey={activeKey}
            onTabClick={key => setActiveKey(key)}
          >
            <TabPane tab='Order History' key='1'>
              {isOrdersLoading ? <Load className='h-64' /> : null}
              {orders?.getCustomerOrdersPaginated?.objects?.slice(0, 4) ? (
                <AdminTable
                  data={orders?.getCustomerOrdersPaginated?.objects}
                  columns={columns}
                  numberOfPages={orders?.getCustomerOrdersPaginated.pages}
                  page={orders?.getCustomerOrdersPaginated.page}
                  goToNext={() => {
                    if (orders?.getCustomerOrdersPaginated?.hasNext) setPage(page + 1);
                  }}
                  goToPrev={() => {
                    if (orders?.getCustomerOrdersPaginated?.hasPrev) setPage(page - 1);
                  }}
                  goToPage={page => {
                    setPage(page);
                  }}
                />
              ) : null}
            </TabPane>
          </Tabs>
        </div>

        {orders?.getCustomerOrdersPaginated?.objects?.length > 0 ? (
          <Link
            href={"/admin/customers/" + router.query?.id + "/order-list"}
            className=' tw-underline tw-text-[#009D19] '>
            View All Orders
          </Link>
        ) : null}

        <FormHead>Billing Addresses</FormHead>
        <div className=' tw-pt-6 tw-space-y-6'>
          {customerData?.getUserById?.billingSet?.length > 0
            ? customerData?.getUserById?.billingSet.map((billing, index) => (
                <div key={index}>
                  <p className='tw-mb-0 tw-font-medium'>{billing?.fullName}</p>
                  <p className='tw-mb-0 tw-font-light tw-pt-4 tw-text-[#3A434B]'>
                    {billing?.address} {billing.state}
                  </p>
                </div>
              ))
            : null}

          {customerData?.getUserById?.billingSet?.length === 0 ? (
            <Empty description='No billing address found' />
          ) : null}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customer;
