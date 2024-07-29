import { Button, Modal } from "antd";
import React from "react";
import styles from "../checkGrid/checkGrid.module.scss";

function Transfer({ isModalthreeVisible, handlethreeCancel, showModalfour }) {
  return (
    <Modal
      title="Transfer"
      className={styles.pickup_modal}
      visible={isModalthreeVisible}
      onCancel={handlethreeCancel}
      style={{ top: 20 }}
      footer={[
        <Button key="submit" type="primary" onClick={showModalfour}>
          Proceed
        </Button>,
        <Button key="return" onClick={handlethreeCancel}>
          Select another payment method
        </Button>,
      ]}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#1d1616",
            marginBottom: 0,
          }}
        >
          KWEK3553767777
        </p>
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginLeft: "auto",
            color: "#af1328",
            marginBottom: 0,
          }}
        >
          $590.02
        </p>
      </div>
      <form>
        <div style={{ marginBottom: 10, width: "100%" }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#574240",
              marginBottom: 10,
            }}
          >
            Full Name
          </p>
          <input
            className="tw-py-14 tw-px-20 tw-bg-gray-kwek700 tw-border-gray-kwek700 tw-rounded-[5px] tw-font-semibold tw-text-base tw-text-gray-kwek900 tw-appearance-none tw-w-full tw-outline-none"
            placeholder="Enter your full name here"
          />
        </div>
      </form>
    </Modal>
  );
}

export default Transfer;
