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

const ProductDetail = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("1");

  const { data, isFetching } = useGetProduct({
    id: router.query?.id as string,
  });

  const getProductReviews = useGetProductReviews({
    page: 1,
    pageSize: 10,
    productId: router.query?.id as string,
    sortBy: "id",
  });

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Products", path: "/admin/products" },
          {
            name: router.query?.id as string,
            path: ("/admin/products/" + router.query?.id) as string,
          },
        ]}
      />
      <div className=" tw-mt-6 tw-font-poppins tw-flex tw-gap-x-4">
        <div>
          <Image
            width={72}
            height={72}
            src={
              data?.product?.image[0]?.imageUrl ||
              "https://res.cloudinary.com/psami-wondah/image/upload/v1701686786/tadukzulu3bmj4wzrszr.webp"
            }
            alt="hh"
            className="  tw-rounded-[10px] tw-overflow-hidden tw-object-cover"
          />
        </div>
        <div>
          <h2 className="tw-mb-0 tw-font-bold tw-text-lg">
            {data?.product?.productTitle}
          </h2>
          <h3 className="tw-mb-0 tw-font-semibold tw-text-[#009D19]">
            N {Number(data?.product?.options[0]?.price).toLocaleString()}
          </h3>
          <div className=" tw-text-xs tw-text-gray-kwek300a ">
            Seller:{" "}
            <Link
              href={`/admin/vendors/vendor-info/${data?.product?.user?.id}`}
            >
              <a className=" tw-text-[#AF1328] tw-underline">
                {data?.product?.user?.fullName}
              </a>
            </Link>
            <Divider type="vertical" />
            Product Code: {router.query?.id}
          </div>
        </div>
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
                  {getProductReviews?.data?.reviews?.objects?.length}
                </span>
              </div>
            }
            key="2"
          >
            <Reviews getProductReviews={getProductReviews} />
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ProductDetail;
