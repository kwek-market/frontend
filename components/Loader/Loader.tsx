import React from "react";
import Loader from "react-loader-spinner";

function Load({className}: {className?: string}) {
  return (
    <div className={`tw-w-full tw-py-7 tw-flex tw-justify-center ${className}`}>
      <Loader type="Rings" width={60} height={60} color="#FC476E" />
    </div>
  );
}

export default Load;
