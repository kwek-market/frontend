import React, { useMemo, useState } from "react";

import { DateTime } from "luxon";
import dayjs from "dayjs";
import localizedformat from "dayjs/plugin/localizedFormat";
import styles from "./ordersFilled.module.scss";
import OrderItem from "./OrderItem";
import OrderHeader from "./OrderHeader";

import { OrderList } from "@/interfaces/commonTypes";
import ReactPaginate from "react-paginate";

import useTrackOrder from "@/hooks/useTrackOrder";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import SellerTrackModal from "./trackmodal";

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
  const [orderIdText, setOrderIdText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const showModal = (id: string) => {
    setIsModalOpen(true);
    setOrderIdText(id);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { mutate, isLoading } = useTrackOrder();
  const [info, setInfo] = useState("");

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (orderIdText === "" || orderIdText === null) {
      return message.error("Enter your order id");
    }
    mutate(
      { orderId: orderIdText, token },
      {
        onSuccess: (data) => {
          if (
            (data as Record<string, any>)?.trackOrder.message.toLowerCase() ===
            "invalid order id"
          ) {
            message.error("Invalid order id");
            setInfo("");
          } else {
            message.success((data as Record<string, any>)?.trackOrder.message);
            setInfo((data as Record<string, any>)?.trackOrder.message);
          }
        },
        onError: () => {
          message.error("An error occurred");
        },
      }
    );
  };

  return (
    <div className={styles.empty_container}>
      <div className={styles.ordersTab}>
        <div className={styles.ordersTitle}>
          Orders <span className={styles.ordersVal}>{orders.length}</span>
        </div>

        {/* <label htmlFor="dropDown" className="tw-capitalize">
          Sort by:
          <select id="dropDown" className="tw-ml-2 tw-rounded-md">
            <option>All Orders</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Authorized</option>
            <option>Product Rating</option>
          </select>
        </label> */}
      </div>

      <table className="tw-mb-4">
        <OrderHeader />
        <tbody>
          {orders.map((order, index) => (
            <OrderItem
              key={order.order.id}
              orderIndex={index + 1}
              orderShortId={order.order.orderId}
              orderId={order.order.id}
              orderDate={DateTime.fromJSDate(new Date(order.created)).toFormat(
                "dd LLL yyyy"
              )}
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
              openTrackModal={showModal}
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
      <SellerTrackModal
        handleCancel={handleCancel}
        handleTrack={handleTrack}
        orderIdText={orderIdText}
        setOrderIdText={setOrderIdText}
        isModalOpen={isModalOpen}
        info={info}
        loading={isLoading}
      />
    </div>
  );
};

export default OrdersFilled;
