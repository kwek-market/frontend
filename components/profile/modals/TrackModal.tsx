import { Modal } from "antd";
import { Order } from "../../../interfaces/commonTypes";
import OrderTracker from "../../seller/orders/ordersFilled/OrderTracker";

type TrackModalProps = {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  info: string;
  order?: { order: Order };
};

export default function TrackModal({
  isModalVisible,
  handleOk,
  handleCancel,
  info,
  order,
}: TrackModalProps) {
  // const [currentStep, setCurrentStep] = useState(0);

  return (
    <Modal
      title={`Order: ${order.order?.orderId}`}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"auto"}
      bodyStyle={{ margin: "30px 0" }}
    >
      <OrderTracker order={order as any} orderStatus={order.order?.deliveryStatus as any} />
    </Modal>
  );
}
