import { useState } from "react";

// import "antd/dist/antd.css";

import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useTrackOrder from "@/hooks/useTrackOrder";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import { useAtom } from "jotai";
import { useSelector } from "react-redux";
import { useGetOrder } from "../../../hooks/admin/orders";
import { activeOrderIdAtom } from "../active-button-atom";
import TrackModal from "../modals/TrackModal";

const Track = function ({ activeBtn }: { activeBtn: string }) {
  const token = useSelector((state: RootState) => state.user?.token);

  const [track, setTrack] = useState<string>("");
  const { isLoading: isOrderLoading, data } = useGetOrder({ id: track, token });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [, setOrderId] = useAtom(activeOrderIdAtom);

  const order = data?.orderByOrderId;
  console.log("🚀 ~~ Track ~~ order:", order);

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
        onSuccess: data => {
          if (data.trackOrder.message.toLowerCase() === "invalid order id") {
            setError("Invalid order id");
          } else {
            setInfo(data.trackOrder.message);
            showModal();
            // setOrderId()
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
      {order && (
        <TrackModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          info={info}
          order={{ order: order }}
        />
      )}
      <div className='tw-border-b tw-border-gray-500 tw-border-opacity-50'>
        <h4 className='tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl'>
          {activeBtn}
        </h4>
      </div>
      <div className='tw-flex tw-flex-col tw-gap-x-2 md:tw-flex-row tw-justify-between md:tw-p-10 tw-p-3'>
        <TextInput
          restStyles='tw-flex-1'
          hide='tw-hidden'
          text='Enter tracking number'
          type='text'
          value={track}
          setValue={setTrack}
        />
        <Button
          buttonStyle='tw-p-2 tw-bg-green-success tw-rounded-sm tw-text-white-100 tw-mt-3 md:tw-mt-0'
          text='Track Order'
          cmd={() => checkOrder()}
        />
      </div>
      {(isLoading || isOrderLoading) && <Load />}
      {error && <ErrorInfo error={error} />}
    </>
  );
};

export default Track;
