import BreadCrumbs from "@/components/admin/breadcrumbs";
import TickIcon from "@/components/icons/tick";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu, Tabs } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const CouponList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "coupon_code",
      key: "coupon_code",
    },
    {
      title: "Coupon Type",
      dataIndex: "coupon_type",
      key: "coupon_type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className="tw-flex tw-gap-x-2 tw-items-center">
          {status}
          <TickIcon />
        </span>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
  ];

  const data = [
    {
      key: "1",
      coupon_code: "Anniversary70",
      coupon_type: "Discount (25%)",
      status: "ACTIVE",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "2",
      coupon_code: "Anniversary70",
      coupon_type: "Discount (25%)",
      status: "ACTIVE",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "3",
      coupon_code: "Anniversary70",
      coupon_type: "Discount (25%)",
      status: "ACTIVE",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "4",
      coupon_code: "Anniversary70",
      coupon_type: "Discount (25%)",
      status: "ACTIVE",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "5",
      coupon_code: "Anniversary70",
      coupon_type: "Discount (25%)",
      status: "ACTIVE",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Marketing",
            path: "/admin/marketing/subscription-list",
          },
          { name: "Coupons", path: "/admin/marketing/coupon-list" },
        ]}
        header="Coupons"
        buttonPath="/admin/marketing/new-coupon"
        buttonText="New Coupon"
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
            <AdminTable data={data} columns={columns} />
          </TabPane>
          <TabPane tab="Inactive" key="2"></TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default CouponList;
