import React from "react";
import Image from "next/image";

type UseBoxProps = {
  imgSrc: string;
  bgColor?: string;
  title: string;
  desc: string;
};
function UseBox({ imgSrc, bgColor, title, desc }: UseBoxProps) {
  return (
    <div className={`tw-flex tw-flex-row tw-justify-center tw-items-center tw-p-10 ${bgColor}`}>
      <div className="tw-inline tw-self-start">
        <Image src={imgSrc} height="72px" width="72px" />
      </div>
      <div className="tw-text-left tw-ml-5">
        <h3 className="tw-font-semibold tw-text-base md:tw-text-xl tw-text-gray-kwek300">
         {title}
        </h3>
        <p className="tw-font-normal tw-text-sm md:tw-text-lg tw-text-gray-kwek300">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default UseBox;
