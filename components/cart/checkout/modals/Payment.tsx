import { Button, Modal } from "antd";
import React from "react";
import styles from "../checkGrid/checkGrid.module.scss";

function Payment({ isModalfourVisible, handlefourOk, handlefourCancel }) {
  return (
    (<Modal
      title="Transfer"
      className={styles.pickup_modal}
      open={isModalfourVisible}
      onOk={handlefourOk}
      onCancel={handlefourCancel}
      style={{ top: 20 }}
      footer={[
        <Button key="submit" type="primary" onClick={handlefourOk}>
          I have made a Transfer
        </Button>,
        <Button key="return" onClick={handlefourCancel}>
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
      <div style={{}}>
        <p style={{ fontSize: 18, color: "#574240", marginBottom: 24 }}>
          Kindly transfer to the Account below using the Transaction ID as Ref,
          then click the “I have made a transfer” button to complete
          thetransaction.
        </p>
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p style={{ fontSize: 16, color: "#574240", marginBottom: 0 }}>
              Amount:
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#574240",
                marginBottom: 0,
                marginLeft: "auto",
              }}
            >
              $590.02
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p style={{ fontSize: 16, color: "#574240", marginBottom: 0 }}>
              Bank Name:
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#574240",
                marginBottom: 0,
                marginLeft: "auto",
              }}
            >
              Kuda Bank
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p style={{ fontSize: 16, color: "#574240", marginBottom: 0 }}>
              Account Number:
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#574240",
                marginBottom: 0,
                marginLeft: "auto",
              }}
            >
              00123456789
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p style={{ fontSize: 16, color: "#574240", marginBottom: 0 }}>
              Account Name:
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#574240",
                marginBottom: 0,
                marginLeft: "auto",
              }}
            >
              Coco le Design
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p style={{ fontSize: 16, color: "#574240", marginBottom: 0 }}>
              Transaction ID:
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#574240",
                marginBottom: 0,
                marginLeft: "auto",
              }}
            >
              THX000923890
            </p>
          </div>
        </div>
      </div>
    </Modal>)
  );
}

export default Payment;
