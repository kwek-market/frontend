import { RootState } from "@/store/rootReducer";
import { Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function StoreDetails() {
  const {
    user: { user },
    seller: { seller },
  } = useSelector((state: RootState) => state);

  return (
    <section className="tw-p-5 tw-bg-white-100 tw-rounded-md tw-border tw-border-gray-kwek700 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-border-b tw-border-gray-kwek700">
        <p className="tw-mb-0 tw-text-gray-kwek200 tw-capitalize tw-font-semibold md:tw-text-2xl tw-text-base">
          Store Details
        </p>
        {/* <button className="tw-text-red-kwek100 tw-capitalize tw-font-normal tw-text-base">
          edit
        </button> */}
      </div>
      <div className="">
        <div className="tw-flex tw-gap-3 tw-justify-between tw-items-end tw-mt-3">
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize tw-w-full">
            store name <br />
            <Input
              type="text"
              placeholder="Coco’s Store"
              size="large"
              className="tw-w-full tw-mt-2"
              value={seller.shopName}
            />
          </label>
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize tw-w-full">
            email address <br />
            <Input
              type="text"
              placeholder="cocostore@example.com"
              size="large"
              className="tw-w-full"
              value={seller.shopAddress}
            />
          </label>
        </div>
        <div className="tw-mt-3">
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize">
            Address <br />
            <Input
              type="text"
              placeholder="150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria."
              size="large"
              value={user.email}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
