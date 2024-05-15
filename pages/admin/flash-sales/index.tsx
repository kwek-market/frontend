import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PAGE_SIZE } from "../../../constants/constants";
import { useGetAdminFlashSales } from "../../../hooks/admin/flash-sales";
import { RootState } from "../../../store/rootReducer";

const FlashSales = () => {
  const { TabPane } = Tabs;
  const [page, setPage] = useState(1);

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data, isLoading, error } = useGetAdminFlashSales({ token, page, pageSize: PAGE_SIZE });

  const flashSales = data?.getFlashSales?.objects;

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: product => {
        return <div>{product?.product?.productTitle}</div>;
      },
    },
    {
      title: "Date Created",
      dataIndex: "startDate",
      key: "startDate",
      render: date => <p>{new Date(date).toDateString()}</p>,
    },
    {
      title: "No. of Days",
      dataIndex: "numberOfDays",
      key: "numberOfDays",
    },
    {
      title: "Quantity",
      dataIndex: "product",
      key: "quantity",
      render: product => {
        return <div>{product?.quantity}</div>;
      },
    },
    {
      title: "Price",
      dataIndex: "product",
      key: "price",
      render: product => {
        return <div>{product?.price}</div>;
      },
    },
    {
      title: "Discount Price",
      dataIndex: "product",
      key: "product",
      render: product => {
        return <div>{product?.discountedPrice}</div>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: status => {
        return <div>{status ? "Active" : "Inactive"}</div>;
      },
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Flash Sales", path: "/admin/flash-sales" },
        ]}
        header='Flash Sales'
        buttonPath='/admin/flash-sales/new'
        buttonText='New Flash Sale'
      />

      <div className=' tw-pt-4'>
        <AdminTable
          data={flashSales}
          columns={columns}
          isLoading={isLoading}
          numberOfPages={data?.getFlashSales?.pages}
          page={data?.getFlashSales?.page}
          goToNext={() => {
            if (data?.getFlashSales?.hasNext) setPage(page + 1);
          }}
          goToPrev={() => {
            if (data?.getFlashSales?.hasPrev) setPage(page - 1);
          }}
          goToPage={page => {
            setPage(page);
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default FlashSales;
