import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { useDeleteCategory, useGetAdminCategories } from "@/hooks/admin/category";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
        >
          <a className='tw-py-2 tw-px-4'>Edit</a>
        </Link>
      </Menu.Item>
      <Menu.Item className='tw-py-2 tw-px-4' onClick={(e: any) => deleteCategory(id)}>
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "category_name",
      render: (name, object) => (
        <Link href={`/admin/categories/${object?.id}`}>
          <a className='tw-flex tw-items-center tw-space-x-2'>
            {object?.icon ? (
              <Image
                src={object?.icon}
                alt='pp'
                className='  tw-rounded-full tw-overflow-hidden'
                height={20}
                width={20}
              />
            ) : (
              <div className='tw-bg-gray-300 tw-text-black-kwek100 tw-text-4xl tw-w-16 tw-h-16 tw-text-center tw-rounded-full tw-uppercase tw-flex tw-items-center tw-justify-center'>
                {name?.substring(0, 2)}
              </div>
            )}
            <span className=''>{name}</span>
          </a>
        </Link>
      ),
    },
    {
      title: "Items",
      dataIndex: "child",
      key: "items",
      render: child => <div>{child?.length}</div>,
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
