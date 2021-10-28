import React from "react";
type CategoryMobileProps = {
  imgSrc: string;
  text: string;
  style?: string;
};

function CategoryMobile({ imgSrc, text, style }: CategoryMobileProps) {
  return (
    <div className="tw-px-8">
      <img src={imgSrc} alt={text} className={`${style} tw-text-center`} />
      <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2 tw-text-center">
        {" "}
        {text}
      </p>
    </div>
  );
}

export default CategoryMobile;
