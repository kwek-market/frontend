import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import { AdminLayout } from "@/layouts";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const OrderDetail = () => {
  const router = useRouter();
  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Customers", path: "/admin/customers" },
          {
            name: router.query?.id as string,
            path: "/admin/customers/" + router.query?.id,
          },
          {
            name: "Order List",
            path: "/admin/customers/" + router.query?.id + "/order-list",
          },
          {
            name: "Order Detail",
            path:
              "/admin/customers/" +
              router.query?.id +
              "/order-list/" +
              router.query?.orderId,
          },
        ]}
        header="Order Detail"
      />

      <div className=" tw-mt-12 tw-font-poppins">
        <CustomerDetail
          image="/images/pp.png"
          name="Akomolafe Akadri"
          email="theakomolafeakadri@email.com"
          phone="0812 345 6789"
        />

        <div className=" tw-mt-9 tw-text-[#574240]">
          <h1 className=" tw-font-semibold tw-text-[#574240] tw-text-[2rem] tw-mb-0 ">
            Order Details
          </h1>
          <div className=" tw-border-b tw-border-gray-kwek700 tw-mt-5 tw-w-full" />

          <div>
            <div className=" tw-flex tw-justify-between tw-pt-4 tw-items-center">
              <p className=" tw-mb-0  tw-font-semibold tw-text-xl">
                Order No. KWK 12089473284
              </p>
              <p className="tw-mb-0">4 items</p>
            </div>
            <div className=" tw-flex tw-justify-between tw-pt-4 tw-items-center ">
              <p className="tw-mb-0 tw-font-medium">Placed on: </p>
              <p className="tw-mb-0">12-09-2021</p>
            </div>
            <div className=" tw-flex tw-justify-between tw-pt-2 tw-items-center ">
              <p className="tw-mb-0 tw-font-medium">Total:</p>
              <p className="tw-mb-0">NGN 13,209</p>
            </div>

            <div className=" tw-flex tw-justify-between tw-pt-12 tw-items-center ">
              <p className="tw-mb-0 tw-font-medium tw-text-lg tw-text-[#AF1328]">
                ITEMS (4)
              </p>
              <div className=" tw-flex tw-gap-x-4 tw-items-center ">
                <div className=" tw-text-white-100 tw-rounded-sm tw-px-3 tw-py-1 tw-bg-[#1D1616] tw-bg-opacity-40">
                  CANCELLED - PAYMENT UNSUCCESSFUL
                </div>
                <p className="tw-mb-0">16-09-2021</p>
              </div>
            </div>
            <div className=" tw-border-b tw-border-gray-kwek700 tw-mt-4 tw-w-full" />

            <div className=" tw-pt-6 tw-space-y-4">
              {Array(4)
                .fill(null)
                .map((item, index) => (
                  <Item
                    key={index}
                    image={
                      "https://images.pexels.com/photos/3714786/pexels-photo-3714786.jpeg"
                    }
                    name={"Men's Winter Wool Jackets - Brown"}
                    qty={1}
                    amount={3500}
                  />
                ))}
            </div>

            <div className=" tw-grid tw-grid-cols-2 tw-gap-x-8 tw-text-[#574240] tw-mt-8">
              <div className=" tw-bg-review tw-rounded-2xl tw-p-8">
                <h2 className="tw-mb-0 tw-text-2xl tw-font-semibold tw-text-[#574240]">
                  Payment Information
                </h2>

                <div className=" tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6">
                  <p className=" tw-font-semibold tw-mb-0">Payment Method</p>
                  <p className=" tw-text-opacity-70 tw-pt-2 tw-mb-0">
                    Cash on Delivery
                  </p>
                </div>
                <div className=" tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6">
                  <p className=" tw-font-semibold tw-mb-0">Payment Details</p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-2">
                    Items subtotal: NGN 9,700
                  </p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-1">
                    Shipping Fees: NGN 3,400
                  </p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-1">
                    Total: NGN 13, 100
                  </p>
                </div>
              </div>
              <div className="tw-bg-review tw-rounded-2xl tw-p-8">
                <h2 className="tw-mb-0 tw-text-2xl tw-font-semibold tw-text-[#574240]">
                  Delivery Information
                </h2>

                <div className=" tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6">
                  <p className=" tw-font-semibold tw-mb-0">Delivery Method</p>
                  <p className=" tw-text-opacity-70 tw-pt-2 tw-mb-0">
                    Standard Door Delivery
                  </p>
                </div>
                <div className=" tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6">
                  <p className=" tw-font-semibold tw-mb-0">Delivery Method</p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-2">
                    Alison Eyo
                  </p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-1">
                    Eyo Suite 5, OGB Plaza, Obafemi Awolowo Way,
                  </p>
                  <p className=" tw-mb-0 tw-text-opacity-70 tw-pt-1">
                    Utako, Abuja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderDetail;

const Item = ({ image, name, qty, amount }) => {
  return (
    <div className="tw-border-gray-kwek700 tw-border tw-rounded-2xl tw-pl-2 tw-py-2 tw-flex tw-gap-x-6 tw-pr-8">
      {/* <Image
        src={image}
        alt="item"
        width={121}
        height={101}
        className=" tw-rounded-xl tw-object-cover tw-overflow-hidden"
      /> */}
      <img
        src={image}
        alt="item"
        className="tw-w-[121px] tw-h-[101px] tw-rounded-xl tw-object-cover tw-overflow-hidden"
      />
      <div className=" tw-w-full tw-pt-5">
        <div className=" tw-flex tw-justify-between tw-w-full tw-items-center">
          <p className="tw-mb-0 tw-font-medium tw-text-xl tw-text-black-kwek100">
            {name}
          </p>
          <span className=" tw-text-opacity-60">QTY: {qty}</span>
        </div>
        <p className="tw-mb-0 tw-font-medium tw-text-xl tw-text-right tw-pt-2">
          NGN {Number(amount).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
