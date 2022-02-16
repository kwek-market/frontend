import React, { useState } from "react";
import "antd/dist/antd.css";
import { message, Modal, Steps } from "antd";
import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { BsJournalBookmarkFill, BsCheck2Circle } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import useTrackOrder from "@/hooks/useTrackOrder";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

const Track = function ({ activeBtn }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const [track, setTrack] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Step } = Steps;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { mutate, isLoading, data } = useTrackOrder();

  function checkOrder() {
    if (track === "" || track === null) {
      return message.error("Enter your order id");
    }
    mutate(track, {
      onSuccess: () => {
        showModal();
      },
    });
  }

  return (
    <>
      <Modal
        title="Order: #334456"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"auto"}
        bodyStyle={{ margin: "30px 0" }}
      >
        <Steps
          current={0}
          responsive={true}
          className={"tw-h-[60vh] md:tw-h-auto"}
        >
          <Step
            title="Order Placed"
            description="We have received your order"
            icon={<BsJournalBookmarkFill />}
          />
          <Step
            title="Order Confirmed"
            description="Your order has been confirmed"
            icon={<GiConfirmed />}
          />
          <Step
            title="Order Processed"
            description="We are preparing your order"
            icon={<BsCheck2Circle />}
          />
          <Step
            title="Ready For Pickup"
            description="Your order is ready for pickup"
            icon={<ImTruck />}
          />
        </Steps>
      </Modal>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          {activeBtn}
        </h4>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-x-2 md:tw-flex-row tw-justify-between md:tw-p-10 tw-p-3">
        <TextInput
          restStyles="tw-flex-1"
          hide="tw-hidden"
          text="Enter tracking number"
          type="text"
          value={track}
          setValue={setTrack}
        />
        <Button
          buttonStyle="tw-p-2 tw-bg-green-success tw-rounded-sm tw-text-white-100 tw-mt-3 md:tw-mt-0"
          text="Track Order"
          cmd={checkOrder}
        />
      </div>
    </>
  );
};

export default Track;
