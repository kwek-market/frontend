import React from "react";
import Image from "next/image";

function Feature({ imgSrc, title, description }) {
  return (
    <div className="tw-flex tw-flex-row">
      <div className="tw-rounded-full" style={{flex: 1}}>
        <img
          src={imgSrc}
          alt={title}
          width="200"
          className="tw-rounded-full tw-"
        />
      </div>
      <div className="tw-flex tw-flex-col tw-justify-between tw-ml-10 tw-pr-5" style={{flex: 5}}>
        <p className="tw-font-semibold tw-text-base md:tw-text-2xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
