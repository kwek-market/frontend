import React from "react";
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Button from "@/components/buttons/Button";
import { Rate } from "antd";
import { useRouter } from "next/router";

const Component = () => {
  const seller = useSelector((state: RootState) => state.seller);
  const router = useRouter();

  const bgImg = seller.seller.storeBannerUrl
    ? `linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('${seller.seller.storeBannerUrl}')`
    : "linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('/images/user-photo.svg')";

  function uploadHandler() {
    router.push("/seller/upload-new-product");
  }

  return (
    <div
      style={{
        background: bgImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="tw-p-2 md: tw-py-7 md:tw-px-7 tw-flex tw-justify-between tw-items-center tw-bg-seller-header tw-bg-no-repeat tw-bg-center tw-bg-cover"
    >
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="md:tw-mr-4">
          <img
            src={
              seller.seller.storeBannerUrl
                ? seller.seller.storeBannerUrl
                : "/images/user-photo.svg"
            }
            className="tw-rounded-xl "
            width={"150px"}
          />
        </div>
        <div className="tw-self-end tw-mb-4">
          <p className="tw-font-semibold tw-text-white-100 tw-text-4xl tw-mb-0">
            {seller.seller.shopName}
          </p>
          <div className="tw-text-md">
            <Rate disabled defaultValue={2} className="tw-text-[12px]" />
            <span className="tw-text-white-100 tw-text-[12px]">
              (100 reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="tw-self-end tw-mb-7">
        <Button
          icon={"fa-plus"}
          buttonStyle={
            "tw-rounded-sm tw-p-3 tw-bg-yellow-filled hover:tw-shadow-md"
          }
          text={"New Product"}
          cmd={uploadHandler}
        />
      </div>
    </div>
  );
};

export default Component;
