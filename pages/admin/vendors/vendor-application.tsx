import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import React, { useState } from "react";

const VendorApplications = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <Link href={"/admin/vendors/vendor-info/" + name}>
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
      title: "Date Applied",
      dataIndex: "date_applied",
      key: "date_applied",
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
      title: "Decision",
      dataIndex: "decision",
      key: "decision",
      render: () => (
        <div className=" tw-flex tw-gap-x-2">
          <button className=" tw-py-[5px] tw-px-[10px] tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-bg-[#009D19]">
            Accept
          </button>
          <button className=" tw-py-[5px] tw-px-[10px] tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-bg-[#AF1328]">
            Reject
          </button>
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: () => (
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
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "2",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "3",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "4",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "5",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "6",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "7",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
    {
      key: "8",
      name: "Maryjane Egbu",
      email_address: "maryeu@gmail.com",
      date_applied: "13/03/2023",
      country: "Nigeria",
      state: "Lagos",
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Vendor Application",
            path: "/admin/vendors/vendor-application",
          },
        ]}
        header="Vendors Application"
      />

      <div className=" tw-pt-4 tw-font-poppins">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="New Applications" key="1">
            <AdminTable data={data} columns={columns} />
          </TabPane>
          <TabPane tab="Declined Applications" key="2"></TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default VendorApplications;
