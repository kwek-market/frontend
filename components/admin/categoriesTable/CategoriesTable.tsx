import AdminTable from "@/components/table";
import { useDeleteCategory } from "@/hooks/admin/category";
import { RootState } from "@/store/rootReducer";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const CategoryTable = ({ data }: { data: Record<any, any>[] }) => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

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
      render: (name, object) => <Link href={`/admin/categories/${object?.id}`} legacyBehavior>{name}</Link>,
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

  return (
    <div className=' tw-pt-4'>
      <AdminTable data={data || []} columns={columns} />
    </div>
  );
};

export default CategoryTable;
