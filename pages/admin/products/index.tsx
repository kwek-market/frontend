import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { reduceCharacterLength } from "@/helpers/helper";
import { useGetProducts } from "@/hooks/admin/products";
import AdminLayout from "@/layouts/adminLayout/adminLayout";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { QueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Search from "../../../components/admin/search";

const Products = () => {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

  const router = useRouter();

  const search = router.query.search as string;

  const [searchedProduct, setSearchedProducts] = useState(search);
  const [searchDebounce] = useDebounce(searchedProduct, 600);

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetProducts({
    page: page,
    pageSize: 10,
    search: searchDebounce,
    sortBy: "+dateCreated",
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

  const maxTextLength = 25;

  const columns = [
    {
      title: "Product",
      dataIndex: "productTitle",
      key: "productTitle",
      render: (productTitle, x) => {
        productTitle = reduceCharacterLength(productTitle, maxTextLength);
        return (
          <Link href={`/admin/products/${x?.id}`} className=' tw-text-[#1D1616]'>
            {productTitle}
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
      render: (options: Array<Record<string, unknown>>) => `N${options[0]?.price}`,
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
      render: (date: string) => moment(new Date(date)).format("MMM D, YYYY | h:MM A"),
    },
    // {
    //   title: "",
    //   key: "action",
    //   render: () => (
    //     <span>
    //       <DotsVerticalIcon className='tw-h-5 tw-w-5' />
    //     </span>
    //   ),
    // },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Products", path: "/admin/products" },
        ]}
        header='Products'
      />

      <div className=' tw-pt-7'>
        <div className='tw-mt-6 tw-mb-8'>
          <Search
            placeholder='Search by products name'
            value={searchedProduct}
            onChange={e => setSearchedProducts(e.target.value)}
          />
        </div>

        <AdminTable
          select
          isLoading={isLoading}
          numberOfPages={data?.products?.pages as number}
          data={data?.products?.objects?.map((item, indx) => ({
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
    </AdminLayout>
  );
};

export default Products;
