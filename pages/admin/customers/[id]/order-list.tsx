import BreadCrumbs from "@/components/admin/breadcrumbs";
import SearchIcon from "@/components/icons/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const OrderList = () => {
  const router = useRouter();

  const columns = [
    {
      title: "Order Number",
      dataIndex: "order_number",
      key: "order_number",
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
        <div className=" tw-flex tw-text-gray-kwek300a tw-gap-x-4 tw-items-center">
          <Image
            src="/images/pp.png"
            alt="pp"
            className="  tw-rounded-full tw-overflow-hidden"
            height={72}
            width={72}
          />
          <div className=" text-k">
            <h2 className="tw-mb-0 tw-font-medium tw-text-2xl">
              Akomolafe Akadri
            </h2>
            <div className=" tw-flex tw-gap-x-[10px] tw-items-center">
              theakomolafeakadri@email.com
              <Divider type="vertical" />
              0812 345 6789
            </div>
          </div>
        </div>
        <div className=" tw-pr-4 tw-overflow-hidden tw-border tw-border-[#D7DCE0] tw-rounded tw-flex tw-items-center tw-w-max tw-mt-6">
          <input
            type="text"
            className=" tw-py-3 tw-pl-4 tw-border-none tw-outline-none tw-mr-4 tw-w-64 active:tw-border-none"
            placeholder="Search by order code"
          />
          <SearchIcon />
        </div>

        <div className=" tw-py-4">
          <AdminTable data={data} columns={columns} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderList;
