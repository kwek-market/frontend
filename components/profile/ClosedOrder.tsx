import React from 'react';
import Button from '@/components/buttons/Button';
import Badge from '@/components/badge/Badge';
import { OrderProps } from './OpenOrder';

const ClosedOrder = function ({ order, setActiveBtn }: OrderProps) {
  function checkDetails() {
    setActiveBtn('Closed Order Details');
  }
  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-border tw-border-gray-kwek700 tw-rounded-md tw-p-2">
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-grid tw-grid-cols-kwek-4 tw-gap-[5px]">
          <img src="/images/order.png" alt="" className="tw-rounded-md" />
        </div>
        <div className="tw-ml-0 md:tw-ml-2 tw-flex tw-flex-col tw-justify-between">
          <div>
            <h3 className="tw-text-base md:tw-text-lg lg:tw-text-2xl tw-font-medium tw-text-gray-kwek200">
              Men’s Winter Wool Jackets - Brown
            </h3>
            <span className="tw-opacity-60 tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock">
              Order KWK12345357398
            </span>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-items-end">
        <Badge
          badgeStyle="tw-bg-black-stock tw-opacity-40 tw-p-1.5 tw-text-xs tw-text-center tw-text-white-100 tw-inline tw-uppercase tw-whitespace-nowrap"
          text="CANCELLED - PAYMENT UNSUCCESSFUL"
        />
        <Button
          buttonStyle="tw-underline tw-text-yellow-primary tw-uppercase"
          text="See Details"
          cmd={() => checkDetails()}
        />
      </div>
    </div>
  );
};

export default ClosedOrder;
