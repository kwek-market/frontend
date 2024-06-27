import { Menu } from "antd";
import styles from "./ordersFilled.module.scss";
import { OrderDeliveryStatus } from "../../../../validations/orders";

const menu = () => (
  <Menu>
    <Menu.Item key='0'>Update Order Progress</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3' className='tw-text-red-700'>
      Cancel Order
    </Menu.Item>
  </Menu>
);

const OrderItem = ({
  orderId,
  orderDate,
  imgSrc,
  customerName,
  orderTotal,
  orderProfit,
  status,
  payment,
  openTrackModal,
  orderIndex,
  orderShortId,
  order,
}) => {
  let orderStatus = "pending";
  if (status?.includes(OrderDeliveryStatus.Delivered) && order?.closed) {
    orderStatus = "Successful";
  } else if (status?.includes(OrderDeliveryStatus.Cancelled) || order?.closed) {
    orderStatus = "Cancelled";
  }
  console.log("🚀 ~~ order:", order, orderStatus);

  return (
    <tr className={styles.itemGrid}>
      {/* <td>
          <input type="checkbox" name="" id="" />
        </td> */}
      <td className={styles.orderId}>
        <span>{orderIndex}</span>
      </td>
      <td className={styles.orderDate}>
        <span>{orderDate}</span>
      </td>
      <td>
        <div className={styles.customer}>
          {/* <img src={imgSrc} alt="" className={styles.img} /> */}
          <span>{customerName}</span>
        </div>
      </td>
      <td className={styles.orderTotal}>
        <span>{orderTotal}</span>
      </td>
      <td className={styles.orderProfit}>
        <span>{orderProfit}</span>
      </td>
      <td>
        {payment === "paid" ? (
          <button className={styles.orderPaymentPaid}>
            <span>Paid</span>
          </button>
        ) : (
          <button className={styles.orderPaymentUnpaid}>
            <span>Unpaid</span>
          </button>
        )}
      </td>
      <td>
        {orderStatus === "Successful" ? (
          <button className={styles.orderStatusConfirmed}>
            <span>SuccessFul</span>
          </button>
        ) : orderStatus === "Cancelled" ? (
          <button className={styles.orderStatusFailed}>
            <span>Cancelled</span>
          </button>
        ) : (
          <button className={styles.orderStatusPending}>
            <span>Pending</span>
          </button>
        )}
      </td>
      <td>
        <button className={styles.trackOrder} onClick={() => openTrackModal(orderShortId)}>
          <span>Track Order</span>
        </button>
      </td>
      {/* <td>
        <Dropdown overlay={menu} trigger={["click"]}>
          <button
            className='px-2 py-3 tw-inline-flex tw-space-x-2 tw-items-center'
            onClick={e => e.preventDefault()}
          >
            <FaEllipsisV type='down' />
          </button>
        </Dropdown>
      </td> */}
    </tr>
  );
};

export default OrderItem;
