import Load from "@/components/Loader/Loader";
import CancelIcon from "@/components/icons/cancel";
import SimpleModal from "@/components/modal";
import { message } from "antd";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useTrackOrder from "../../../../hooks/useTrackOrder";
import { OrderList } from "../../../../interfaces/commonTypes";
import { RootState } from "../../../../store/rootReducer";
import { OrderDeliveryStatus } from "../../../../validations/orders";

interface SellerTrackModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;

  setOrderIdText?: React.Dispatch<React.SetStateAction<string>>;

  order: OrderList;
}

const SellerTrackModal = ({ isModalOpen, handleCancel, order }: SellerTrackModalProps) => {
  const token = useSelector((state: RootState) => state?.user?.token);

  const [info, setInfo] = useState("");
  // const [orderIdText, setOrderIdText] = useState(order?.order?.orderId);
  const orderIdText = order?.order?.orderId;

  const { mutate, isLoading, data } = useTrackOrder();

  const newOrderData = order.order;

  let orderStatus = "pending";
  if (newOrderData) {
    const { closed, deliveryStatus } = newOrderData;
    if (deliveryStatus.includes(OrderDeliveryStatus.Delivered) && closed) {
      orderStatus = "success";
    } else if (deliveryStatus.includes(OrderDeliveryStatus.Cancelled) || closed) {
      orderStatus = "cancelled";
    } else {
      orderStatus = "pending";
    }
  }

  console.log("🚀 ~~ SellerTrackModal ~~ orderIdText:", orderStatus, order);

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (orderIdText === "" || orderIdText === null) {
      return message.error("Enter your order id");
    }
    mutate(
      { orderId: orderIdText, token },
      {
        onSuccess: data => {
          if (data.trackOrder.message.toLowerCase() === "invalid order id") {
            message.error("Invalid order id");
            setInfo("");
          } else {
            message.success(data.trackOrder.message);
            setInfo(data.trackOrder.message);
          }
        },
        onError: () => {
          message.error("An error occurred");
        },
      }
    );
  };

  return (
    <SimpleModal open={isModalOpen} handleClose={handleCancel}>
      <div className='tw-bg-[#FCF7F8] tw-w-[90vw] tw-mt-[5vh] tw-mx-auto tw-pt-16  tw-relative tw-pb-24 tw-max-h-[90vh] tw-overflow-scroll'>
        <div className='tw-flex tw-items-center tw-justify-between tw-px-6'>
          <h1 className='tw-text-2xl lg:tw-text-3xl font-[600] tw-text-[#1D1616] tw-text-center tw-font-poppins mb-0'>
            Track your Shipment
          </h1>

          <div
            className=' lg:tw-absolute  lg:tw-top-16 lg:tw-right-16 tw-cursor-pointer'
            onClick={() => handleCancel()}
          >
            <CancelIcon className='tw-w-6 tw-h-6' />
          </div>
        </div>

        <div className=' tw-bg-white-100 tw-py-8 lg:tw-py-16 tw-px-5 lg:tw-px-20 tw-w-[90%] lg:tw-w-[85%] tw-mx-auto tw-mt-14'>
          <div className='tw-flex tw-flex-col lg:tw-flex-row tw-gap-x-4'>
            <div className='tw-bg-[#F5F5F5] tw-flex-[4] tw-flex tw-items-center tw-justify-center tw-py-10 lg:tw-py-0'>
              <Image src='/svg/track-bike.svg' width={226} height={170} />
            </div>
            <form
              className='tw-bg-[#F5F5F5] tw-pt-5 lg:tw-pt-12 tw-flex-[6] tw-px-7 lg:tw-px-14 tw-text-center tw-pb-14'
              onSubmit={handleTrack}
            >
              <p className=' tw-font-poppins tw-text-2xl tw-text-center tw-mb-0'>
                Let's find your order
              </p>
              <input
                type='text'
                name='order_id'
                id='order_id'
                className='tw-mt-4 tw-rounded tw-border tw-border-[#D7DCE0] tw-px-4 tw-pb-[0.875rem] tw-pt-[1.125rem] tw-w-full focus:tw-outline-none disabled:tw-bg-gray-400'
                placeholder='KWK3209A'
                value={orderIdText}
                disabled={true}
                // onChange={e => setOrderIdText(e.target.value)}
              />
              <button className='tw-mt-8 tw-bg-[#1E944D] tw-rounded tw-font-poppins tw-text-white-100 tw-py-3 tw-w-32 lg:tw-w-52 tw-font-semibold'>
                Track Order
              </button>
            </form>
          </div>
          <div className=' tw-mt-14'>
            {isLoading ? (
              <Load />
            ) : info ? (
              <div className='tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center lg:tw-items-start tw-font-poppins '>
                <div className='tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24'>
                  <Image src='/svg/track/ordered.svg' width={85} height={85} />
                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium'>Ordered</p>
                    <p className=' tw-mb-0 tw-text-xs tw-font-light'>
                      {new Date(order.order.dateCreated)?.toDateString()}
                    </p>
                  </div>
                </div>
                <Bar filled={true} />

                {orderStatus === OrderDeliveryStatus.Cancelled ? (
                  <div className='tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24'>
                    <Image src='/svg/ex.svg' width={85} height={85} />
                    <div>
                      <p className=' tw-mb-0 tw-font-medium tw-text-red-500'>Cancelled</p>
                      <p className='tw-w-max tw-mb-0 tw-text-xs tw-font-light'>
                        {order.order.doorStep?.city} - {order.order?.doorStep?.state}
                      </p>
                    </div>
                  </div>
                ) : null}

                {orderStatus === "success" || orderStatus === "pending" ? (
                  <div className='tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24'>
                    <Image src='/svg/track/transit.svg' width={85} height={85} />
                    <div>
                      <p className=' tw-mb-0 tw-font-medium'>Delivering.... </p>
                      <p className=' tw-mb-0 tw-text-xs tw-font-light'>
                        {order.order.doorStep?.city} - {order.order?.doorStep?.state}
                      </p>
                    </div>
                  </div>
                ) : null}

                <Bar filled={orderStatus === "success"} />
                <div className='tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24'>
                  <Image src='/svg/track/picked.svg' width={85} height={91} />
                  <div>
                    <p className=' tw-mb-0 tw-font-medium'>Delivered</p>
                    <p className=' tw-mb-0 tw-text-xs tw-font-light'>
                      {orderStatus === "success" ? order?.order?.doorStep?.address : "Not yet"}
                    </p>
                  </div>
                </div>
                {/* <div className=" tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-cente tw-w-24r">
                  <Image src="/svg/track/picked.svg" width={85} height={85} />
                  <div>
                    <p className=" tw-mb-0 tw-font-medium">Picked Up</p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">Not Yet</p>
                  </div>
                </div> */}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SimpleModal>
  );
};

export default SellerTrackModal;

const Bar = ({ filled }: { filled?: boolean }) => {
  return (
    <>
      <div
        className={`tw-hidden lg:tw-block  tw-w-full tw-h-[9px] tw-rounded-[10px] tw-mt-10 ${
          filled ? "tw-bg-[#009D19]" : "tw-bg-[#D9D9D9]"
        }`}
      ></div>
      <div
        className={` lg:tw-hidden  tw-h-[5rem] tw-w-[9px] tw-rounded-[10px] tw-mt-10 ${
          filled ? "tw-bg-[#009D19]" : "tw-bg-[#D9D9D9]"
        }`}
      ></div>
    </>
  );
};
