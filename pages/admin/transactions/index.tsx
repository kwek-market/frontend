import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import React, { useState } from "react";

const Transactions = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const columns = [
    {
      title: "Transaction ID ",
      dataIndex: "transaction_id",
      key: "transaction_id",
    },
    {
      title: "Transaction Type",
      dataIndex: "transaction_type",
      key: "transaction_type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
    },
    {
      title: "Date & Time",
      dataIndex: "date_and_time",
      key: "date_and_time",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <button
          className={`${
            status.toLowerCase() === "success"
              ? "tw-bg-[#009D19]"
              : status.toLowerCase() === "failed"
              ? "tw-bg-[#AF1328]"
              : "tw-bg-[#FFC107]"
          } tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-w-full tw-py-2`}
        >
          {status}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "2",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "3",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "4",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "pending",
    },
    {
      key: "5",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "6",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "7",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "success",
    },
    {
      key: "8",
      transaction_id: "vrbheug573ui589393h",
      transaction_type: "Deposit",
      amount: "N 12,600.22",
      channel: "USSD",
      date_and_time: "Nov 12, 2021 | 9:53 AM",
      status: "failed",
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Transactions",
            path: "/admin/transactions",
          },
        ]}
        header="Vendors List"
      />

      <div className=" tw-flex tw-gap-x-2 tw-mt-6 tw-items-center ">
        <span className=" tw-opacity-70">Filter By:</span>
        <select
          value="all"
          className=" tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer"
        >
          <option value="all">All Transactions</option>
        </select>
      </div>
      <div className="tw-mt-6">
        <Search placeholder="Search by Transaction ID" />
      </div>

      <div className=" tw-pt-4">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Transaction Log" key="1">
            <AdminTable data={data} columns={columns} />
          </TabPane>
          <TabPane tab="Refund Requests" key="2"></TabPane>
          <TabPane tab="Refund History" key="3"></TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Transactions;
