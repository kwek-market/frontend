import React from "react";
import Style from "./tracker.module.scss";

function ProgressTracker() {
  return (
    <section className="tw-bg-white-100 tw-py-10 tw-px-2 md:tw-px-8 tw-flex tw-justify-between tw-rounded-md">
      <>
        <div className={`tw-flex tw-flex-col tw-items-center tw-text-center`}>
          <div
            className={`tw-border-2 tw-border-solid tw-border-brown-kwek400 tw-rounded-full tw-h-7 tw-w-7`}
          ></div>
        </div>
        <div className="tw-border-t-2 tw-border-dotted tw-border-gray-kwek100 tw-opacity-50 tw-w-full tw-h-[1px] tw-mt-[0.8rem]"></div>
      </>

      <>
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <div className="tw-border-2 tw-border-solid tw-border-brown-kwek400 tw-rounded-full tw-h-7 tw-w-7"></div>
          <p className="tw-text-xs tw-font-medium tw-mt-2">Valid ID</p>
        </div>
        <div className="tw-border-t-2 tw-border-dotted tw-border-gray-kwek100 tw-opacity-50 tw-w-full tw-h-[1px] tw-mt-[0.8rem]"></div>
      </>

      <>
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <div className="tw-border-2 tw-border-solid tw-border-brown-kwek400 tw-rounded-full tw-h-7 tw-w-7"></div>
          <p className="tw-text-xs tw-font-medium tw-mt-2">Verify BVN</p>
        </div>
        <div className="tw-border-t-2 tw-border-dotted tw-border-gray-kwek100 tw-opacity-50 tw-w-full tw-h-[1px] tw-mt-[0.8rem]"></div>
      </>

      <>
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <div className="tw-border-2 tw-border-solid tw-border-brown-kwek400 tw-rounded-full tw-h-7 tw-w-7"></div>
          <p className="tw-text-xs tw-font-medium tw-mt-2">
            Verify Bank Account
          </p>
        </div>
      </>
    </section>
  );
}

export default ProgressTracker;
