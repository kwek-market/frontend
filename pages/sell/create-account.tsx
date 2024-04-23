import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { message } from "antd";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { Puff } from "react-loader-spinner";
import styles from "./styles/sellers.module.css";
import { AuthLayout } from "@/layouts";
import { StartSelling } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { getSellerData, startSelling } from "@/store/seller/seller.action";
import withAuth from "@/hooks/withAuth";
import { getUserData } from "@/store/user/user.actions";
import { useAppDispatch } from "../../store";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Page = function ({ data }) {
  const dispatch = useAppDispatch();
  const { user, seller } = useSelector((state: RootState) => state);
  const router = useRouter();
  const [callCode, setCallCode] = useState<number>(93);
  const [countryName, setCountryName] = useState<string>("NG");
  const [flag, setFlag] = useState<string>(
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
  );
  const [sellerData, setSellerData] = useState<StartSelling>({
    acceptedPolicy: true,
    firstname: "",
    landmark: "",
    lastname: "",
    lga: "",
    phoneNumber: "",
    shopAddress: "",
    shopName: "",
    shopUrl: "",
    state: "",
    howYouHeardAboutUs: "",
    token: user.token,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // perform checks
    const {
      firstname,
      lastname,
      phoneNumber,
      shopName,
      shopUrl,
      shopAddress,
      state,
      lga,
      landmark,
      acceptedPolicy,
      howYouHeardAboutUs,
    } = sellerData;
    if (firstname === "") {
      message.error("Firstname is required");
      return;
    }
    if (lastname === "") {
      message.error("Lastname is required");
      return;
    }
    if (phoneNumber === "") {
      message.error("Phone number is required");
      return;
    }
    if (phoneNumber.length < 8) {
      message.error("Phone number is invalid");
      return;
    }
    if (shopName === "") {
      message.error("Shop name is required");
      return;
    }
    if (shopUrl === "") {
      message.error("Shop url is required");
      return;
    }
    if (shopAddress === "") {
      message.error("Shop address is required");
      return;
    }
    if (state === "") {
      message.error("State is required");
      return;
    }
    if (lga === "") {
      message.error("LGA is required");
      return;
    }
    if (landmark === "") {
      message.error("Landmark is required");
      return;
    }
    if (acceptedPolicy === false) {
      message.error("You must accept the policy");
      return;
    }
    if (howYouHeardAboutUs === "") {
      message.error("How you heard about us is required");
      return;
    }
    // dispatch
    dispatch(
      startSelling(
        { ...sellerData, phoneNumber: `${callCode}${phoneNumber}` },
        user.token
      )
    );
  };

  useEffect(() => {
    // if you don't have an account, you can't come to this page
    !user.token && router.push("/login");
    user.token && dispatch(getUserData(user.token));
    user.token && user.user.isSeller && dispatch(getSellerData(user.token));
    if (
      seller.seller.sellerVerified ||
      user.user.isSeller ||
      seller.sellerCreated.status
    )
      router.push("/seller/profile");
  }, [
    seller.sellerCreated.status,
    user.user.isSeller,
    seller.seller.sellerVerified,
  ]);

  useEffect(() => {
    user.token && dispatch(getUserData(user.token));
    user.token && user.user.isSeller && dispatch(getSellerData(user.token));
  }, []);

  const bannerText = {
    lineOne: "Make Money &",
    lineTwo: "Grow your",
    lineThree: "Business Online",
  };

  const subText =
    "Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!";

  const handlePhoneCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <AuthLayout
      id="createSellerAccount"
      subText={subText}
      withSubText
      withLogo
      bannerLink={false}
      withBanner
      bannerText={bannerText}
    >
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="tw-space-y-4">
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <div className="tw-flex tw-my-3 tw-justify-between">
              <div className={`tw-font-bold ${styles.form_title}`}>
                <h2 className="">Set up your Store</h2>
              </div>
              <div className={` ${styles.form_link}`}>
                <Link href="/seller/profile" className="tw-text-red-kwek100">
                  I have an account
                </Link>
              </div>
            </div>
            <label
              htmlFor="fullname"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Full name
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="tw-bg-red-50 focus:tw-bg-white-100 tw-border-none focus:tw-ring-gray-300 focus:tw-border-gray-300 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-p-4"
                placeholder="firstname"
                value={sellerData.firstname}
                onChange={(e) =>
                  setSellerData({
                    ...sellerData,
                    firstname: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                placeholder="lastname"
                value={sellerData.lastname}
                onChange={(e) =>
                  setSellerData({
                    ...sellerData,
                    lastname: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="phoneNumber"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Phone number
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
                <Menu.Button className="tw-inline-flex tw-items-center tw-px-3 tw-rounded-l-md tw-rounded-r-md tw-border tw-border-r-md tw-border-gray-300 tw-bg-gray-50 tw-text-gray-500 tw-text-sm">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "2.25vw",
                      height: "1.75vw",
                    }}
                    className="tw-inline-flex"
                    src={flag}
                  />
                  +{callCode}
                  <ChevronDownIcon
                    className="tw-mr-1 tw-ml-2 tw-h-5 tw-w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Menu.Items className="tw-origin-top-right tw-overflow-y-scroll tw-bg-gray-100 tw-absolute tw-mt-2 tw-w-72 tw-rounded-md tw-shadow-lg tw-bg-opacity-100 tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                  <div style={{ height: "70vh" }} className="tw-py-1">
                    {data.map(
                      (
                        item: {
                          flag: string;
                          callingCodes: number;
                          name: string;
                        },
                        id: number
                      ) => (
                        <Menu.Item key={id}>
                          {({ active }) => (
                            <button
                              key={id}
                              className={classNames(
                                active
                                  ? "tw-bg-gray-100 tw-text-gray-900"
                                  : "tw-text-gray-700 tw-flex",
                                "tw-block tw-px-4 tw-py-2 tw-text-sm"
                              )}
                              onClick={() => {
                                setCallCode(item.callingCodes);
                                setFlag(item.flag);
                              }}
                            >
                              <img
                                style={{
                                  borderRadius: "50%",
                                  width: "2.25vw",
                                  height: "1.75vw",
                                }}
                                className="tw-inline-flex tw-mr-2"
                                src={item.flag}
                              />
                              +{item.callingCodes} {item.name}
                            </button>
                          )}
                        </Menu.Item>
                      )
                    )}
                  </div>
                </Menu.Items>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-none tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                  placeholder="903 456 7890"
                  value={sellerData.phoneNumber}
                  onChange={(e) =>
                    setSellerData({
                      ...sellerData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
            </Menu>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="shopName"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Shop name
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="shopName"
                id="shopName"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                placeholder="Enter your shop name here"
                value={sellerData.shopName}
                onChange={(e) => {
                  setSellerData({
                    ...sellerData,
                    shopName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="shopUrl"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Shop url
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md">
              <span className="tw-inline-flex tw-bg-red-50 tw-items-center tw-px-3 tw-rounded-l-md tw-border tw-border-r-0 tw-border-gray-300 focus:tw-bg-gray-50 tw-text-gray-500 tw-text-sm">
                www.kwekmarket.com/
              </span>
              <input
                type="text"
                name="shopUrl"
                id="shopUrl"
                className=" tw-border tw-border-gray-300 focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-none tw-rounded-r-md sm:tw-text-sm focus:tw-border-gray-50 tw-p-4"
                placeholder="Enter your store URL here"
                value={sellerData.shopUrl}
                onChange={(e) => {
                  setSellerData({
                    ...sellerData,
                    shopUrl: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="tw-flex tw-col-span-12 sm:tw-col-span-6 tw-space-x-4 tw-my-3 tw-justify-between">
            <div className="tw-flex-1">
              <label
                htmlFor="state"
                className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
              >
                State
              </label>
              <div className="tw-mt-1 tw-rounded-md ">
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="tw-bg-red-50 focus:tw-bg-white-100 tw-border-none focus:tw-ring-gray-300 focus:tw-border-gray-300 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-p-4"
                  placeholder="Alison"
                  value={sellerData.state}
                  onChange={(e) =>
                    setSellerData({
                      ...sellerData,
                      state: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="tw-flex-1">
              <label
                htmlFor="lga"
                className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
              >
                LGA
              </label>
              <div className="tw-mt-1 tw-rounded-md">
                <input
                  type="text"
                  name="lga"
                  id="lga"
                  className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                  placeholder="Eyo"
                  value={sellerData.lga}
                  onChange={(e) =>
                    setSellerData({
                      ...sellerData,
                      lga: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="shopAddress"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Shop Address
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="shopAddress"
                id="shopAddress"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                placeholder="Enter the address of your shop"
                value={sellerData.shopAddress}
                onChange={(e) =>
                  setSellerData({
                    ...sellerData,
                    shopAddress: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="landmark"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Landmark
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="landmark"
                id="landmark"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                placeholder="Closest landmark to your location"
                value={sellerData.landmark}
                onChange={(e) =>
                  setSellerData({
                    ...sellerData,
                    landmark: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="hearAbout"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              How did you hear about Kwek Vendorship?{" "}
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="hearAbout"
                id="hearAbout"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300 tw-p-4"
                placeholder="Type in how"
                value={sellerData.howYouHeardAboutUs}
                onChange={(e) => {
                  setSellerData({
                    ...sellerData,
                    howYouHeardAboutUs: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="px-4 py-3 bg-white space-y-4 sm:p-6">
            <fieldset>
              <div className="tw-mt-2">
                <div className="tw-flex tw-items-start">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="checkbox"
                    defaultChecked={sellerData.acceptedPolicy}
                    className="focus:tw-ring-indigo-500 tw-h-4 tw-w-4 tw-text-indigo-600 tw-border-gray-300 tw-rounded"
                  />
                  <label
                    htmlFor="push-everything"
                    className="tw-ml-3 tw-block tw-text-xs tw-font-small tw-text-gray-700 tw-mb-5"
                  >
                    I have heard and accepted the{" "}
                    <Link href="/" className="tw-text-red-kwek100">
                      Seller’s Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/" className="tw-text-red-kwek100">
                      Terms and Conditions{" "}
                    </Link>
                  </label>
                </div>
              </div>
              <div className="tw-mt-2 tw-flex ">
                <button className="btn bg-primary tw-flex-1 tw-w-6 tw-p-4">
                  {seller.loading ? (
                    <Puff
                      visible={true}
                      height="30"
                      width="30"
                      color="#fff"
                      ariaLabel="puff-loading"
                    />
                  ) : (
                    "Start Selling"
                  )}
                </button>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export async function getStaticProps() {
  const data = await (await fetch(`https://restcountries.com/v2/all`)).json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default withAuth(Page);
