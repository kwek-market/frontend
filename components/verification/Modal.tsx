import { useRouter } from "next/router";
import React from "react";

function Modal() {
  const router = useRouter();

  function handleClick() {
    router.push("/sell/verification");
  }

  return (
    <div className="tw-bg-gray-kwek200a tw-flex tw-justify-center tw-items-center tw-z-30 tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 ">
      <div className="tw-w-3/5 tw-bg-white-100 tw-rounded-md tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-14">
        <div className="tw-rounded-full">
          <img src="/images/user.png" />
        </div>
        <div className="tw-px-6 tw-text-center tw-my-5">
          <p className="tw-text-gray-kwek200 tw-font-semibold tw-text-base md:tw-text-3xl tw-mb-2">
            {" "}
            Welcome Alison !
          </p>
          <p className="tw-text-gray-kwek900 tw-opacity-80">
            Great to have you here! First let’s verify your personal
            <br /> information for your store to be on the move!
          </p>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="tw-rounded-md tw-py-3 tw-px-6 tw-bg-red-kwek100 tw-text-white-100 tw-font-medium tw-text-sm"
          >
            Lets get started <i className="fas fa-long-arrow-alt-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
