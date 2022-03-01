import React from "react";

import dayjs from "dayjs";
import localizedformat from "dayjs/plugin/localizedFormat";
import styles from "./ordersFilled.module.scss";
import OrderItem from "./OrderItem";
import OrderHeader from "./OrderHeader";
import { v4 } from "uuid";
import { OrderList } from "@/interfaces/commonTypes";

dayjs.extend(localizedformat);

const OrdersFilled = function ({ orders }: { orders: OrderList[] }) {
  console.log(orders);

  return (
    <div className={styles.empty_container}>
      <div className={styles.ordersTab}>
        <div className={styles.ordersTitle}>
          Orders <span className={styles.ordersVal}>{orders.length}</span>
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
          {orders.map((order) => (
            <OrderItem
              key={v4()}
              orderId={order.order.id}
              orderDate={dayjs(order.created).format("MMM DD, YYYY")}
              imgSrc="/images/seller1.png"
              customerName={order.customer.fullName}
              orderTotal={`NGN ${Number(order.total).toLocaleString()}`}
              orderProfit={`NGN ${Number(order.profit).toLocaleString()}`}
              status={
                order.order.deliveryStatus === "order delivered"
                  ? "confirmed"
                  : "pending"
              }
              payment={order.paid ? "paid" : "unpaid"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersFilled;
