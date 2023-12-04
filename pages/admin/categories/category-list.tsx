import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import SearchIcon from "@/components/icons/admin/search";
import AdminTable from "@/components/table";
import { useGetCategories } from "@/hooks/admin/categories";
import { AdminLayout } from "@/layouts";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  const getCategories = useGetCategories({ search: "" });

  console.log(getCategories?.data);
  const menu = (id: string) => (
    <Menu>
      <Menu.Item>
        <Link
          href={{
            pathname: "/admin/categories/edit-category/" + id,
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
      dataIndex: "name",
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
      // render: ({ visibility, date }: { visibility: string; date: string }) => (
      //   <span
      //     className={`${
      //       {
      //         scheduled: "tw-text-[#3498DB]",
      //         hidden: "tw-text-black-kwek100",
      //         visible: "tw-text-[#009D19]",
      //       }[visibility.toLowerCase()]
      //     }`}
      //   >
      //     {visibility.toLowerCase() == "scheduled" ? date : visibility}
      //   </span>
      // ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "action",
      render: (id: string) => (
        <span className=" tw-cursor-pointer">
          <Dropdown overlay={menu(id)} placement="bottomCenter" arrow>
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
        header="Category List"
        buttonPath="/admin/categories/add-category"
        buttonText="New Category"
      />

      <div className="tw-mt-16">
        <Search placeholder="Search" />
      </div>

      {getCategories.isFetching ? (
        <Load />
      ) : (
        <div className=" tw-pt-4">
          <AdminTable
            data={getCategories?.data?.categories || []}
            columns={columns}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default CategoryList;
