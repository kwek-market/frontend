import { RootState } from "@/store/rootReducer";
import { Modal, Steps } from "antd";
import { useMemo } from "react";
import { BsCheck2Circle, BsJournalBookmarkFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { useSelector } from "react-redux";

type TrackModalProps = {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  info: string;
};

export default function TrackModal({
  isModalVisible,
  handleOk,
  handleCancel,
  info,
}: TrackModalProps) {
  const order = useSelector((state: RootState) => state.order?.order);
  // const [currentStep, setCurrentStep] = useState(0);

  const { Step } = Steps;

  const currentStep = useMemo(() => {
    if (info === "Order Placed") {
      return 0;
    }
    if (info === "Order Confirmed") {
      return 1;
    }
    if (info === "Order Processed") {
      return 2;
    }
    if (info === "Ready For Pickup") {
      return 3;
    }
  }, [order]);

  return (
    <Modal
      title={`Order: ${order.orderId}`}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"auto"}
      bodyStyle={{ margin: "30px 0" }}
    >
      <Steps current={currentStep} responsive={true} className={"tw-h-[60vh] md:tw-h-auto"}>
        <Step
          title='Order Placed'
          description='We have received your order'
          icon={<BsJournalBookmarkFill />}
        />
        <Step
          title='Order Confirmed'
          description='Your order has been confirmed'
          icon={<GiConfirmed />}
        />
        <Step
          title='Order Processed'
          description='We are preparing your order'
          icon={<BsCheck2Circle />}
        />
        <Step
          title='Ready For Pickup'
          description='Your order is ready for pickup'
          icon={<ImTruck />}
        />
      </Steps>
    </Modal>
  );
}
