import useBilling from "@/hooks/useBilling";
import { BillingAddressType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import Image from "next/legacy/image";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertCitiesToJSON } from "../../../../helpers/helper";
import { useGetStateDeliveryFee } from "../../../../hooks/admin/stateDeliveryFee";
import useBillingUpdate from "../../../../hooks/useBillingUpdate";
import { setDeliveryFee } from "../../../../store/deliveryFee/deliveryFee.action";
import Load from "../../../Loader/Loader";
import styles from "../checkGrid/checkGrid.module.scss";

function Billing({ setStep, addressId, setAddressId }) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetStateDeliveryFee({ token: user?.token });

  const states = data?.getStateDeliveryFee;

  const [selectedState, setSelectedState] = useState("");
  const {
    user: { billingSet },
  } = user;
  const { mutate } = useBilling(user.token, setAddressId);
  const { mutate: updateBilling } = useBillingUpdate(user.token);

  const [editStatus, setEditStatus] = useState(true);
  const [selectedBillingSetInfo, setSelectedBillingSetInfo] = useState(null);

  const [oldAddress, setOldAddress] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    dispatch(setDeliveryFee(null, null, null));
  }, []);

  const [selectedCity, setSelectedCity] = useState(null);

  const filteredStates = states?.filter(
    state => state.fee > 0 && convertCitiesToJSON(state.city).length > 0
  );

  const selectedStateCity = filteredStates?.find(
    state => state.state.toLowerCase() === selectedState?.toLowerCase()
  )?.city;

  function saveAddress(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { fullName, contact, email, address, city, state } = billingInfo;
    if (fullName.trim() === "") {
      return message.error("Enter a firstname");
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
      fullName,
      contact,
      address,
      state,
      city,
      token: user.token,
    };
    mutate(payload, {
      onSuccess(data, variables, context) {
        message.success("Address added successfully");
      },
    });

    setStep(2);
  }

  function handleCheckBox() {
    setEditStatus(oldAddress);
    setOldAddress(!oldAddress);
    setStep(1);
  }

  console.log("fucking billing info", billingInfo);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setAddressId(e.target.value);

    const billing = billingSet?.find(set => set?.id === e.target.value);
    console.log("🚀 ~~ handleSelect ~~ billing:", billing);

    setBillingInfo({ ...billing });

    if (billing?.city) {
      setSelectedState(billing?.state);

      const stateAndFee = filteredStates?.find(
        s => s?.state?.toLowerCase() === billing.state?.toLowerCase()
      );
      console.log("🚀 ~~ handleSelect ~~ stateAndFee:", stateAndFee);

      const city = convertCitiesToJSON(stateAndFee?.city)?.find(c => billing.city === c.name);

      if (city) {
        dispatch(setDeliveryFee(stateAndFee.state, city?.fee, city?.name));
      } else {
        message.error("Delivery is not available for this city, Please edit the city", 2);
      }
    }

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
          width='32'
          height='32'
        />
        <p>1. BILLING DETAILS</p>
      </div>
      <div className='tw-ml-7 tw-mb-5'>
        {billingSet?.length > 0 && (
          <div>
            <label className='tw-font-medium tw-text-lg tw-capitalize'>
              use old Address{" "}
              <input
                type='checkbox'
                name='billing-address'
                checked={oldAddress}
                onChange={() => handleCheckBox()}
              />
            </label>
          </div>
        )}
        {oldAddress && (
          <select className='tw-w-full' onChange={e => handleSelect(e)}>
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
            <div className={`${styles.input_box} !tw-col-span-2`}>
              <input
                type='text'
                name='fullName'
                placeholder='FullName'
                required
                value={billingInfo.fullName}
                onChange={e => setBillingInfo({ ...billingInfo, fullName: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.input_grid}>
            <div className={styles.select_box}>
              <div className={styles.custom}>
                <select>
                  <option defaultValue={"+234"}>+234</option>
                </select>
                <i className='fas fa-angle-down' />
              </div>
              <input
                type='text'
                name='Phone Number'
                placeholder='Phone Number'
                required
                value={billingInfo.contact}
                onChange={e => setBillingInfo({ ...billingInfo, contact: e.target.value })}
              />
            </div>
            <div className={styles.input_box}>
              <input
                type='email'
                name='Email Address'
                placeholder='Email Address'
                required
                value={billingInfo.email}
                onChange={e => setBillingInfo({ ...billingInfo, email: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.one_input}>
            <textarea
              placeholder='Address'
              value={billingInfo.address}
              required
              onChange={e => setBillingInfo({ ...billingInfo, address: e.target.value })}
            />
          </div>
          <div className='tw-my-3'>
            {isLoading ? <Load /> : null}

            {states ? (
              <select
                className='tw-block tw-py-4 tw-w-full tw-rounded-sm tw-border-gray-kwek700'
                id='state'
                value={billingInfo.state}
                onChange={e => {
                  if (e.target.value) {
                    setSelectedState(e.target.value);
                    setBillingInfo({ ...billingInfo, state: e.target.value });
                  }
                }}
              >
                <option value=''>--Select State--</option>
                {filteredStates?.map(state => (
                  <option
                    className='tw-flex tw-justify-between tw-items-center'
                    key={state.state}
                    value={state.state}
                    data-fee={state.fee}
                  >
                    {state.state}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
          <div className='tw-my-3'>
            {selectedState ? (
              <select
                className='tw-block tw-py-4 tw-w-full tw-rounded-sm tw-border-gray-kwek700'
                id='city'
                value={billingInfo.city}
                onChange={e => {
                  if (e.target.value) {
                    setSelectedCity(e.target.value);
                    setBillingInfo({ ...billingInfo, city: e.target.value });

                    const city = convertCitiesToJSON(selectedStateCity).find(
                      city => city.name === e.target.value
                    );

                    setBillingInfo({ ...billingInfo, city: e.target.value });

                    dispatch(setDeliveryFee(selectedState, city.fee, city.name));
                  }
                }}
              >
                <option value=''>--Select City--</option>
                {convertCitiesToJSON(selectedStateCity)?.map(city => (
                  <option
                    className='tw-flex tw-justify-between tw-items-center'
                    key={city.name}
                    value={city.name}
                    data-fee={city.fee}
                  >
                    {city.name}, Fee: {city.fee}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
          {!oldAddress ? (
            <button type='submit' onClick={e => saveAddress(e)}>
              Save & Continue
            </button>
          ) : (
            <button
              onClick={() => {
                setEditStatus(false);
                updateBilling(
                  {
                    address: billingInfo.address,
                    city: billingInfo.city,
                    addressId: addressId,
                    contact: billingInfo.contact,
                    fullName: billingInfo.fullName,
                    state: billingInfo.state,
                  },
                  {
                    onSuccess(data, variables, context) {
                      message.success("Updated Billing Address successfully");
                    },
                  }
                );
              }}
            >
              Proceed
            </button>
          )}
        </form>
      ) : (
        <div className={styles.form_content}>
          <div className={styles.top_head}>
            <p className={styles.name}>{billingInfo.fullName}</p>
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
