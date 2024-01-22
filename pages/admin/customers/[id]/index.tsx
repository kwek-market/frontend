import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Divider, Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormHead } from "@/components/admin/form";
import CustomerDetail from "@/components/admin/customers/customer-detail";

const Customer = () => {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");
  const cardData = [
    {
      title: "Total No of Orders",
      content: "17",
    },
    {
      title: "Average Order Value",
      content: "N14,500",
    },
    {
      title: "Total Spent",
      content: "N359,634",
    },
  ];

  const columns = [
    {
      title: "Order Number",
      dataIndex: "order_number",
      key: "order_number",
      render: (order_number) => (
        <Link
          href={
            "/admin/customers/" +
            router.query?.id +
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
        header="Customer Info"
        buttonPath=""
        buttonText="Send Email"
      />

      <div className=" tw-mt-12 tw-font-poppins">
        <CustomerDetail
          image="/images/pp.png"
          name="Akomolafe Akadri"
          email="theakomolafeakadri@email.com"
          phone="0812 345 6789"
        />
        <div className=" tw-pt-6  tw-w-[50vw] tw-grid tw-grid-cols-3 tw-gap-x-4">
          {cardData.map((item, index) => (
            <div
              key={index}
              className=" tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans"
            >
              <p className=" tw-mb-0 tw-text-sm tw-text-[#3A434B]">
                {item.title}
              </p>
              <p className="tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl">
                {item.content}
              </p>
            </div>
          ))}
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
              <AdminTable data={data.slice(0, 4)} columns={columns} />
            </TabPane>
          </Tabs>
        </div>

        <Link href={"/admin/customers/" + router.query?.id + "/order-list"}>
          <a className=" tw-underline tw-text-[#009D19] ">View All 17 Orders</a>
        </Link>

        <FormHead>Address</FormHead>
        <div className=" tw-pt-6 tw-space-y-6">
          {Array(2)
            .fill(null)
            .map((item, index) => (
              <div key={index}>
                <p className="tw-mb-0 tw-font-medium">Maryjane Egbu</p>
                <p className="tw-mb-0 tw-font-light tw-pt-4 tw-text-[#3A434B]">
                  Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178
                </p>
              </div>
            ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customer;
