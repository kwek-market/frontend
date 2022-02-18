import useTrackOrder from "@/hooks/useTrackOrder";
import { RootState } from "@/store/rootReducer";
import { Steps, message, Modal } from "antd";
import React, { useState } from "react";
import { BsJournalBookmarkFill, BsCheck2Circle } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { useSelector } from "react-redux";

type TrackModalProps = {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export default function TrackModal({
  isModalVisible,
  handleOk,
  handleCancel,
}: TrackModalProps) {
  const {
    order: { order },
  } = useSelector((state: RootState) => state);

  const { Step } = Steps;

  return (
    <Modal
      title={`Order: ${order.id}`}
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
  );
}
