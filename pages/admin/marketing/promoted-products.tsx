import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PAGE_SIZE } from "../../../constants/constants";
import { useGetAdminPromotedProducts } from "../../../hooks/admin/promotedProducts";
import { RootState } from "../../../store/rootReducer";

const PromotedProducts = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAdminPromotedProducts({ page, pageSize: PAGE_SIZE, token });

  //TODO: If they request that you should do a button for edit and delete for the tables you will carry the menu property from the promoted-products file

  const promotedProducts = data?.getPromotedProductsPaginated?.objects;

  const columns = [
    {
      title: "Name",
      dataIndex: "productTitle",
      key: "product",
    },
    {
      title: "Vendor",
      dataIndex: "user",
      key: "vendor",
      render: user => <div>{user.fullName}</div>,
    },
    {
      title: "Days Active",
      dataIndex: "promo",
      key: "days_active",
      render: promo => <div>{promo?.[0].days}</div>,
    },
    {
      title: "End Date",
      dataIndex: "promo",
      key: "end_date",
      render: promo => <div>{new Date(promo?.[0]?.endDate).toDateString()}</div>,
    },
    {
      title: "Amount",
      dataIndex: "promo",
      key: "amount",
      render: promo => <div>{promo?.[0]?.amount}</div>,
    },
    {
      title: "Balance",
      dataIndex: "promo",
      key: "balance",
      render: promo => <div>{promo?.[0]?.balance}</div>,
    },
    {
      title: "Reach",
      dataIndex: "promo",
      key: "reach",
      render: promo => <div>{promo?.[0]?.reach}</div>,
    },
    {
      title: "No of Clicks",
      dataIndex: "promo",
      key: "linkClicks",
      render: promo => <div>{promo?.[0]?.linkClicks}</div>,
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
          { name: "Promoted Products", path: "/admin/marketing/new-product-promotion" },
        ]}
        header='Promoted Products'
        buttonPath='/admin/marketing/new-product-promotion'
        buttonText='Promote Product'
      />

      <div className=' tw-pt-4'>
        <AdminTable
          data={promotedProducts}
          columns={columns}
          isLoading={isLoading}
          numberOfPages={data?.getPromotedProductsPaginated.pages}
          page={data?.getPromotedProductsPaginated.page}
          goToNext={() => {
            if (data?.getPromotedProductsPaginated?.hasNext) setPage(page + 1);
          }}
          goToPrev={() => {
            if (data?.getPromotedProductsPaginated?.hasPrev) setPage(page - 1);
          }}
          goToPage={page => {
            setPage(page);
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default PromotedProducts;
