import React from 'react';
import Button from '@/components/buttons/Button';
import { AddressCard } from '../index';

const Addresses = function ({ activeBtn }) {
  function openModal() {}
  return (
    <>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50 tw-flex tw-flex-row tw-justify-between">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">{activeBtn}</h4>
        <Button
          buttonStyle="tw-p-2 tw-rounded-md tw-bg-yellow-filled tw-mb-2 tw-font-normal tw-text-gray-kwek200 tw-text-sm md:tw-text-base"
          text="New Address"
          cmd={openModal}
          icon="fa-plus"
        />
      </div>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-5 tw-justify-center tw-items-center tw-p-5 tw-rounded-lg tw-bg-gray-kwek700 tw-mt-3">
        <AddressCard />
        <AddressCard />
      </div>
    </>
  );
};

export default Addresses;
