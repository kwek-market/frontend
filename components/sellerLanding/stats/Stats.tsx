import React from "react";

function stats() {
  const statsDetails = [
    {
      title: "1,432,908",
      description: "Active buyers",
    },
    {
      title: "314,546",
      description: "Daily product inquiry",
    },
    {
      title: "200+",
      description: "regions represented",
    },
    {
      title: "12,087",
      description: "Stores registered",
    },
  ];
  return (
    <div className="tw-py-10 tw-px-16 tw-flex tw-flex-row tw-flex-wrap tw-justify-center md:tw-justify-between md:tw-divide-x-2 md:tw-divide-gray-300">
      {statsDetails.map((stat, index) => (
        <div key={index} className="tw-text-center tw-p-2 md:tw-p-6">
          <h2 className="tw-text-lg md:tw-text-2xl lg:tw-text-5xl tw-text-gray-kwek200 tw-font-semibold tw-mb-2">{stat.title}</h2>
          <p className="tw-text-base md:tw-text-xl tw-font-normal">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}

export default stats;
