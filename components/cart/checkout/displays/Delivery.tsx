import React, { Fragment, useState } from "react";
import styles from "../checkGrid/checkGrid.module.scss";
import Image from "next/image";
import { message } from "antd";

function Delivery({
  showModalone,
  step,
  setStep,
  deliveryMethod,
  setDeliveryMethod,
}) {
  const [editStatus, setEditStatus] = useState(true);

  function deliverFunc() {
    if (deliveryMethod === "door step") {
      console.log("door step");
    } else if (deliveryMethod === "pickup") {
      console.log("pickup");
    } else {
      return message.error("Select an option for delivery", 5);
    }
    setEditStatus(false);
    setStep(3);
  }

  return (
    <div className={styles.delivery_container}>
      <div className={styles.title_box}>
        <Image
          src={editStatus ? "/svg/inactivetick.svg" : "/svg/activetick.svg"}
          width="32"
          height="32"
        />
        <p>2. DELIVERY METHOD</p>
      </div>
      {step >= 2 && (
        <Fragment>
          <p className={styles.sub}>
            How do you want your order to be delivered?
          </p>
          {editStatus ? (
            <Fragment>
              <div className={styles.option_box}>
                <div className={styles.option_grid}>
                  <button
                    className={styles.option_one}
                    onClick={() => setDeliveryMethod("door step")}
                  >
                    <Image src="/svg/bike.svg" width="56" height="56" />
                    <div className={styles.info}>
                      <p className={styles.head}>Deliver To Me</p>
                      <p className={styles.sub_text}>
                        Delivered within 24hrs for ₦100
                      </p>
                    </div>
                  </button>
                  <button
                    className={styles.option_two}
                    onClick={() => setDeliveryMethod("pickup")}
                  >
                    <Image src="/svg/location.svg" width="56" height="56" />
                    <div className={styles.info}>
                      <div className={styles.header}>
                        <p className={styles.head}>Pick-Up Station</p>
                        <a className={styles.pickupbtn} onClick={showModalone}>
                          Select Pickup Location
                        </a>
                      </div>
                      <p className={styles.sub_text}>
                        Select a pickup location in your area from our 33
                        locations nationwide
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <button type="submit" onClick={() => deliverFunc()}>
                Proceed to Continue
              </button>
            </Fragment>
          ) : (
            <div className={styles.form_content}>
              <div className={styles.top_head}>
                <p className={styles.name}>Deliver to me</p>
                <a className={styles.edit} onClick={() => setEditStatus(true)}>
                  Edit Information
                </a>
              </div>
              <p className={styles.contact}>Deliver within 24hrs for ₦100</p>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Delivery;
