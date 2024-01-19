import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import Search from "@/components/admin/search";
import SearchIcon from "@/components/icons/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const OrderList = () => {
  const router = useRouter();
  const [search, useSearch] = useState("");
  function onChange() {}

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
          {
            name: "Order List",
            path: "/admin/customers/" + router.query?.id + "/order-list",
          },
        ]}
        header="Order List"
      />

      <div className=" tw-mt-12 tw-font-poppins">
        <CustomerDetail
          image="/images/pp.png"
          name="Akomolafe Akadri"
          email="theakomolafeakadri@email.com"
          phone="0812 345 6789"
        />
        <div className="tw-mt-6">
          <Search
            placeholder="Search by order code"
            value={search}
            onChange={onChange}
          />
        </div>

        <div className=" tw-py-4">
          <AdminTable data={data} columns={columns} pages={1} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderList;
