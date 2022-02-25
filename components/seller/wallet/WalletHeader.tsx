import React from "react";

export type WalletHeaderType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function WalletHeader({ setVisible }: WalletHeaderType) {
  return (
    <div className="tw-flex tw-justify-between">
      <h1 className="tw-font-semibold tw-text-lg tw-text-gray-kwek900">
        Wallet
      </h1>
      <button
        className="tw-rounded-md tw-capitalize tw-bg-red-kwek100 tw-text-white-100 tw-p-3 tw-flex"
        onClick={() => setVisible(true)}
      >
        <img src="/svg/atm.svg" alt="atm-card" className="tw-mr-2" /> Withdraw
        funds
      </button>
    </div>
  );
}
