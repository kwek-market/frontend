import React from "react";

function Header({ title, num }) {
  return (
    <nav className="tw-bg-red-kwek100 tw-mt-5 tw-py-4 tw-px-7 tw-flex tw-justify-between tw-rounded-t-md">
      <div>
        <p className="tw-uppercase tw-text-white-100 tw-font-semibold tw-text-base md:tw-text-2xl">
          {title}
        </p>
      </div>
      <div>
        <p>
          <span className="tw-text-white-100 tw-text-base md:tw-text-2xl tw-font-semibold">
            {num}
          </span>
          <span className="tw-text-white-100 tw-opacity-50">/4</span>
        </p>
      </div>
    </nav>
  );
}

export default Header;
