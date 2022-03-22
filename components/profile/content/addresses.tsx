import React, { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import { AddressCard } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { message, Modal } from "antd";
import useBilling from "@/hooks/useBilling";
import { getUserData } from "@/store/user/user.actions";
import ErrorInfo from "@/components/Loader/ErrorInfo";

const Addresses = function ({ activeBtn }) {
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { mutate: createMutate, isSuccess } = useBilling(user.token);
  const {
    user: { billingSet },
  } = user;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    contact: "",
    address: "",
    city: "",
    state: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const { fullName, contact, address, city, state } = billingInfo;
    if (fullName.trim() === "") {
      return message.error("Enter a firstname");
    }
    if (contact.trim() === "") {
      return message.error("Enter a contact number");
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
    createMutate({ ...billingInfo, token: user.token });
    // reset form
    setBillingInfo({
      fullName: "",
      contact: "",
      address: "",
      city: "",
      state: "",
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(getUserData(user.token));
    }
  }, [isSuccess]);

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <form className="">
          <div className="tw-mb-3">
            <label className="tw-font-medium tw-text-lg">
              Fullname <br />
              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                value={billingInfo.fullName}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, fullName: e.target.value })
                }
              />
            </label>
          </div>
          <div className="tw-mb-3">
            <label className="tw-font-medium tw-text-lg">
              Contact <br />
              <input
                type="text"
                name="Phone number"
                placeholder="Phone number"
                required
                value={billingInfo.contact}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, contact: e.target.value })
                }
              />
            </label>
          </div>
          <div className="tw-mb-3">
            <label className="tw-font-medium tw-text-lg">
              Street Address <br />
              <input
                type="text"
                name="street address"
                placeholder="street address"
                required
                value={billingInfo.address}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, address: e.target.value })
                }
              />
            </label>
          </div>
          <div className="tw-mb-3">
            <label className="tw-font-medium tw-text-lg">
              City <br />
              <input
                type="text"
                name="City"
                placeholder="City"
                required
                value={billingInfo.city}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, city: e.target.value })
                }
              />
            </label>
          </div>
          <div className="tw-mb-3">
            <label className="tw-font-medium tw-text-lg">
              State <br />
              <input
                type="text"
                name="State"
                placeholder="State"
                required
                value={billingInfo.state}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, state: e.target.value })
                }
              />
            </label>
          </div>
        </form>
      </Modal>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50 tw-flex tw-flex-row tw-justify-between">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          {activeBtn}
        </h4>
        <Button
          buttonStyle="tw-p-2 tw-rounded-md tw-bg-yellow-filled tw-mb-2 tw-font-normal tw-text-gray-kwek200 tw-text-sm md:tw-text-base"
          text="New Address"
          cmd={showModal}
          icon="fa-plus"
        />
      </div>
      <div className="tw-flex tw-flex-col tw-flex-wrap md:tw-flex-row tw-gap-5 tw-justify-center tw-items-center tw-p-5 tw-rounded-lg tw-bg-gray-kwek700 tw-mt-3">
        {billingSet.length === 0 ? (
          <ErrorInfo error="No address found" />
        ) : (
          billingSet.map((address: any) => (
            <AddressCard key={address.id} address={address} />
          ))
        )}
      </div>
    </>
  );
};

export default Addresses;
