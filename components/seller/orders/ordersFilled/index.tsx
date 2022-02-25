import React from "react";

import dayjs from "dayjs";
import localizedformat from "dayjs/plugin/localizedFormat";
import styles from "./ordersFilled.module.scss";
import OrderItem from "./OrderItem";
import OrderHeader from "./OrderHeader";
import { v4 } from "uuid";
import { OrderList } from "@/interfaces/commonTypes";

dayjs.extend(localizedformat);

const OrdersFilled = function ({ orders }) {
  const ordersList: OrderList = JSON.parse(orders);

  return (
    <div className={styles.empty_container}>
      <div className={styles.ordersTab}>
        <div className={styles.ordersTitle}>
          Orders{" "}
          <span className={styles.ordersVal}>
            {Object.keys(ordersList).length}
          </span>
        </div>

        <label htmlFor="dropDown" className="tw-capitalize">
          Sort by:
          <select id="dropDown" className="tw-ml-2 tw-rounded-md">
            <option>All Orders</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Authorized</option>
            <option>Product Rating</option>
          </select>
        </label>
      </div>

      <table>
        <OrderHeader />
        <tbody>
          {Object.entries(ordersList).map((order) => (
            <OrderItem
              key={v4()}
              orderId={order[0]}
              orderDate={dayjs(order[1].created).format("MMM DD, YYYY")}
              imgSrc="/images/seller1.png"
              customerName="Mary-Jane Anthony"
              orderTotal={`NGN ${Number(order[1].total).toLocaleString()}`}
              orderProfit={`NGN ${Number(order[1].profit).toLocaleString()}`}
              status={
                order[1].status === "order delivered" ? "confirmed" : "pending"
              }
              payment={order[1].paid ? "paid" : "unpaid"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersFilled;
