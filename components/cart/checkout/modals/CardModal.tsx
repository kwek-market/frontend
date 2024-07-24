import { Button, Modal } from "antd";
import React from "react";
import styles from "../checkGrid/checkGrid.module.scss";

function CardModal({ isModaltwoVisible, handletwoOk, handletwoCancel }) {
  return (
    (<Modal
      title="Enter Card Details"
      className={styles.pickup_modal}
      open={isModaltwoVisible}
      onOk={handletwoOk}
      onCancel={handletwoCancel}
      style={{ top: 20 }}
      footer={[
        <Button key="submit" type="primary" onClick={handletwoOk}>
          Pay now
        </Button>,
        <Button key="return" onClick={handletwoCancel}>
          Select another payment method
        </Button>,
      ]}
    >
      <div className="tw-flex tw-items-center tw-mb-6">
        <p className="tw-text-base tw-font-semibold tw-text-gray-kwek200 tw-mb-0">
          KWEK3553767777
        </p>
        <p className="tw-text-base tw-font-semibold tw-ml-auto tw-text-red-kwek100 tw-mb-0">
          $590.02
        </p>
      </div>
      <form>
        <div className="tw-mb-2.5 tw-w-full">
          <p className="tw-text-base tw-font-semibold tw-text-gray-kwek900 tw-mb-2.5">
            Card Number
          </p>
          <input
            className="tw-py-4 tw-px-20 tw-bg-gray-kwek700 tw-border-gray-kwek700 tw-rounded-[5px] tw-font-semibold tw-text-base tw-text-gray-kwek900 tw-appearance-none tw-w-full tw-outline-none"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-w-full">
          <div className="tw-my-5 tw-w-[48%]">
            <p className="tw-text-base tw-font-semibold tw-text-gray-kwek900 tw-mb-2.5">
              Date
            </p>
            <input
              type="number"
              required
              className="tw-py-4 tw-px-20 tw-bg-gray-kwek700 tw-border-gray-kwek700 tw-rounded-[5px] tw-font-semibold tw-text-base tw-text-gray-kwek900 tw-appearance-none tw-w-full tw-outline-none"
              placeholder="MM / YY"
            />
          </div>
          <div className="tw-my-5 tw-w-[48%] tw-ml-auto">
            <p className="tw-text-base tw-font-semibold tw-text-gray-kwek900 tw-mb-2.5">
              CVV
            </p>
            <input
              type="number"
              required
              className="tw-py-4 tw-px-20 tw-bg-gray-kwek700 tw-border-gray-kwek700 tw-rounded-[5px] tw-font-semibold tw-text-base tw-text-gray-kwek900 tw-appearance-none tw-w-full tw-outline-none"
              placeholder="123"
            />
          </div>
        </div>
      </form>
    </Modal>)
  );
}

export default CardModal;
