import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminLayout from "@/layouts/adminLayout/adminLayout";
import React from "react";
import AdminTable from "@/components/table";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useGetProducts } from "@/hooks/admin/products";
import Load from "@/components/Loader/Loader";
import moment from "moment";

const Products = () => {
  const { data, isFetching } = useGetProducts({
    page: 1,
    pageSize: 10,
  });

  const columns = [
    {
      title: "Product",
      dataIndex: "productTitle",
      key: "productTitle",
      render: (productTitle, x) => {
        return (
          <Link href={`/admin/products/${x?.id}`}>
            <a className=" tw-text-[#1D1616]">{productTitle}</a>
          </Link>
        );
      },
    },
    {
      title: "Vendor",
      dataIndex: "user",
      key: "user",
      render: (user: Record<string, unknown>) => user?.fullName,
    },
    {
      title: "Unit Price",
      dataIndex: "options",
      key: "options",
      render: (options: Array<Record<string, unknown>>) =>
        `N${options[0]?.price}`,
    },
    {
      title: "Sold",
      key: "sales",
      dataIndex: "sales",
      render: (sales: Record<string, unknown>) => sales?.length,
    },
    {
      title: "Date Uploaded",
      key: "dateCreated",
      dataIndex: "dateCreated",
      render: (date: string) =>
        moment(new Date(date)).format("MMM D, YYYY | h:MM A"),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <span>
          <DotsVerticalIcon className="tw-h-5 tw-w-5" />
        </span>
      ),
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Products", path: "/admin/products" },
        ]}
        header="Product"
      />
      {isFetching ? (
        <Load />
      ) : (
        <div className=" tw-pt-7">
          <AdminTable
            select
            data={data?.products?.objects?.map((item, indx) => ({
              ...item,
              key: indx,
            }))}
            columns={columns}
            pages={1}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default Products;
