import React from "react";
import Styles from "./use.module.scss";

import Image from "next/image";

const use = () => {
  return (
    <div className={Styles.Use}>
      <div className="tw-text-center tw-p-2 tw-my-3 md:tw-my-5 lg:tw-my-10">
        <h2 className="tw-font-semibold tw-text-gray-kwek200 tw-text-base md:tw-text-2xl lg:tw-text-5xl">
          How it Works
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-px-5 md:tw-px-7">
        <div className="tw-flex tw-flex-row">
          <div className={Styles.UseList_contentLogo}>
            <Image src="/svg/Feature-icon-1.svg" height="72px" width="72px" />
          </div>
          <div className={Styles.UseList_contentText}>
            <h3 className="tw-font-semibold tw-text-lg md:tw-text-2xl tw-text-gray-kwek300">
              Ideate
            </h3>
            <p className="tw-font-normal tw-text-sm md:tw-text-xl tw-text-gray-kwek300">
              Turn your idea from concept to MVP
            </p>
          </div>
        </div>
        <div className="tw-flex tw-flex-row">
          <div className={Styles.UseList_contentLogo}>
            <Image src="/svg/Feature-icon-2.svg" height="72px" width="72px" />
          </div>
          <div className={Styles.UseList_contentText}>
            <h3 className="tw-font-semibold tw-text-lg md:tw-text-2xl tw-text-gray-kwek300">
              Design
            </h3>
            <p className="tw-font-normal tw-text-sm md:tw-text-xl tw-text-gray-kwek300">
              Sketch out the product to align the user needs
            </p>
          </div>
        </div>
        <div className="tw-flex tw-flex-row">
          <div className={Styles.UseList_contentLogo}>
            <Image src="/svg/Feature-icon-3.svg" height="72px" width="72px" />
          </div>
          <div className={Styles.UseList_contentText}>
            <h3 className="tw-font-semibold tw-text-lg md:tw-text-2xl tw-text-gray-kwek300">
              Develop
            </h3>
            <p className="tw-font-normal tw-text-sm md:tw-text-xl tw-text-gray-kwek300">
              Convert the designs into a live application
            </p>
          </div>
        </div>
        <div className="tw-flex tw-flex-row">
          <div className={Styles.UseList_contentLogo}>
            <Image src="/svg/Feature-icon-3.svg" height="72px" width="72px" />
          </div>
          <div className={Styles.UseList_contentText}>
            <h3 className="tw-font-semibold tw-text-lg md:tw-text-2xl tw-text-gray-kwek300">
              Deploy
            </h3>
            <p className="tw-font-normal tw-text-sm md:tw-text-xl tw-text-gray-kwek300">
              Launching the application to the market
            </p>
          </div>
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
