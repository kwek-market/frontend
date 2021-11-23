import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <header className="tw-bg-red-kwek100 tw-py-4 tw-px-8 tw-flex tw-justify-between">
      <nav className="tw-flex-[2]">
        <Link href="/">
          <a>
            <img src="/svg/kwek-logo-white.svg" alt="logo" />
          </a>
        </Link>
      </nav>
      <nav className="tw-flex tw-justify-between tw-flex-[4]">
        <nav>
          <Link href="/seller/profile">
            <a
              className={`tw-mr-5 ${
                router.pathname === "/seller/profile"
                  ? "tw-text-yellow-filled tw-border-b-2 tw-border-yellow-filled tw-pb-2"
                  : "tw-text-white-100"
              }  tw-capitalize `}
            >
              your store
            </a>
          </Link>
          <Link href="/">
            <a className="tw-mr-5 tw-text-white-100 tw-capitalize tw-pb-2">
              pricing
            </a>
          </Link>
          <Link href="/">
            <a className="tw-mr-5  tw-text-white-100 tw-capitalize  tw-pb-2">
              buy on kwek
            </a>
          </Link>
        </nav>
        <nav className="tw-flex ">
          <div className="tw-relative tw-mr-5">
            <i className="fas fa-bell fa-lg tw-text-yellow-kwek100" />
            <span className="tw-absolute tw--top-1 tw-left-2 tw-text-white-100 tw-h-[0.15rem] tw-w-[0.15rem] tw-p-1.5 tw-z-20 tw-bg-red-notif tw-rounded-full tw-text-[10px] tw-flex tw-justify-center tw-items-center">
              1
            </span>
          </div>
          <div className="tw-text-white-100">
            <i className="fas fa-user" /> Hi Allison{" "}
            <i className="fas fa-caret-down" />
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
