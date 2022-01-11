import { useRouter } from "next/router";
import React from "react";

function VerifiedModal() {
  const router = useRouter();

  function handleClick() {
    router.push("/seller/profile");
  }

  return (
    <div className="tw-bg-gray-kwek200a tw-flex tw-justify-center tw-items-center tw-z-30 tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-left-0">
      <div className="tw-w-4/5 tw-h-[70%] tw-bg-white-100 tw-rounded-md tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-2 md:tw-p-14">
        <div className="tw-rounded-full">
          <img src="/svg/verified-pic.svg" />
        </div>
        <div className="tw-px-6 tw-text-center tw-my-5">
          <p className="tw-text-gray-kwek200 tw-font-semibold tw-text-base md:tw-text-3xl tw-mb-2">
            {" "}
            Verification Successful!
          </p>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="tw-rounded-md tw-py-3 tw-px-6 tw-bg-red-kwek100 tw-text-white-100 tw-font-medium tw-text-sm"
          >
            Start Earning!
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifiedModal;
