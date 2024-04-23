import useBillingDelete from "@/hooks/useBillingDelete";
import { RootState } from "@/store/rootReducer";
import { getUserData } from "@/store/user/user.actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message, Modal } from "antd";
import useBillingUpdate from "@/hooks/useBillingUpdate";
import { useAppDispatch } from "../../store";

const AddressCard = function ({ address }) {
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const { mutate: deleteMutate, isSuccess } = useBillingDelete(user.token);
  const { mutate: updateMutate, isSuccess: success } = useBillingUpdate(
    user.token
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addressId, setAddressId] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    fullName: address.fullName,
    contact: address.contact,
    address: address.address,
    city: address.city,
    state: address.state,
  });

  const showModal = (id: string) => {
    setAddressId(id);
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
    updateMutate({ ...billingInfo, addressId });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isSuccess || success) {
      dispatch(getUserData(user.token));
    }
  }, [isSuccess, success]);

  return (
    <>
      <Modal
        title="Update Address"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Update"
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
      <div className="tw-bg-white-100 tw-rounded-lg tw-p-3 tw-shadow-lg">
        <div className="tw-flex tw-flex-row tw-justify-between">
          <h4 className="tw-font-semibold tw-text-base tw-text-black-stock">
            Address
          </h4>
          <span>
            <i
              className="fas fa-pen tw-text-black-stock tw-pr-5 tw-cursor-pointer"
              onClick={() => showModal(address.id)}
            />
            <i
              className="fas fa-trash tw-text-error tw-cursor-pointer"
              onClick={() => deleteMutate({ addressId: address.id })}
            />
          </span>
        </div>
        <div className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
          <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
            {address.fullName}
          </h6>
          <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
            {address.address}, {address.city}, {address.state}
          </h6>
          <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
            +234 {address.contact}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
