import React, { useState } from "react";

import styles from "./checkGrid.module.scss";
import CartTab from "../cartTab/CartTab";
import PickupModal from "../modals/PickupModal";
import CartInfo from "../displays/CartInfo";
import Billing from "../displays/Billing";
import Delivery from "../displays/Delivery";
import PaymentBox from "../displays/PaymentBox";

function CheckGrid() {
  const [step, setStep] = useState(1);
  const [addressId, setAddressId] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<string>("");
  const [isModaloneVisible, setIsModaloneVisible] = useState(false);

  const showModalone = () => {
    setIsModaloneVisible(true);
  };

  const handleOk = () => {
    setIsModaloneVisible(false);
  };

  const handleCancel = () => {
    setIsModaloneVisible(false);
  };

  return (
    <div>
      <CartTab />
      <div className={styles.checkout_container}>
        <div className={`${styles.first_box} `}>
          <Billing setStep={setStep} addressId={addressId} setAddressId={setAddressId} />
          <Delivery
            showModalone={showModalone}
            step={step}
            setStep={setStep}
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={setDeliveryMethod}
          />
          <PaymentBox step={step} addressId={addressId} />
        </div>
        <CartInfo />
      </div>
      <PickupModal
        isModaloneVisible={isModaloneVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default CheckGrid;
