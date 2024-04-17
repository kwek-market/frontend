import React, { useState } from "react";
import { message, Modal, Steps } from "antd";
import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { BsJournalBookmarkFill, BsCheck2Circle } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import useTrackOrder from "@/hooks/useTrackOrder";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import TrackModal from "../modals/TrackModal";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";

const Track = function ({ activeBtn }: { activeBtn: string }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const [track, setTrack] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { mutate, isLoading } = useTrackOrder();

  function checkOrder() {
    if (track === "" || track === null) {
      return message.error("Enter your order id");
    }
    mutate(
      { orderId: track, token },
      {
        onSuccess: (data) => {
          if (data.trackOrder.message.toLowerCase() === "invalid order id") {
            setError("Invalid order id");
          } else {
            setInfo(data.trackOrder.message);
            showModal();
            setError("");
          }
        },
        onError: () => {
          setError("An error occurred");
        },
      }
    );
  }

  return (
    <>
      <TrackModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        info={info}
      />
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
      {isLoading && <Load />}
      {error && <ErrorInfo error={error} />}
    </>
  );
};

export default Track;
