import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminLayout from "@/layouts/adminLayout/adminLayout";
import React, { useEffect, useState } from "react";
import AdminTable from "@/components/table";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useGetProducts } from "@/hooks/admin/products";
import Load from "@/components/Loader/Loader";
import moment from "moment";
import { generatePagesArray, reduceCharacterLength } from "@/helpers/helper";
import { ProductType } from "@/interfaces/commonTypes";
import { QueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { search as searchData } from "@/store/search/search.action";
import { GetProducts } from "@/store/product/product.queries";

const Products = () => {
  const queryClient = new QueryClient();
  const { search } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const { data, isFetching } = useGetProducts({
    page: page,
    pageSize: 10,
  });

  const goToPage = (page: number) => {
    setPage(page);
  };
  const goToPrev = () => {
    setPage(page - 1);
  };

  const goToNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!search.searched) {
      queryClient.invalidateQueries([
        "products-admin",
        {
          page: page,
          pageSize: 10,
        },
      ]);
    } else {
      if (search.data == null) {
        setPage(1);
      }

      dispatch(
        searchData(GetProducts, {
          search: search.search,
          page: page,
          pageSize: 10,
        })
      );
    }
  }, [page, search.searched as boolean, search.search as string]);

  const maxTextLength = 25;

  const columns = [
    {
      title: "Product",
      dataIndex: "productTitle",
      key: "productTitle",
      render: (productTitle, x) => {
        productTitle = reduceCharacterLength(productTitle, maxTextLength);
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
      {isFetching || search.loading ? (
        <Load />
      ) : (
        <div className=" tw-pt-7">
          <AdminTable
            select
            numberOfPages={
              search.searched
                ? search?.data?.products?.pages
                : (data?.products?.pages as number)
            }
            data={(search.searched
              ? search?.data?.products?.objects
              : data?.products?.objects
            )?.map((item, indx) => ({
              ...item,
              key: indx,
            }))}
            columns={columns}
            page={page}
            goToPage={goToPage}
            goToPrev={goToPrev}
            goToNext={goToNext}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default Products;
