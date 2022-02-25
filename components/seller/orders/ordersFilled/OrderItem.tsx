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
}) => {
  return (
      <tr className={styles.itemGrid}>
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td className={styles.orderId}>
          <span>{orderId}</span>
        </td>
        <td className={styles.orderDate}>
          <span>{orderDate}</span>
        </td>
        <td>
          <div className={styles.customer}>
            <img src={imgSrc} alt="" className={styles.img} />
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
            <div className={styles.orderPaymentPaid}>
              <span>Paid</span>
            </div>
          ) : (
            <div className={styles.orderPaymentUnpaid}>
              <span>Unpaid</span>
            </div>
          )}
        </td>
        <td>
          {status === "confirmed" ? (
            <div className={styles.orderStatusConfirmed}>
              <span>Confirmed</span>
            </div>
          ) : (
            <div className={styles.orderStatusPending}>
              <span>Pending</span>
            </div>
          )}
        </td>
      </tr>
  );
};

export default OrderItem;
