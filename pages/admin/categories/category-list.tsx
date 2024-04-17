import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { useDeleteCategory, useGetAdminCategories } from "@/hooks/admin/category";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

const CategoryList = () => {
  const [search, setSearch] = useState("");
  const [searchDebouncedValue] = useDebounce(search, 600);

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data: categoryData, isFetching } = useGetAdminCategories({
    search: searchDebouncedValue,
    token: token,
  });
  const { mutate: deleteMut } = useDeleteCategory();

  function deleteCategory(id: string) {
    deleteMut({ id: id, token: token });
  }

  const menu = (id: string) => (
    <Menu className='tw-w-32 '>
      <Menu.Item className=''>
        <Link
          href={{
            pathname: `/admin/categories/edit-category/${id}`,
          }}
          className='tw-py-2 tw-px-4'>
          Edit
        </Link>
      </Menu.Item>
      <Menu.Item className='tw-py-2 tw-px-4' onClick={(e:any) => deleteCategory(id)}>
        Delete
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
      title: "Actions",
      key: "action",
      render: ({ key, id }) => (
        <span className=' tw-cursor-pointer'>
          {console.log(key, id)}
          <Dropdown overlay={menu(id)} placement='bottomCenter' arrow>
            <DotsVerticalIcon className='tw-h-5 tw-w-5' />
          </Dropdown>
        </span>
      ),
    },
  ];

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
          header='Category List'
          buttonPath='/admin/categories/add-category'
          buttonText='New Category'
        />

        <div className='tw-mt-16'>
          <Search placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
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
        header='Category List'
        buttonPath='/admin/categories/add-category'
        buttonText='New Category'
      />

      <div className='tw-mt-16'>
        <Search placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {isFetching ? (
        <Load />
      ) : (
        <div className=' tw-pt-4'>
          <AdminTable data={categoryData?.categories || []} columns={columns} />
        </div>
      )}
    </AdminLayout>
  );
};

export default CategoryList;
