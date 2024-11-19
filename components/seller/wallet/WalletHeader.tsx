import React from "react";

export type WalletHeaderType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFundWalletModalOpen: (value: boolean) => void;
};

export default function WalletHeader({ setVisible, setIsFundWalletModalOpen }: WalletHeaderType) {
  return (
    <div className='lg:tw-flex tw-justify-between'>
      <h1 className='tw-font-semibold tw-text-lg tw-text-gray-kwek900'>Wallet</h1>

      <div className='tw-space-x-3 tw-flex tw-items-center tw-mt-4 lg:tw-mt-0v'>
        <button
          className='tw-rounded-md tw-capitalize tw-bg-yellow-500 tw-text-white-100 tw-p-3 tw-flex'
          onClick={() => setIsFundWalletModalOpen(true)}
        >
          <img src='/svg/atm.svg' alt='atm-card' className='tw-mr-2' /> Fund Wallet
        </button>
        <button
          className='tw-rounded-md tw-capitalize tw-bg-red-kwek100 tw-text-white-100 tw-p-3 tw-flex'
          onClick={() => setVisible(true)}
        >
          <img src='/svg/atm.svg' alt='atm-card' className='tw-mr-2' /> Withdraw funds
        </button>
      </div>
    </div>
  );
}
