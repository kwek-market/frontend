import CancelIcon from "@/components/icons/cancel";
import SimpleModal from "@/components/modal";
import React, { useMemo } from "react";
import Image from "next/legacy/image";
import Load from "@/components/Loader/Loader";

interface SellerTrackModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  orderIdText: string;
  setOrderIdText: React.Dispatch<React.SetStateAction<string>>;
  handleTrack: (e: React.FormEvent<HTMLFormElement>) => void;
  info: string;
  loading: boolean;
}

const SellerTrackModal = ({
  isModalOpen,
  handleCancel,
  orderIdText,
  setOrderIdText,
  handleTrack,
  info,
  loading,
}: SellerTrackModalProps) => {
  const currentStep = useMemo(() => {
    if (info === "Order Placed") {
      return 0;
    }
    if (info === "Order Confirmed") {
      return 1;
    }
    if (info === "Order Processed") {
      return 2;
    }
    if (info === "Ready For Pickup") {
      return 3;
    }
  }, [info]);

  return (
    <SimpleModal open={isModalOpen} handleClose={handleCancel}>
      <div className="tw-bg-[#FCF7F8] tw-w-[90vw] tw-mt-[5vh] tw-mx-auto tw-pt-16  tw-relative tw-pb-24 tw-max-h-[90vh] tw-overflow-scroll">
        <div
          className=" tw-absolute tw-top-6 tw-right-6 lg:tw-top-16 lg:tw-right-16 tw-cursor-pointer"
          onClick={() => handleCancel()}
        >
          <CancelIcon />
        </div>
        <h1 className=" tw-text-3xl font-[600] tw-text-[#1D1616] tw-text-center tw-font-poppins mb-0">
          Track your Shipment
        </h1>

        <div className=" tw-bg-white-100 tw-py-8 lg:tw-py-16 tw-px-5 lg:tw-px-20 tw-w-[90%] lg:tw-w-[85%] tw-mx-auto tw-mt-14">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-x-4">
            <div className="tw-bg-[#F5F5F5] tw-flex-[4] tw-flex tw-items-center tw-justify-center tw-py-10 lg:tw-py-0">
              <Image src="/svg/track-bike.svg" width={226} height={170} />
            </div>
            <form
              className="tw-bg-[#F5F5F5] tw-pt-5 lg:tw-pt-12 tw-flex-[6] tw-px-7 lg:tw-px-14 tw-text-center tw-pb-14"
              onSubmit={handleTrack}
            >
              <p className=" tw-font-poppins tw-text-2xl tw-text-center tw-mb-0">
                Let's find your order
              </p>
              <input
                type="text"
                name="order_id"
                id="order_id"
                className="tw-mt-4 tw-rounded tw-border tw-border-[#D7DCE0] tw-px-4 tw-pb-[0.875rem] tw-pt-[1.125rem] tw-w-full focus:tw-outline-none"
                placeholder="KWK3209A"
                value={orderIdText}
                onChange={(e) => setOrderIdText(e.target.value)}
              />
              <button className="tw-mt-8 tw-bg-[#1E944D] tw-rounded tw-font-poppins tw-text-white-100 tw-py-3 tw-w-32 lg:tw-w-52 tw-font-semibold">
                Track Order
              </button>
            </form>
          </div>
          <div className=" tw-mt-14">
            {loading ? (
              <Load />
            ) : info ? (
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center lg:tw-items-start tw-font-poppins ">
                <div className=" tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24">
                  <Image src="/svg/track/ordered.svg" width={85} height={85} />
                  <div className="">
                    <p className=" tw-mb-0 tw-font-medium">Ordered</p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">
                      13th August 2022
                    </p>
                  </div>
                </div>
                <Bar filled={currentStep > 1} />
                <div className=" tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24">
                  <Image src="/svg/track/transit.svg" width={85} height={85} />
                  <div>
                    <p className=" tw-mb-0 tw-font-medium">In Transit</p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">
                      Lagos - Abuja
                    </p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">
                      14th August 2022
                    </p>
                  </div>
                </div>
                <Bar filled={currentStep > 2} />
                <div className=" tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-center tw-w-24">
                  <Image
                    src="/svg/track/delivered.svg"
                    width={85}
                    height={91}
                  />
                  <div>
                    <p className=" tw-mb-0 tw-font-medium">Delivered</p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">
                      Efab Mall, Garki Abuja
                    </p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">
                      17th August 2022
                    </p>
                  </div>
                </div>
                <Bar />
                <div className=" tw-flex-shrink-0 tw-flex tw-flex-col tw-justify-cente tw-w-24r">
                  <Image src="/svg/track/picked.svg" width={85} height={85} />
                  <div>
                    <p className=" tw-mb-0 tw-font-medium">Picked Up</p>
                    <p className=" tw-mb-0 tw-text-xs tw-font-light">Not Yet</p>
                  </div>
                </div>
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
