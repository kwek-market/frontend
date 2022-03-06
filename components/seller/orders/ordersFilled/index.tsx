import React from "react";

import dayjs from "dayjs";
import localizedformat from "dayjs/plugin/localizedFormat";
import styles from "./ordersFilled.module.scss";
import OrderItem from "./OrderItem";
import OrderHeader from "./OrderHeader";
import { v4 } from "uuid";
import { OrderList } from "@/interfaces/commonTypes";
import ReactPaginate from "react-paginate";

dayjs.extend(localizedformat);

type OrdersFilledProps = {
  orders: OrderList[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const OrdersFilled = function ({
  orders,
  pageCount,
  handlePageClick,
  filter,
  setFilter,
}: OrdersFilledProps) {
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

      <table className="tw-mb-4">
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export default OrdersFilled;
