import React from "react";

export const FormHead = ({ children }) => {
  return (
    <div className=" tw-pb-4 tw-border-b tw-border-b-[#D7DCE0] tw-mt-12">
      <h2 className="tw-mb-0 tw-text-2xl tw-font-normal">{children}</h2>
    </div>
  );
};

export const FormItems = ({ children }) => {
  return <div className=" tw-pt-6 tw-space-y-6">{children}</div>;
};
