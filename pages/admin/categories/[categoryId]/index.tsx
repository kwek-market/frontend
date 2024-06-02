import BreadCrumbs from "@/components/admin/breadcrumbs";
import { AdminLayout } from "@/layouts";
import { Empty } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Load from "../../../../components/Loader/Loader";
import CategoryTable from "../../../../components/admin/categoriesTable/CategoriesTable";
import { useGetAdminCategory } from "../../../../hooks/admin/category";
import { RootState } from "../../../../store/rootReducer";

const Category = () => {
  const router = useRouter();
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    data: categoryData,
    isLoading,
    error,
  } = useGetAdminCategory({
    id: router.query?.categoryId as string,
    token: token,
  });

  const category = categoryData?.category;
  const categories = categoryData?.category?.child;

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Categories", path: "/admin/categories" },
          {
            name: router.query?.id as string,
            path: "/admin/categories/" + router.query?.id,
          },
        ]}
        header='Category Details'
      />

      <div className=' tw-mt-12 tw-font-poppins'>
        {isLoading ? <Load className='tw-w-64' /> : null}
        {category ? (
          <div className=' tw-flex tw-text-gray-kwek300a tw-gap-x-4 tw-items-center'>
            {category?.icon ? (
              <Image
                src={category?.icon}
                alt='pp'
                className='  tw-rounded-full tw-overflow-hidden'
                height={72}
                width={72}
              />
            ) : (
              <div className='tw-bg-gray-300 tw-text-black-kwek100 tw-text-4xl tw-w-16 tw-h-16 tw-text-center tw-rounded-full tw-uppercase tw-flex tw-items-center tw-justify-center'>
                {category?.name?.substring(0, 2)}
              </div>
            )}
            <div className=' text-k'>
              <h2 className='tw-mb-0 tw-font-medium tw-text-2xl'>{category?.name}</h2>
            </div>
          </div>
        ) : null}

        {error ? <Empty description={(error as any).message} /> : null}
        {isLoading ? <Load className='tw-w-96' /> : null}
        {category ? (
          <div className=' tw-mt-9 tw-text-[#574240]'>
            <h1 className=' tw-font-semibold tw-text-[#574240] tw-text-[2rem] tw-mb-0 '>
              Category Details
            </h1>
            <div className=' tw-border-b tw-border-gray-kwek700 tw-mt-5 tw-w-full' />

            <div>
              <div className=' tw-flex tw-space-x-2 tw-pt-4 tw-items-center tw-max-w-lg'>
                <p className='tw-mb-0 tw-font-medium'>Visible: </p>
                <p className='tw-mb-0'>{category?.visibility ? "YES" : "NO"}</p>
              </div>
              {category?.publishDate ? (
                <div className=' tw-flex tw-space-x-2 tw-pt-2 tw-items-center '>
                  <p className='tw-mb-0 tw-font-medium'>Date publish:</p>
                  <p className='tw-mb-0'>{new Date(category?.publishDate)?.toDateString()}</p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className='tw-mt-10'>
          <h2 className='tw-text-2xl tw-font-bold'>Sub Categories </h2>

          {categories ? <CategoryTable data={categories} /> : null}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Category;
