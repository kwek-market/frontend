import React from "react";

interface Prop {
  width?: number;
  height?: number;
}
const CancelIcon = ({ width, height }: Prop) => {
  const widthValue = width ? width : "28";
  const heightValue = height ? height : "28";
  return (
    <svg
      width={widthValue}
      height={heightValue}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M14 10.8894L24.8894 0L28 3.11062L17.1106 14L28 24.8894L24.8894 28L14 17.1106L3.11062 28L0 24.8894L10.8894 14L0 3.11062L3.11062 0L14 10.8894Z`}
        fill="#3A434B"
      />
    </svg>
  );
};

export default CancelIcon;
