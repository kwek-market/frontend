import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu, Tabs } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const CouponList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");
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
            <AdminTable data={[]} columns={[]} />
          </TabPane>
          <TabPane tab="Inactive" key="2"></TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default CouponList;
