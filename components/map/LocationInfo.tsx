import React from "react";

export type LocationInfoProps = {
  name: string;
  address: string;
};

function LocationInfo({ name, address }: LocationInfoProps) {
  return (
    <div className="tw-absolute tw-top-12 tw-right-0 tw-w-64 tw-min-h-[200px] tw-p-3 tw-bg-black-stock tw-bg-opacity-70">
      <h2 color="beige">Location Info</h2>
      <p color="beige">{name}</p>
      <p color="beige">{address}</p>
    </div>
  );
}

export default LocationInfo;
