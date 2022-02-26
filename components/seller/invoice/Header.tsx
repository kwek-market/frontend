import React from "react";

export default function Header() {
  return (
    <header className="tw-flex tw-bg-red-kwek100 tw-py-2 tw-px-3">
      <i className="fas fa-arrow-left tw-text-white-100 tw-text-xl" />
      <p className="tw-capitalize tw-text-white-100 tw-font-semibold tw-text-lg tw-mb-0">
        new invoice
      </p>
    </header>
  );
}
