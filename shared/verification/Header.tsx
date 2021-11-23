import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <header className="tw-bg-red-kwek100 tw-py-4 tw-px-8 tw-flex tw-justify-between">
      <nav>
        <div
          className="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-7 tw-w-7 tw-bg-white-200"
          onClick={goBack}
        >
          <i className="fas fa-long-arrow-alt-left tw-text-white-100" />
        </div>
      </nav>
      <nav>
        <div>
          <p className="tw-font-semibold tw-capitalize tw-text-yellow-filled tw-text-base lg:tw-text-2xl">
            verification
          </p>
        </div>
      </nav>
      <nav className="tw-text-white-100">
        <i className="fas fa-user" /> Hi Allison{" "}
        <i className="fas fa-caret-down" />
      </nav>
    </header>
  );
}

export default Header;
