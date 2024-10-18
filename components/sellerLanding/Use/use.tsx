import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import girlImg from "../../../public/images/how-it-work.jpg";
import UseBox from "./UseBox";
import Styles from "./use.module.scss";

const use = () => {
  const router = useRouter();

  const useBox = [
    {
      title: "Create your store",
      description:
        "Register your store with a unique store URL for your store on Kwekmarkethall.com",
      image: "/images/shop.png",
      bgColor: "tw-bg-green-success",
      textColor: "tw-text-white-100",
    },
    {
      title: "List your products",
      description:
        "Create your products, set your own prices, and make them available for purchase",
      image: "/images/list.png",
      bgColor: "tw-bg-gray-kwek700",
      textColor: "tw-text-gray-kwek300",
    },
    {
      title: "Sell to millions of buyers",
      description:
        "Manage your orders, choose your own shipping method, and receive sales proceeds.",
      image: "/images/sell.png",
      bgColor: "tw-bg-gray-kwek700",
      textColor: "tw-text-gray-kwek300",
    },
  ];
  return (
    <div className={`tw-py-16 md:tw-py-24 md:tw-px-14 ${Styles.Use}`}>
      <div className={` tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-w-full`}>
        <div className='tw-text-center md:tw-text-left tw-flex-1  tw-my-3 md:tw-my-5 lg:tw-my-10'>
          <h2 className='tw-font-semibold tw-text-gray-kwek200 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl'>
            How it Works
          </h2>
          <p className='tw-text-lg'>Get set-up in three easy steps</p>
          <div className='tw-relative tw-h-full tw-w-full'>
            <Image
              src={girlImg}
              className={`tw-bg-gray-kwek800 tw-object-cover tw-mt-5 lg:tw-mt-0 ${Styles.UseGrayBox}`}
              alt='girl image'
              layout='fill'
            />
          </div>
        </div>

        <div className='tw-hidden md:tw-block md:tw-mx-4'>
          <img src='/svg/arrow.svg' />
        </div>

        <div className='tw-flex tw-flex-col tw-flex-1'>
          {useBox.map((item, index) => (
            <UseBox
              key={index}
              title={item.title}
              desc={item.description}
              imgSrc={item.image}
              bgColor={item?.bgColor}
              textColor={item?.textColor}
            />
          ))}
        </div>
      </div>
      <div className={Styles.useRegister}>
        <div className={Styles.useRegister_content}>
          <div className={Styles.useRegister_contentText}>
            <h1 className='tw-font-semibold tw-text-2xl tw-w-[70%] lg:tw-w-[100%] tw-text-center md:tw-text-4xl lg:tw-text-6xl'>
              Sell Big, Sell Fast
            </h1>
            <button
              className={`tw-text-center tw-p-2 tw-truncate tw-rounded-md tw-bg-red-kwek100 tw-text-white-100 tw-flex `}
              onClick={() => {
                router.push("/sell/create-account");
              }}
            >
              Register Now{"  "}
              {/* <i className="fas fa-long-arrow-right fa-2x tw-ml-2"></i> */}
              <HiOutlineArrowNarrowRight className='tw-text-lg tw-m-1' />
            </button>
          </div>
          <div className={Styles.useRegister_contentImage}>
            <Image src='/images/electronics.png' width='1016' height='397' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default use;
