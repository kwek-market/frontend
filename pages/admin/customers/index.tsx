import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import React, { useState } from "react";

const Customers = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <Link href={"/admin/customers/" + name}>
          <a className=" tw-text-black-kwek100">{name}</a>
        </Link>
      ),
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Amount Spent",
      dataIndex: "amount_spent",
      key: "amount_spent",
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <span>
          <DotsVerticalIcon className="tw-h-5 tw-w-5 tw-text-[#27BE63]" />
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "2",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "3",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "4",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "5",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "6",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "7",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
    {
      key: "8",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_joined: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
      amount_spent: "N13,873.74",
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Customers", path: "/admin/customers" },
        ]}
        header="Customers"
        buttonPath="#"
        buttonText="Send Bulk Email"
      />

      <div className=" tw-pt-4">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Active" key="1">
            <AdminTable data={data} columns={columns} pages={1} />
          </TabPane>
          <TabPane tab="Inactive" key="2"></TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Customers;
