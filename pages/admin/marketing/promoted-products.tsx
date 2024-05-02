import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import { useState } from "react";

const SubscriptionList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  const [page, setPage]  = useState(1)

  //TODO: If they request that you should do a button for edit and delete for the tables you will carry the menu property from the promoted-products file

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
            path: "/admin/marketing/promoted-products",
          },
          { name: "Promoted Products", path: "/admin/marketing/promoted-products" },
        ]}
        header='Promoted Products'
        buttonPath='/admin/marketing/new-promotion'
        buttonText='New Promotion'
      />

      <div className=' tw-pt-4'>
        <AdminTable data={data} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default SubscriptionList;
