import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";

import SearchIcon from "@/components/icons/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Orders = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const columns = [
    {
      title: "Order Number",
      dataIndex: "order_number",
      key: "order_number",
      render: (order_number) => (
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

  const data = [
    {
      key: "1",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "2",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "3",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "4",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "5",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "6",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "7",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "8",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
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
              <AdminTable data={data} columns={columns} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;
