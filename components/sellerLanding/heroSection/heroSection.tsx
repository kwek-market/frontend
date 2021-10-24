import React from "react";
import Styles from "./heroSection.module.scss";
// import image
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const heroSection = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hero_split}>
        <div className={Styles.hero_textContent}>
          <h1 className="tw-text-3xl md:text-6xl tw-font-bold tw-text-gray-kwek200 tw-text-center md:tw-text-left">
            Make Money & Grow your Business Online
          </h1>
          <p className="tw-text-base md:tw-text-xl tw-text-black-stock tw-font-light tw-text-center md:tw-text-left">
            Reach millions of buyers in every state in Nigeria easily, get your
            store on KwekMarket today!
          </p>
          <button
            className={`btn bg-primary tw-p-4 tw-font-medium tw-w-9/12 tw-m-auto md:tw-w-auto md:tw-m-0`}
          >
            Start your free trial{" "}
            <i className="fas fa-long-arrow-alt-right fa-2x tw-ml-2"></i>
          </button>
        </div>

        <div className={Styles.hero_image}>
          <div className={`${Styles.hero_image1__div} md:tw-block tw-hidden`}>
            <Image
              className={`circle-image `}
              src="/images/smiling-people.png"
              width="210"
              height="210"
            />
          </div>
          <div className={`tw-relative tw-left-32 md:tw-block tw-hidden`}>
            <Image
              className={`circle-image ${Styles.hero_image2}`}
              src="/images/flower-girl.png"
              width="110"
              height="110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
