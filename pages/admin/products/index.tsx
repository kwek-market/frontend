import BreadCrumbs from "@/components/admin/breadcrumbs";
import { AdminLayout } from "@/layouts";
import React from "react";
import AdminTable from "@/components/table";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Products = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (product) => (
        <Link href={"/admin/products/38ug4hhvv"}>
          <a className=" tw-text-[#1D1616]">{product}</a>
        </Link>
      ),
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
    },
    {
      title: "Unit Price",
      dataIndex: "unit_price",
      key: "unit_price",
    },
    {
      title: "Sold",
      key: "sold",
      dataIndex: "sold",
    },
    {
      title: "Date Uploaded",
      key: "date_uploaded",
      dataIndex: "date_uploaded",
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <span>
          <DotsVerticalIcon className="tw-h-5 tw-w-5" />
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      vendor: "Coco's Body Beauty",
      unit_price: "N13,000",
      sold: 230,
      date_uploaded: "Nov 12, 2021 | 9:53 AM",
    },
    {
      key: "2",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      vendor: "Coco's Body Beauty",
      unit_price: "N13,000",
      sold: 230,
      date_uploaded: "Nov 12, 2021 | 9:53 AM",
    },
    {
      key: "3",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      vendor: "Coco's Body Beauty",
      unit_price: "N13,000",
      sold: 230,
      date_uploaded: "Nov 12, 2021 | 9:53 AM",
    },
    {
      key: "4",
      product: "Nestle Milo CRUNCHY CEREALS 320g",
      vendor: "Coco's Body Beauty",
      unit_price: "N13,000",
      sold: 230,
      date_uploaded: "Nov 12, 2021 | 9:53 AM",
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

      <div className=" tw-pt-7">
        <AdminTable select data={data} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default Products;
