import BreadCrumbs from "@/components/admin/breadcrumbs";
import SearchIcon from "@/components/icons/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          href={{
            pathname: "/admin/categories/edit-category/chicken",
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
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      key: "visibility",
      render: ({ visibility, date }: { visibility: string; date: string }) => (
        <span
          className={`${
            {
              scheduled: "tw-text-[#3498DB]",
              hidden: "tw-text-black-kwek100",
              visible: "tw-text-[#009D19]",
            }[visibility.toLowerCase()]
          }`}
        >
          {visibility.toLowerCase() == "scheduled" ? date : visibility}
        </span>
      ),
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
      category_name: "Fashion",
      items: 237,
      visibility: { visibility: "Visible" },
    },
    {
      key: "2",
      category_name: "Fashion",
      items: 237,
      visibility: { visibility: "Hidden" },
    },
    {
      key: "3",
      category_name: "Fashion",
      items: 237,
      visibility: { visibility: "scheduled", date: "13/03/2021" },
    },
    {
      key: "4",
      category_name: "Fashion",
      items: 237,
      visibility: { visibility: "Hidden" },
    },
    {
      key: "5",
      category_name: "Fashion",
      items: 237,
      visibility: { visibility: "scheduled", date: "13/03/2021" },
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Manage Categories",
            path: "/admin/categories/category-list",
          },
          { name: "Category List", path: "/admin/categories/category-list" },
        ]}
      />
      <div className=" tw-flex tw-justify-between tw-pt-6 tw-items-center">
        <h1 className=" tw-text-[2rem] tw-font-bold tw-mb-0 ">Category List</h1>
        <Link href={"/admin/categories/add-category"}>
          <a>
            <button
              className="  tw-font-semibold tw-py-2 tw-px-11 tw-rounded tw-text-white-100 tw-bg-[#1E944D]"
              type="button"
            >
              New Category
            </button>
          </a>
        </Link>
      </div>

      <div className=" tw-pr-4 tw-overflow-hidden tw-border tw-border-[#D7DCE0] tw-rounded tw-flex tw-items-center tw-w-max tw-mt-16">
        <input
          type="text"
          className=" tw-py-3 tw-pl-4 tw-border-none tw-outline-none tw-mr-4 tw-w-64 active:tw-border-none"
        />
        <SearchIcon />
      </div>
      <div className=" tw-pt-4">
        <AdminTable data={data} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default CategoryList;
