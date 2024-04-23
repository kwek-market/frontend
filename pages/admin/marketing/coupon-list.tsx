import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAdminCoupons } from "../../../hooks/admin/coupon";
import { RootState } from "../../../store/rootReducer";

const CouponList = () => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data, isLoading, error } = useGetAdminCoupons({ token });

  const coupons = data?.coupons;
  console.log("🚀 ~~ CouponList ~~ coupons:", coupons);

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "code",
      key: "coupon_code",
    },
    {
      title: "Discount Value",
      dataIndex: "value",
      key: "discount_value",
    },
    {
      title: "Date Created",
      dataIndex: "createdAt",
      key: "createdAt",
      render: date => <p>{new Date(date).toDateString()}</p>,
    },
    {
      title: "Valid Until",
      dataIndex: "validUntil",
      key: "validUntil",
      render: date => <p>{new Date(date).toDateString()}</p>,
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Marketing",
            path: "/admin/marketing/subscription-list",
          },
          { name: "Coupons", path: "/admin/marketing/coupon-list" },
        ]}
        header='Coupons'
        buttonPath='/admin/marketing/new-coupon'
        buttonText='New Coupon'
      />

      <div className=' tw-pt-4'>
        <AdminTable data={coupons} columns={columns} isLoading={isLoading} />
      </div>
    </AdminLayout>
  );
};

export default CouponList;
