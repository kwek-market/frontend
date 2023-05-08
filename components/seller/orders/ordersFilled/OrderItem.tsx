import React from "react";
import styles from "./ordersFilled.module.scss";

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
}) => {
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
        {status === "confirmed" ? (
          <button className={styles.orderStatusConfirmed}>
            <span>Confirmed</span>
          </button>
        ) : (
          <button className={styles.orderStatusPending}>
            <span>Pending</span>
          </button>
        )}
      </td>
      <td>
        <button
          className={styles.trackOrder}
          onClick={() => openTrackModal(orderShortId)}
        >
          <span>Track Order</span>
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
