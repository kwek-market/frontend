import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./ordersFilled.module.scss";
import { FaChevronDown } from "react-icons/fa";
import OrderItem from "./OrderItem";
import OrderHeader from "./OrderHeader";

const OrdersFilled = function ({ orders }) {
  const [dropDown, setDropDown] = useState(false);
  console.log(JSON.parse(orders));

  const onClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className={styles.empty_container}>
      <div className={styles.ordersTab}>
        <div className={styles.ordersTitle}>
          Orders <span className={styles.ordersVal}>11,600</span>
        </div>

        <div className={styles.flex}>
          Sort by:{" "}
          <div className={styles.recent}>
            All Orders{" "}
            <span style={{ color: "#1D1616" }} onClick={onClick}>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className={dropDown ? styles.dropdown : styles.dropdownNot}>
          {/* <div className={styles.dropdownNot}> */}
          <ul>
            <li className={styles.active}>All Orders</li>
            <li>Pending</li>
            <li>Completed</li>
            <li>Authorized</li>
            <li>Product Rating</li>
          </ul>
        </div>
      </div>

      <table>
        <OrderHeader />

        <OrderItem
          orderId="KWK3209A"
          orderDate="Apr 22, 2021"
          imgSrc="/images/seller1.png"
          customerName="Mary-Jane Anthony"
          orderTotal="NGN 23,000"
          orderProfit="NGN 2,300"
          status="confirmed"
          payment="unpaid"
        />
        <OrderItem
          orderId="KWK3209"
          orderDate="Apr 22, 2021"
          imgSrc="/images/seller2.png"
          customerName="Giana George"
          orderTotal="NGN 23,000"
          orderProfit="NGN 2,300"
          status="pending"
          payment="paid"
        />
        <OrderItem
          orderId="KWK3209"
          orderDate="Apr 22, 2021"
          imgSrc="/images/seller3.png"
          customerName="Carla Stanton"
          orderTotal="NGN 23,000"
          orderProfit="NGN 2,300"
          status="confirmed"
          payment="unpaid"
        />
        <OrderItem
          orderId="KWK3209"
          orderDate="Apr 22, 2021"
          imgSrc="/images/seller4.png"
          customerName="Jocelyn Franci"
          orderTotal="NGN 23,000"
          orderProfit="NGN 2,300"
          status="confirmed"
          payment="unpaid"
        />
        <OrderItem
          orderId="KWK3209"
          orderDate="Apr 22, 2021"
          imgSrc="/images/seller5.png"
          customerName="Makenna Culhane"
          orderTotal="NGN 23,000"
          orderProfit="NGN 2,300"
          status="confirmed"
          payment="paid"
        />
      </table>
    </div>
  );
};

export default OrdersFilled;
