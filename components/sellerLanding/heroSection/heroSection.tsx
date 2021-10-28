import React, { useState } from "react";
import Styles from "./heroSection.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
// import image
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/components/buttons/Button";

const heroSection = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={Styles.hero}>
      <div className="tw-flex tw-justify-between">
        <img src="/svg/kweklogo.svg" />
        <div className="md:tw-flex tw-justify-center tw-items-center tw-hidden">
          <Link href="/sell">
            <a className={Styles.sell}>
              <span className="tw-mr-3 lg:tw-mr-5">
                Marketplace
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className={Styles.sell}>
              <span className="tw-mr-3 lg:tw-mr-5">
                Pricing
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className={Styles.sell}>
              <span className="tw-mr-3 lg:tw-mr-5">
                Buy on kwek
              </span>
            </a>
          </Link>
          <Button
            buttonStyle={
              "tw-p-3 tw-text-white-100 tw-rounded-md tw-bg-red-kwek100"
            }
            text={"Register now"}
            cmd={() => router.push("/create-account")}
          />
        </div>
        <i
          className="fas fa-bars fa-2x tw-text-black-stock tw-block md:tw-hidden"
          onClick={() => setShowMenu(true)}
        />
        {showMenu && (
          <div className="tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-z-30 tw-bg-white-light tw-w-7/12">
            <div className="tw-flex tw-flex-col tw-justify-around tw-items-center tw-h-full tw-py-4 md:tw-hidden">
              <i
                className="fas fa-times fa-2x tw-text-black-stock tw-block md:tw-hidden"
                onClick={() => setShowMenu(false)}
              />
              <Link href="/sell">
                <a className={Styles.sell}>
                  <span className="tw-mr-3 lg:tw-mr-5 active:tw-text-red-kwek-100 active:tw-border active:tw-border-bottom">
                    Marketplace
                  </span>
                </a>
              </Link>
              <Link href="/">
                <a className={Styles.sell}>
                  <span className="tw-mr-3 lg:tw-mr-5">
                    Pricing
                  </span>
                </a>
              </Link>
              <Link href="/">
                <a className={Styles.sell}>
                  <span className="tw-mr-3 lg:tw-mr-5">
                    Buy on kwek
                  </span>
                </a>
              </Link>
              <Button
                buttonStyle={
                  "tw-p-3 tw-text-white-100 tw-rounded-md tw-bg-red-kwek100"
                }
                text={"Register now"}
                cmd={() => router.push("/create-account")}
              />
            </div>
          </div>
        )}
      </div>
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
            className={`btn bg-primary tw-p-4 tw-font-medium tw-w-9/12 tw-m-auto md:tw-w-auto md:tw-m-0 tw-text-base`}
            onClick={() => router.push("/create-account")}
          >
            Start your free trial{" "}
            <i className="fas fa-long-arrow-alt-right fa-2x tw-ml-2"></i>
          </button>
        </div>

        <div className="md:tw-ml-36 lg:tw-ml-52">
          <div className={`md:tw-block tw-hidden`}>
            <Image
              className={`circle-image `}
              src="/images/smiling-people.png"
              width="210"
              height="210"
            />
          </div>
          <div className={`tw-relative lg:tw-left-28 md:tw-block tw-hidden`}>
            <img
              src="/images/flower-girl.png"
              className="circle-image md:tw-w-20 lg:tw-w-32"
            />
            {/* <Image
              className={`circle-image ${Styles.hero_image2}`}
              src="/images/flower-girl.png"
              width="110"
              height="110"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
