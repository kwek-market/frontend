import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import OrderHistory from "@/components/admin/products/order-history";
import Reviews from "@/components/admin/products/reviews";
import { useGetProduct } from "@/hooks/admin/products";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductDetail = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  const { id } = router.query;

  const [activeKey, setActiveKey] = useState("1");
  const [reviewsCount, setReviewsCount] = useState(0);

  const { data, isFetching } = useGetProduct({
    id: id as string,
  });

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Products", path: "/admin/products" },
          {
            name: data?.product?.productTitle as string,
            path: ("/admin/products/" + router.query?.id) as string,
          },
        ]}
      />
      <div className=' tw-mt-6 tw-font-poppins tw-flex tw-gap-x-4'>
        {isFetching ? (
          <Load />
        ) : (
          <>
            <div className='tw-min-w-[77px] tw-min-h-[99px]'>
              <Image
                width={72}
                height={72}
                src={
                  data?.product?.image[0]?.imageUrl ||
                  "https://res.cloudinary.com/psami-wondah/image/upload/v1701686786/tadukzulu3bmj4wzrszr.webp"
                }
                alt='hh'
                objectFit='cover'
                className='tw-rounded-[10px] tw-flex-shrink-0'
              />
            </div>
            <div>
              <h2 className='tw-mb-0 tw-font-bold tw-text-lg'>{data?.product?.productTitle}</h2>
              <h3 className='tw-mb-0 tw-font-semibold'>
                Price: &nbsp;
                <span className='tw-text-[#009D19]'>
                  N{Number(data?.product?.options[0]?.price).toLocaleString()}
                </span>
              </h3>
              <div className='tw-flex tw-flex-col tw-text-xs tw-text-gray-kwek300a '>
                <div>
                  Seller:{" "}
                  <Link href={`/admin/vendors/vendor-info/${data?.product?.user?.id}`}>
                    <a className=' tw-text-[#AF1328] tw-underline'>
                      {data?.product?.user?.fullName}
                    </a>
                  </Link>
                </div>
                {/* <Divider type="vertical" /> */}
                Product Code: {id}
              </div>
            </div>
          </>
        )}
      </div>

      <div className=' tw-font-poppins tw-mt-11'>
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className='adminTab'
          activeKey={activeKey}
          onTabClick={key => setActiveKey(key)}
        >
          <TabPane tab='Order History' key='1'>
            <OrderHistory />
          </TabPane>
          <TabPane
            tab={
              <div className=' tw-flex tw-gap-x-3'>
                Reviews
                <span className=' tw-rounded-full tw-bg-[#009D19] tw-w-5 tw-h-5 tw-flex tw-items-center tw-justify-center tw-text-white-100'>
                  {reviewsCount}
                </span>
              </div>
            }
            key='2'
          >
            <Reviews productId={id as string} setReviewsCount={setReviewsCount} />
          </TabPane>
        </Tabs>
      </div>

      <div className=' tw-grid tw-gap-x-8 tw-text-[#574240] tw-mt-8'>
        <div className=' tw-bg-review tw-rounded-2xl tw-p-8'>
          <h2 className='tw-mb-0 tw-text-2xl tw-font-semibold tw-text-[#574240]'>
            More Product Information
          </h2>

          <div className='lg:tw-grid tw-gap-x-6 lg:tw-grid-cols-2 '>
            <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
              <p className=' tw-font-semibold tw-mb-0'>Brand</p>
              <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{data?.product?.brand}</p>
            </div>
            <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
              <p className=' tw-font-semibold tw-mb-0'>Weight</p>
              <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{data?.product?.productWeight}</p>
            </div>
            <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
              <p className=' tw-font-semibold tw-mb-0'>Warranty</p>
              <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{data?.product?.warranty}</p>
            </div>
            <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
              <p className=' tw-font-semibold tw-mb-0'>Color</p>
              <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{data?.product?.color}</p>
            </div>
            <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
              <p className=' tw-font-semibold tw-mb-0'>Gender</p>
              <p className=' tw-text-opacity-70 tw-pt-2 tw-mb-0'>{data?.product?.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductDetail;
