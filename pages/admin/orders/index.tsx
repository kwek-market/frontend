import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { useGetAllOrders } from "../../../hooks/admin/orders";

const Orders = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("1");
  const [page, setPage] = useState(1);

  const { TabPane } = Tabs;
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const search = router.query.search as string;

  const [searchOrder, setSearchOrder] = useState(search);
  const [searchDebounce] = useDebounce(searchOrder, 600);

  const {
    data: ordersData,
    error,
    isLoading,
  } = useGetAllOrders({ token, search: searchDebounce, page });

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "orderId",
      render: (orderId: string, objects) => {
        console.log(objects);
        return (
          <Link
            href={"/admin/customers/" + objects?.user?.fullName + "/order-detail/" + objects?.id}
            className=' tw-text-black-kwek100'>
            {orderId}
          </Link>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "dateCreated",
      key: "order_date",
      render: (order_date: string) => <p>{new Date(order_date).toLocaleDateString()}</p>,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "payment_method",
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
      render: (payment: string) => (
        <p className={`${!payment ? "tw-text-red-kwek100" : "tw-text-green-success"}`}>
          {payment ? "Paid" : "Not Paid"}
        </p>
      ),
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Order List",
            path: "/admin/orders",
          },
        ]}
        header='Order List'
      />

      <div className=' tw-mt-12 tw-font-poppins'>
        <div className='tw-mt-6'>
          <Search
            placeholder='Search by order id'
            value={searchOrder}
            onChange={e => setSearchOrder(e.target.value)}
          />
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
              <AdminTable
                isLoading={isLoading}
                data={ordersData?.allOrders?.objects}
                columns={columns}
                numberOfPages={ordersData?.allOrders.pages}
                page={ordersData?.allOrders.page}
                goToNext={() => {
                  if (ordersData?.allOrders?.hasNext) setPage(page + 1);
                }}
                goToPrev={() => {
                  if (ordersData?.allOrders?.hasPrev) setPage(page - 1);
                }}
                goToPage={page => {
                  setPage(page);
                }}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;
