import React, { useState } from "react";

import dayjs from "dayjs";
import localizedformat from "dayjs/plugin/localizedFormat";
import { DateTime } from "luxon";
import OrderHeader from "./OrderHeader";
import OrderItem from "./OrderItem";
import styles from "./ordersFilled.module.scss";

import { OrderList } from "@/interfaces/commonTypes";
import ReactPaginate from "react-paginate";

import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import SellerOrderDetailsModal from "../SellerOrderDetailsModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ id: null, isOpen: false });
  const [order, setOrder] = useState<OrderList>(null);

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const showModal = (order: OrderList) => {
    setIsModalOpen(true);
    setOrder(order);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("orders", orders);

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

      <table className='tw-mb-4'>
        <OrderHeader />
        <tbody>
          {orders.map((order, index) => (
            <OrderItem
              key={order.order.id}
              orderIndex={order.order.orderId}
              orderShortId={order.order.orderId}
              orderId={order.order.id}
              orderDate={DateTime.fromJSDate(new Date(order.created)).toFormat("dd LLL yyyy")}
              imgSrc='/images/seller1.png'
              customerName={order.customer.fullName}
              orderTotal={`NGN ${Number(order.total).toLocaleString()}`}
              orderProfit={`NGN ${Number(order.profit).toLocaleString()}`}
              status={order.order.deliveryStatus}
              payment={order.paid ? "paid" : "unpaid"}
              openTrackModal={() => {
                showModal(order);
              }}
              order={order.order}
              onClick={() => {
                setOrderDetails({ id: order?.order?.id, isOpen: true });
              }}
            />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        nextLabel='next >'
        onPageChange={e => handlePageClick(e)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={undefined}
      />
      {isModalOpen ? (
        <SellerTrackModal
          handleCancel={handleCancel}
          order={order}
          isModalOpen={isModalOpen && order?.order ? true : false}
        />
      ) : null}

      {orderDetails.isOpen ? (
        <SellerOrderDetailsModal
          onclose={() => setOrderDetails({ isOpen: false, id: null })}
          orderId={orderDetails.id}
          open={orderDetails.isOpen}
        />
      ) : null}
    </div>
  );
};

export default OrdersFilled;
