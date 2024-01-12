import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import Load from "@/components/Loader/Loader";
import AdminTable from "@/components/table";
<<<<<<< HEAD
import {
  useDeleteCategory,
  useGetAdminCategories,
  useUpdateCategory,
} from "@/hooks/admin/category";
=======
import { useGetCategories } from "@/hooks/admin/categories";
>>>>>>> 8d6bc11cadd1c7c6b3ddaa294db514016d2bbec9
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CategoryList = () => {
<<<<<<< HEAD
  const [search, setSearch] = useState("");
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data: categoryData, isFetching } = useGetAdminCategories({
    search: search,
    token: token,
  });
  const { mutate: deleteMut } = useDeleteCategory();

  function deleteCategory(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) {
    e.preventDefault();
    console.log("delete category: ", id);
    deleteMut({ id: id, token: token });
  }

=======
  const getCategories = useGetCategories({ search: "" });

  console.log(getCategories?.data);
>>>>>>> 8d6bc11cadd1c7c6b3ddaa294db514016d2bbec9
  const menu = (id: string) => (
    <Menu>
      <Menu.Item>
        <Link
          href={{
<<<<<<< HEAD
            pathname: `/admin/categories/edit-category/${id}`,
=======
            pathname: "/admin/categories/edit-category/" + id,
>>>>>>> 8d6bc11cadd1c7c6b3ddaa294db514016d2bbec9
          }}
        >
          <a>Edit</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <button type="button" onClick={(e) => deleteCategory(e, id)}>
          Delete
        </button>
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
<<<<<<< HEAD
      title: "Actions",
      key: "action",
      render: ({ key }) => (
        <span className=" tw-cursor-pointer">
          <Dropdown overlay={menu(key)} placement="bottomCenter" arrow>
=======
      title: "",
      dataIndex: "id",
      key: "action",
      render: (id: string) => (
        <span className=" tw-cursor-pointer">
          <Dropdown overlay={menu(id)} placement="bottomCenter" arrow>
>>>>>>> 8d6bc11cadd1c7c6b3ddaa294db514016d2bbec9
            <DotsVerticalIcon className="tw-h-5 tw-w-5" />
          </Dropdown>
        </span>
      ),
    },
  ];

  const data = categoryData?.categories?.map(
    (category: {
      id: string;
      name: string;
      category: any[];
      visibility: string;
    }) => {
      return {
        key: category.id,
        category_name: category.name,
        items: category.category.length,
        visibility: { visibility: category.visibility },
      };
    },
  );

  if (isFetching) {
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
          <Search
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Load />
      </AdminLayout>
    );
  }

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
        <Search
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
