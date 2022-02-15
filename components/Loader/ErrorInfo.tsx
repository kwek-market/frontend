import React from "react";

function ErrorInfo({ error }) {
  return (
    <div className="tw-py-5 tw-w-full tw-text-center">
      <h1 className="tw-text-error tw-font-bold tw-text-2xl">{error}</h1>
    </div>
  );
}

export default ErrorInfo;
