import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../buttons/Button";

function Header() {
  const router = useRouter();
  const { seller } = useSelector((state: RootState) => state);

  function goBack() {
    router.back();
  }

  function saveItem() {}

  return (
    <header className="tw-bg-red-kwek100 tw-py-4 tw-px-2 md:tw-px-8 tw-flex tw-justify-between tw-items-center">
      <nav>
        <div
          className="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-7 tw-w-7"
          onClick={goBack}
        >
          <img src="/svg/left-arrow-long.svg" />
        </div>
      </nav>
      <nav>
        <div>
          <p className="tw-font-semibold tw-capitalize tw-text-white-100 tw-mb-0 tw-text-base lg:tw-text-2xl">
            upload new product
          </p>
        </div>
      </nav>
      <nav className="tw-text-white-100">
        <Button
          buttonStyle={
            "tw-bg-green-success tw-text-white-100 tw-text-xs tw-py-2 tw-px-5 tw-rounded-sm tw-capitalize hover:tw-text-yellow-filled"
          }
          text={"save item"}
          cmd={saveItem}
        />
      </nav>
    </header>
  );
}

export default Header;
