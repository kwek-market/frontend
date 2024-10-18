import Image from "next/legacy/image";
import { Order } from "../../../../interfaces/commonTypes";
import { OrderDeliveryStatus } from "../../../../validations/orders";

// Define the order status type

// Define the Order type

interface OrderTrackerProps {
  orderStatus: string;
  order: { order: Order } & Record<any, any>;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ orderStatus, order }) => {
  console.log("🚀 ~~ orderStatus:", orderStatus, order);

  return (
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

      {orderStatus === OrderDeliveryStatus.OrderInProgress ||
      orderStatus === OrderDeliveryStatus.Delivered ? (
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

      <Bar filled={orderStatus === OrderDeliveryStatus.Delivered} />
      <div className='tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24'>
        <Image src='/svg/track/picked.svg' width={85} height={91} />
        <div>
          <p className=' tw-mb-0 tw-font-medium'>Delivered</p>
          <p className=' tw-mb-0 tw-text-xs tw-font-light'>
            {orderStatus === OrderDeliveryStatus.Delivered
              ? order?.order?.doorStep?.address
              : "Not yet"}
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
  );
};

export default OrderTracker;

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
