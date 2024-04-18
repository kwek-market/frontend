import React, { Fragment, useState } from "react";
import styles from "../checkGrid/checkGrid.module.scss";
import Image from "next/legacy/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { BillingAddressType } from "@/interfaces/commonTypes";
import { message } from "antd";
import useBilling from "@/hooks/useBilling";

function Billing({ setStep, addressId, setAddressId }) {
  const { user } = useSelector((state: RootState) => state);
  const {
    user: { billingSet },
  } = user;
  const [editStatus, setEditStatus] = useState(true);
  const [oldAddress, setOldAddress] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const { mutate } = useBilling(user.token, setAddressId);

  function saveAddress(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { firstname, lastname, contact, email, address, city, state } =
      billingInfo;
    if (firstname.trim() === "") {
      return message.error("Enter a firstname");
    }
    if (lastname.trim() === "") {
      return message.error("Enter a lastname");
    }
    if (contact.trim() === "") {
      return message.error("Enter a contact number");
    }
    if (email.trim() === "") {
      return message.error("Enter an email address");
    }
    if (address === "") {
      return message.error("Enter an address");
    }
    if (state === "") {
      return message.error("Enter a state");
    }
    if (city === "") {
      return message.error("Enter a city");
    }
    setEditStatus(false);
    const payload: BillingAddressType = {
      fullName: `${firstname} ${lastname}`,
      contact,
      address,
      state,
      city,
      token: user.token,
    };
    mutate(payload);
    setStep(2);
  }

  function handleCheckBox() {
    setEditStatus(oldAddress);
    setOldAddress(!oldAddress);
    setStep(1);
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setAddressId(e.target.value);
    setStep(2);
  }

  function getAddressDetails(id: number) {
    return billingSet.find((item: any) => item.id === id);
  }

  return (
    <div className={styles.billing_container}>
      <div className={styles.title_box}>
        <Image
          src={!editStatus ? "/svg/activetick.svg" : "/svg/inactivetick.svg"}
          width="32"
          height="32"
        />
        <p>1. BILLING DETAILS</p>
      </div>
      <div className="tw-ml-7 tw-mb-5">
        {billingSet?.length > 0 && (
          <div>
            <label className="tw-font-medium tw-text-lg tw-capitalize">
              use old Address{" "}
              <input
                type="checkbox"
                name="billing-address"
                checked={oldAddress}
                onChange={() => handleCheckBox()}
              />
            </label>
          </div>
        )}
        {oldAddress && (
          <select className="tw-w-full" onChange={(e) => handleSelect(e)}>
            <option>select address</option>
            {billingSet.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.fullName} - {item.address} - {item.city} - {item.state}
              </option>
            ))}
          </select>
        )}
      </div>
      {editStatus ? (
        <form>
          <div className={styles.input_grid}>
            <div className={styles.input_box}>
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
                value={billingInfo.firstname}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, firstname: e.target.value })
                }
              />
            </div>
            <div className={styles.input_box}>
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
                value={billingInfo.lastname}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, lastname: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.input_grid}>
            <div className={styles.select_box}>
              <div className={styles.custom}>
                <select>
                  <option defaultValue={"+234"}>+234</option>
                </select>
                <i className="fas fa-angle-down" />
              </div>
              <input
                type="text"
                name="Phone Number"
                placeholder="Phone Number"
                required
                value={billingInfo.contact}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, contact: e.target.value })
                }
              />
            </div>
            <div className={styles.input_box}>
              <input
                type="email"
                name="Email Address"
                placeholder="Email Address"
                required
                value={billingInfo.email}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.one_input}>
            <textarea
              placeholder="Address"
              value={billingInfo.address}
              required
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, address: e.target.value })
              }
            />
          </div>
          <div className="tw-my-3">
            <input
              className="tw-py-4 tw-w-full tw-rounded-sm tw-border-gray-kwek700"
              type="text"
              name="state"
              placeholder="state"
              required
              value={billingInfo.state}
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, state: e.target.value })
              }
            />
          </div>
          <div className="tw-my-3">
            <input
              className="tw-py-4 tw-w-full tw-rounded-sm tw-border tw-border-solid tw-border-gray-kwek700"
              type="text"
              name="city"
              placeholder="City"
              required
              value={billingInfo.city}
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, city: e.target.value })
              }
            />
          </div>
          {!oldAddress ? (
            <button type="submit" onClick={(e) => saveAddress(e)}>
              Save & Continue
            </button>
          ) : (
            <button onClick={() => setEditStatus(false)}>Proceed</button>
          )}
        </form>
      ) : (
        <div className={styles.form_content}>
          <div className={styles.top_head}>
            <p className={styles.name}>
              {billingInfo.firstname} {billingInfo.lastname}
            </p>
            <a onClick={() => setEditStatus(true)} className={styles.edit}>
              Edit Information
            </a>
          </div>
          {oldAddress ? (
            <Fragment>
              <p className={styles.contact}>
                {addressId &&
                  `
                ${getAddressDetails(addressId).address}, 
                ${getAddressDetails(addressId).city}, 
                ${getAddressDetails(addressId).state}
                `}
              </p>
              <p className={styles.contact}>
                +234 {addressId && getAddressDetails(addressId).contact}{" "}
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles.contact}>
                {billingInfo.address}, {billingInfo.city}, {billingInfo.state}
              </p>
              <p className={styles.contact}>+234 {billingInfo.contact}</p>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default Billing;
