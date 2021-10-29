import React from "react";
import Styles from "./use.module.scss";

import Image from "next/image";
import UseBox from "./UseBox";

const use = () => {
  const useBox = [
    {
      title: "Create your store",
      description:
        "Register your store with a unique store URL for your store on Kwekmarkethall.com",
      image: "/images/shop.png",
      bgColor: "tw-bg-green-700"
    },
    {
      title: "List your products",
      description:
        "Create your products, set your own prices, and make them available for purchase",
      image: "/images/list.png",
    },
    {
      title: "Sell to millions of buyers",
      description:
        "Manage your orders, choose your own shipping method, and receive sales proceeds.",
      image: "/images/sell.png",
    },
  ];
  return (
    <div className={`tw-py-16 md:tw-py-24 tw-px-8 md:tw-px-14 ${Styles.Use}`}>
      <div
        className={` tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-w-full`}
      >
        <div className="tw-text-center md:tw-text-left tw-flex-1 tw-p-2 tw-my-3 md:tw-my-5 lg:tw-my-10">
          <h2 className="tw-font-semibold tw-text-gray-kwek200 tw-text-base md:tw-text-2xl lg:tw-text-5xl">
            How it Works
          </h2>
          <p className="tw-text-base">Get set-up in three easy steps</p>
          <div className="tw-w-full tw-h-32 tw-bg-gray-600"></div>
        </div>
        <div className="tw-flex tw-flex-col tw-flex-1">
          {useBox.map((item, index) => (
            <UseBox key={index} title={item.title} desc={item.description} imgSrc={item.image} bgColor={item?.bgColor} />
          ))}
        </div>
      </div>
      <div className={Styles.useRegister}>
        <div className={Styles.useRegister_content}>
          <div className={Styles.useRegister_contentText}>
            <h1 className="tw-font-semibold tw-text-2xl md:tw-text-4xl lg:tw-text-6xl">
              Sell Big, Sell Fast
            </h1>
            <button
              className={`btn bg-primary ${Styles.useRegister_contentText__sub}`}
            >
              Register Now{" "}
              <i className="fas fa-long-arrow-alt-right fa-2x tw-ml-2"></i>
            </button>
          </div>
          <div className={Styles.useRegister_contentImage}>
            <Image
              src="/images/electronics.png"
              width="1016px"
              height="397px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default use;
