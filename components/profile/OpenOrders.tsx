import React from 'react';
import { OpenOrder } from './index';

const OpenOrders = function ({ setActiveBtn }) {
  return (
    <>
      <OpenOrder setActiveBtn={setActiveBtn} />
      <OpenOrder setActiveBtn={setActiveBtn} />
    </>
  );
};

export default OpenOrders;
