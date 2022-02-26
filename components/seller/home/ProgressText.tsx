import React from "react";

export type ProgressType = {
  text: string;
  val: string;
};

export default function ProgressText({ text, val }) {
  return (
    <div className="tw-flex tw-justify-between">
      <p className="tw-text-sm tw-text-gray-kwek900 tw-font-semibold tw-uppercase tw-flex-1">
        {text}
      </p>
      <progress value={val} max="100" className="tw-flex-1" />
    </div>
  );
}
