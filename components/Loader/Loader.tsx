import React from "react";
import { Rings } from "react-loader-spinner";

function Load({ className }: { className?: string }) {
  return (
    <div className={`tw-w-full tw-py-7 tw-flex tw-justify-center ${className}`}>
      <Rings
        visible={true}
        height="60"
        width="60"
        color="#FC476E"
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Load;
