import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu, Tabs } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const SubscriptionList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          href={{
            pathname: "/admin/marketing/edit-subscription/chicken",
          }}
        >
          <a>Edit</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <button>Delete</button>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
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
    {
      title: "",
      key: "action",
      render: () => (
        <span className=" tw-cursor-pointer">
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <DotsVerticalIcon className="tw-h-5 tw-w-5" />
          </Dropdown>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      category: "Groceries",
      vendor: "Martha Store",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "2",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      category: "Groceries",
      vendor: "Martha Store",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "3",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      category: "Groceries",
      vendor: "Martha Store",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "4",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      category: "Groceries",
      vendor: "Martha Store",
      start_date: "13/03/2023",
      end_date: "13/03/2023",
    },
    {
      key: "5",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      category: "Groceries",
      vendor: "Martha Store",
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
          { name: "Subscription", path: "/admin/marketing/subscription-list" },
        ]}
        header="Subscription"
        buttonPath="/admin/marketing/new-subscription"
        buttonText="New Subscription"
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

export default SubscriptionList;
