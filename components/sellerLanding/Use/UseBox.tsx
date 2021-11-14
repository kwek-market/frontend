import React from 'react';
import Image from 'next/image';

type UseBoxProps = {
  imgSrc: string;
  bgColor?: string;
  title: string;
  desc: string;
};
const UseBox = function ({ imgSrc, bgColor, title, desc }: UseBoxProps) {
  return (
    <div className={`tw-grid tw-grid-cols-kwek-3 tw-justify-center tw-items-center tw-p-4 md:tw-p-10 ${bgColor}`}>
      <div className="tw-self-start">
        <img src={imgSrc} width="80px" height="80px" />
      </div>
      <div className="tw-text-left tw-ml-2 md:tw-ml-5">
        <h3 className="tw-font-semibold tw-text-base md:tw-text-xl tw-text-gray-kwek300">{title}</h3>
        <p className="tw-font-normal tw-text-sm md:tw-text-lg tw-text-gray-kwek300">{desc}</p>
      </div>
    </div>
  );
};

export default UseBox;
