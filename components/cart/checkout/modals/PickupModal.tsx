import { Button } from "antd";
import Modal from "antd/lib/modal";
import Image from "next/legacy/image";
import React from "react";
import styles from "../checkGrid/checkGrid.module.scss";

function PickupModal({ isModaloneVisible, handleOk, handleCancel }) {
  return (
    <Modal
      title="Pickup Location"
      className={styles.pickup_modal}
      visible={isModaloneVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ top: 20 }}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk} block>
          Use This Address
        </Button>,
      ]}
    >
      <div className="tw-flex tw-items-center tw-mb-10">
        <p className="tw-text-base tw-font-semibold tw-mb-0 tw-text-gray-kwek200">
          Find the Pickup Location nearest to you
        </p>
        <a className="tw-text-base tw-font-semibold tw-ml-auto tw-text-red-kwek100">
          Show All
        </a>
      </div>
      <div className="tw-flex tw-flex-row tw-flex-wrap tw-w-full tw-justify-center tw-pb-10">
        <div
          style={{
            position: "relative",
            width: "48%",
            marginRight: "2%",
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <select
            style={{
              borderColor: "#574240",
              borderRadius: 5,
              padding: 16,
              appearance: "none",
              borderWidth: 1,
              width: "100%",
            }}
          >
            <option
              style={{ fontSize: 16, color: "#574240" }}
              selected
              disabled
            >
              Choose State
            </option>
          </select>
          <i
            style={{ position: "absolute", right: 0, marginRight: 15 }}
            className="fas fa-angle-down"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "48%",
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <select
            style={{
              borderColor: "#574240",
              borderRadius: 5,
              padding: 16,
              appearance: "none",
              borderWidth: 1,
              width: "100%",
            }}
          >
            <option
              style={{ fontSize: 16, color: "#574240" }}
              selected
              disabled
            >
              Choose City
            </option>
          </select>
          <i
            style={{ position: "absolute", right: 0, marginRight: 15 }}
            className="fas fa-angle-down"
          />
        </div>
      </div>
      <div style={{ width: "100%", height: 300, overflowY: "auto" }}>
        <button
          style={{
            backgroundColor: "#fdfcfc",
            borderWidth: 1,
            borderColor: "rgba(191, 165, 163, 0.5)",
            borderRadius: 5,
            padding: 24,
            marginBottom: 16,
            width: "100%",
            cursor: "pointer",
          }}
        >
          <div style={{}}>
            <p
              style={{
                fontWeight: 600,
                fontSize: 20,
                marginBottom: 8,
                color: "#af1328",
                textAlign: "left",
              }}
            >
              Pickup Location 1
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src="/svg/lochouse.svg" width="24" height="24" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                10, Medical Road, Computer Village, Ikeja
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 4 }}
            >
              <Image src="/svg/locphone.svg" width="18" height="18" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                +1 324 5748 902
              </p>
            </div>
          </div>
        </button>
        <button
          style={{
            backgroundColor: "#fdfcfc",
            borderWidth: 1,
            borderColor: "rgba(191, 165, 163, 0.5)",
            borderRadius: 5,
            padding: 24,
            marginBottom: 16,
            width: "100%",
            cursor: "pointer",
          }}
        >
          <div style={{}}>
            <p
              style={{
                fontWeight: 600,
                fontSize: 20,
                marginBottom: 8,
                color: "#af1328",
                textAlign: "left",
              }}
            >
              Pickup Location 1
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src="/svg/lochouse.svg" width="24" height="24" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                10, Medical Road, Computer Village, Ikeja
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 4 }}
            >
              <Image src="/svg/locphone.svg" width="18" height="18" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                +1 324 5748 902
              </p>
            </div>
          </div>
        </button>
        <button
          style={{
            backgroundColor: "#fdfcfc",
            borderWidth: 1,
            borderColor: "rgba(191, 165, 163, 0.5)",
            borderRadius: 5,
            padding: 24,
            marginBottom: 16,
            width: "100%",
            cursor: "pointer",
          }}
        >
          <div style={{}}>
            <p
              style={{
                fontWeight: 600,
                fontSize: 20,
                marginBottom: 8,
                color: "#af1328",
                textAlign: "left",
              }}
            >
              Pickup Location 1
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src="/svg/lochouse.svg" width="24" height="24" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                10, Medical Road, Computer Village, Ikeja
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 4 }}
            >
              <Image src="/svg/locphone.svg" width="18" height="18" />
              <p
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  color: "#574240",
                  textAlign: "left",
                  marginLeft: 12,
                }}
              >
                +1 324 5748 902
              </p>
            </div>
          </div>
        </button>
      </div>
    </Modal>
  );
}

export default PickupModal;
