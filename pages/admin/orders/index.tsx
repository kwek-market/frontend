import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import useOrder from "@/hooks/useOrder";
import useOrders from "@/hooks/useOrders";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const router = useRouter()
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  console.log("token: ", token)
  const search = router.query.search as string
  console.log("search: ", search)
  const { data: ordersData, error, isLoading } = useOrders(token)
  console.log(ordersData)
  const { data: orderData, error: orderError, isLoading: orderLoading, refetch } = useOrder(token, search)
  console.log(orderData)
  const [searchOrder, setSearchOrder] = useState(search)

  useEffect(() => {
    setSearchOrder(() => search)
  }, [search])

  function dataOrder() {
    if (orderData !== null && !orderLoading) {
      return [{
        key: orderData?.order.id,
        order_number: orderData?.order.orderId,
        order_date: orderData?.order.dateCreated,
        no_of_items: orderData?.order.cartItems.length,
        status: orderData?.order.deliveryStatus,
        amount: orderData?.order.orderPriceTotal,
        payment: orderData?.order.paid ? "paid" : "not paid",
      }]
    } else {
      return ordersData?.orders.map(order => {
        return {
          key: order.id,
          order_number: order.orderId,
          order_date: order.dateCreated,
          no_of_items: order.cartItems.reduce((acc, item) => acc + item.quantity, 0),
          status: order.deliveryStatus,
          amount: order.cartItems.reduce((acc, item) => acc + item.price, 0),
          payment: order.paid ? "paid" : "not paid",
        }
      })
    }
  }

  const data = useMemo(() => dataOrder(), [ordersData, error, isLoading])

  if (isLoading) {
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
          header="Order List"
        />

        <div className=" tw-mt-12 tw-font-poppins">
          <div className="tw-mt-6">
            <Search placeholder="Search by order code" />
          </div>
          <div className=" tw-py-4">
            <Tabs
              animated
              tabBarStyle={{ borderColor: "red" }}
              className="adminTab"
              activeKey={activeKey}
              onTabClick={(key) => setActiveKey(key)}
            >
              <TabPane tab="Order History" key="1">
                <Load />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </AdminLayout>
    )
  }

  const columns = [
    {
      title: "Order Number",
      dataIndex: "order_number",
      key: "order_number",
      render: (order_number: {}) => (
        <Link
          href={
            "/admin/customers/" +
            "Maryjane Egbu" +
            "/order-detail/" +
            "order-" +
            order_number
          }
        >
          <a className=" tw-text-black-kwek100">{order_number}</a>
        </Link>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "order_date",
      key: "order_date",
    },
    {
      title: "No of Items",
      dataIndex: "no_of_items",
      key: "no_of_items",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
    },
  ];

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchOrder(() => e.target.value)
    router.push(`${router.route}?search=${e.target.value}`, `${router.route}?search=${e.target.value}`, {
      shallow: true
    })
  }

  function searchFunc(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.keyCode === 13) {
      refetch()
    }
  }


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
        header="Order List"
      />

      <div className=" tw-mt-12 tw-font-poppins">
        <div className="tw-mt-6">
          <Search
            placeholder="Search by order code"
            value={searchOrder}
            searchFunc={searchFunc}
            onChange={e => handleChangeSearch(e)} />
        </div>
        <div className=" tw-py-4">
          <Tabs
            animated
            tabBarStyle={{ borderColor: "red" }}
            className="adminTab"
            activeKey={activeKey}
            onTabClick={(key) => setActiveKey(key)}
          >
            <TabPane tab="Order History" key="1">
              <AdminTable data={data} columns={columns} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;
