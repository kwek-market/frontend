import { RootState } from "@/store/rootReducer";
import Link from "next/dist/client/link";
import React from "react";
import { useSelector } from "react-redux";

const SellerLandingHead = () => {
  const { user, seller } = useSelector((state: RootState) => state);

  return (
    <div className=" tw-bg-[#ffffff] tw-py-9 2xl:tw-py-14 tw-px-[5%] tw-flex tw-gap-x-14">
      <Link href="/">
        <a>
          <img src="/svg/kweklogo.svg" />
        </a>
      </Link>
      <div className=" tw-font-poppins tw-font-[500] tw-text-base tw-flex tw-gap-x-16  2xl:tw-text-lg">
        <Link href={"/sell"}>
          <a className="tw-text-black-kwek100">Shop</a>
        </Link>
        <Link href={"/aboutUs"}>
          <a className="tw-text-black-kwek100">About Us</a>
        </Link>
        <Link href={"/contact-us"}>
          <a className="tw-text-black-kwek100">Contact us</a>
        </Link>
        <Link href={"/"}>
          <a className="tw-text-black-kwek100">Buy on Kwek</a>
        </Link>
        {!user.user.isSeller ? (
          <Link href={"/sell/create-account"}>
            <a className="tw-text-black-kwek100">Register now</a>
          </Link>
        ) : (
          <Link href="/seller/profile">
            <a className="tw-text-black-kwek100">Account</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SellerLandingHead;
