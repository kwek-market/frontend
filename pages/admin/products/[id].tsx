import BreadCrumbs from "@/components/admin/breadcrumbs";
import { AdminLayout } from "@/layouts";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Divider } from "antd";
import { Tabs } from "antd";
import OrderHistory from "@/components/admin/products/order-history";
import Reviews from "@/components/admin/products/reviews";
import { useGetProduct, useGetProductReviews } from "@/hooks/admin/products";
import Load from "@/components/Loader/Loader";

const ProductDetail = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  const { id } = router.query;

  const [activeKey, setActiveKey] = useState("1");
  const [reviewsCount, setReviewsCount] = useState(0);

  const { data, isFetching } = useGetProduct({
    id: id as string,
  });

  const getProductReviews = useGetProductReviews({
    page: 1,
    pageSize: 10,
    productId: id as string,
    sortBy: "id",
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
      <div className=" tw-mt-6 tw-font-poppins tw-flex tw-gap-x-4">
        {isFetching ? (
          <Load />
        ) : (
          <>
            <div className="tw-min-w-[77px] tw-min-h-[99px]">
              <Image
                width={72}
                height={72}
                src={
                  data?.product?.image[0]?.imageUrl ||
                  "https://res.cloudinary.com/psami-wondah/image/upload/v1701686786/tadukzulu3bmj4wzrszr.webp"
                }
                alt="hh"
                objectFit="cover"
                className="tw-rounded-[10px] tw-flex-shrink-0"
              />
            </div>
            <div>
              <h2 className="tw-mb-0 tw-font-bold tw-text-lg">
                {data?.product?.productTitle}
              </h2>
              <h3 className="tw-mb-0 tw-font-semibold">
                Price: &nbsp;
                <span className="tw-text-[#009D19]">
                  N{Number(data?.product?.options[0]?.price).toLocaleString()}
                </span>
              </h3>
              <div className="tw-flex tw-flex-col tw-text-xs tw-text-gray-kwek300a ">
                <div>
                  Seller:{" "}
                  <Link
                    href={`/admin/vendors/vendor-info/${data?.product?.user?.id}`}
                  >
                    <a className=" tw-text-[#AF1328] tw-underline">
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
      <div className=" tw-font-poppins tw-mt-11">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Order History" key="1">
            <OrderHistory />
          </TabPane>
          <TabPane
            tab={
              <div className=" tw-flex tw-gap-x-3">
                Reviews
                <span className=" tw-rounded-full tw-bg-[#009D19] tw-w-5 tw-h-5 tw-flex tw-items-center tw-justify-center tw-text-white-100">
                  {reviewsCount}
                </span>
              </div>
            }
            key="2"
          >
            <Reviews
              productId={id as string}
              setReviewsCount={setReviewsCount}
            />
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ProductDetail;
