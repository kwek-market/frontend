import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

const SellerLandingBody = () => {
  return (
    <div className="tw-bg-[#FEFBFC] tw-pt-11 tw-pb-32 lg:tw-pb-64">
      <div className="tw-bg-[#EB001B] tw-rounded-[10px] tw-h-[6px] tw-w-24 tw-mx-auto"></div>
      <h1 className="tw-mb-0 tw-font-poppins tw-font-[500] tw-w-max tw-mx-auto tw-pt-2 tw-text-2xl lg:tw-text-[3rem] 2xl:tw-text-[4rem]">
        Sell On Kwek
      </h1>
      <div className="tw-mt-4 lg:tw-mt-12 tw-w-[90%] tw-mx-auto tw-rounded-[20px] tw-h-[30vh] lg:tw-h-[60vh] tw-relative tw-overflow-hidden">
        <Image
          src="https://res.cloudinary.com/psami-wondah/image/upload/v1683584636/Rectangle_949_sgdqix.png"
          layout="fill"
          className=" tw-object-cover"
        />
      </div>
      <div className="tw-bg-[#EB001B] tw-rounded-[10px] tw-h-[6px] tw-w-24 tw-mx-auto tw-mt-10 lg:tw-mt-20"></div>
      <h1 className="tw-mb-0 tw-font-poppins tw-font-[500] tw-w-max tw-mx-auto tw-pt-2 tw-text-2xl lg:tw-text-[3rem] 2xl:tw-text-[4rem]">
        Make Money With Kwek
      </h1>
      <div className="tw-pt-4 lg:tw-pt-12 tw-flex tw-flex-col md:tw-flex-row tw-w-[90%] tw-mx-auto tw-gap-x-8 lg:tw-gap-x-16">
        <div className=" tw-relative tw-w-[100%] tw-h-[90vw] md:tw-w-[40vh] md:tw-h-[40vh] lg:tw-w-[35vw] lg:tw-h-[35vw] tw-rounded-[20px] tw-overflow-hidden tw-flex-shrink-0 ">
          <Image
            src="https://res.cloudinary.com/psami-wondah/image/upload/v1683584633/Rectangle_952_1_ma9dbs.png"
            layout="fill"
            className=" tw-object-cover"
          />
        </div>
        <div>
          <p className="tw-mb-0 tw-font-poppins tw-text-base lg:tw-text-xl  2xl:tw-text-[32px] tw-leading-10 lg:tw-leading-[55px] 2xl:tw-leading-[65px] tw-font-light tw-text-justify lg:tw-text-left">
            With Kwek, African businesses and entrepreneurs can scale-up their
            businesses and improve their revenues by embracing the e-commerce
            landscape and connecting products with millions of online consumers,
            while getting top-notch seller support and top-notch product
            delivery expertise.
          </p>
          <Link href={"/sell/create-account"}>
            <button className="tw-mt-8 tw-bg-[#1E944D] tw-text-xl 2xl:tw-text-2xl tw-rounded tw-font-poppins tw-text-white-100 tw-py-3 2xl:tw-py-5 tw-px-[30px]  2xl:tw-px-[60px] tw-font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="tw-bg-[#EB001B] tw-rounded-[10px] tw-h-[6px] tw-w-24 tw-mx-auto tw-mt-10 lg:tw-mt-20"></div>
      <h1 className="tw-mb-0 tw-font-poppins tw-font-[500] tw-w-max tw-mx-auto tw-pt-2 tw-text-2xl lg:tw-text-[3rem] 2xl:tw-text-[4rem]">
        How It Works
      </h1>

      <div className=" tw-pt-4 lg:tw-pt-16 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-10 lg:tw-gap-24 tw-w-[90%] tw-mx-auto">
        <div className=" tw-relative tw-w-[100%] tw-h-[90vw] md:tw-w-[40vh] md:tw-h-[40vh] lg:tw-w-[24.5vw] lg:tw-h-[25vw] tw-rounded-[16px] tw-overflow-hidden tw-flex-shrink-0">
          <Image
            src="/images/work-market.png"
            layout="fill"
            className=" tw-object-cover"
          />
        </div>
        <div>
          <div className="tw-text-lg lg:tw-text-2xl 2xl:tw-text-3xl tw-space-y-10 lg:tw-space-y-16">
            <div className=" tw-flex tw-gap-x-4 tw-items-center">
              <CircleNumber number={1} /> Register in our platform under 5
              minutes
            </div>
            <div className=" tw-flex tw-gap-x-4 tw-items-center">
              <CircleNumber number={2} /> List and Sell your Products
            </div>
            <div className=" tw-flex tw-gap-x-4 tw-items-center">
              <CircleNumber number={3} /> Access our Promotions and Marketing
            </div>
          </div>

          <Link href={"/sell/create-account"}>
            <button className=" tw-mt-14 tw-bg-[#1E944D] tw-text-xl 2xl:tw-text-2xl tw-rounded tw-font-poppins tw-text-white-100 tw-py-3 2xl:tw-py-5 tw-px-[30px]  2xl:tw-px-[60px] tw-font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerLandingBody;

const CircleNumber = ({ number }) => {
  return (
    <div className=" tw-w-[38px] tw-h-[38px] 2xl:tw-h-[46px] 2xl:tw-w-[46px] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-[#005A8B] tw-text-white-100 tw-font-black text-lg 2xl:tw-text-2xl tw-flex-shrink-0">
      {number}
    </div>
  );
};
