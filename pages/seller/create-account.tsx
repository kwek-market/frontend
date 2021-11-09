import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";

import { AuthLayout } from "@/layouts";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { connect } from "react-redux";
import Link from "next/link";

import styles from "./styles/sellers.module.css";
import Loader from "react-loader-spinner";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Page = ({ user, setUser, data }) => {
  const [loading, setLoading] = useState<any>(false);
  const [callCode, setCallCode] = useState<any>(93);
  const [flag, setFlag] = useState<any>("https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg");

  const createAccount = async (e: any, formData: any) => {
    // const data = await userFetcher(query, variables);
    e.preventDefault();
  };

  const handleSubmit = (data) => {
    console.log(data)
  };

  const bannerText = {
    lineOne: "Make Money &",
    lineTwo: "Grow your",
    lineThree: "Business Online",
  };

  const subText =
    "Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket today!";

  return (
    <AuthLayout
      id="createSellerAccount"
      subText={subText}
      withSubText={true}
      withLogo={true}
      bannerLink={false}
      withBanner={true}
      bannerText={bannerText}
    >
      <div>
        <form action="#" className="tw-space-y-4" method="POST">
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <div className="tw-flex tw-my-3 tw-justify-between">
              <div className={`tw-font-bold ${styles.form_title}`}>
                <h2 className="">Set up your Store</h2>
              </div>
              <div className={` ${styles.form_link}`}>
                <Link href={`http://localhost:3000/seller/create-account`}>
                  <a className="tw-text-red-kwek100">I have an account</a>
                </Link>
              </div>
            </div>
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Full name
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 focus:tw-bg-white-100 tw-border-none focus:tw-ring-gray-300 focus:tw-border-gray-300 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm "
                placeholder="Alison"
              />

              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                placeholder="Eyo"
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Phone number
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
                <Menu.Button className="tw-inline-flex tw-items-center tw-px-3 tw-rounded-l-md tw-rounded-r-md tw-border tw-border-r-md tw-border-gray-300 tw-bg-gray-50 tw-text-gray-500 tw-text-sm">
                <img style={{borderRadius: '50%', width: '2.25vw', height: '1.75vw'}} className="tw-inline-flex" src={flag} />
                +{callCode}
                  <ChevronDownIcon
                    className="tw-mr-1 tw-ml-2 tw-h-5 tw-w-5"
                    aria-hidden="true"
                    onClick={() => console.log(data)}
                  />
                </Menu.Button>
                <Menu.Items  className="tw-origin-top-right tw-overflow-y-scroll tw-bg-gray-100 tw-absolute tw-right-1 tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-opacity-100 tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                  <div style={{height: '70vh' }} className="tw-py-1">
                    {data.map((item, id) => <Menu.Item key={id}>
                      {({ active }) => (
                        <a
                          href="#"
                          key={id}
                          className={classNames(
                            active
                              ? "tw-bg-gray-100 tw-text-gray-900"
                              : "tw-text-gray-700 tw-flex",
                            "tw-block tw-px-4 tw-py-2 tw-text-sm"
                          )}
                          onClick={()=>{setCallCode(item.callingCodes); setFlag(item.flag) }}
                        >
                          <img style={{borderRadius: '50%', width: '2.25vw', height: '1.75vw'}} className="tw-inline-flex" src={item.flag} />+{item.callingCodes}
                        </a>
                      )}
                    </Menu.Item>)}
                  </div>
                </Menu.Items>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-none tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                  placeholder="903 456 7890"
                />
              </div>
            </Menu>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Shop name
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                placeholder="Enter your shop name here"
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
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
                name="company-website"
                id="company-website"
                className=" tw-border tw-border-gray-300 focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-none tw-rounded-r-md sm:tw-text-sm focus:tw-border-gray-50"
                placeholder="Enter your store URL here"
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Shop Address
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                placeholder="Enter the address of your shop"
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              Landmark
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                placeholder="Closest landmark to your location"
              />
            </div>
          </div>
          <div className="tw-col-span-12 sm:tw-col-span-6">
            <label
              htmlFor="company-website"
              className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
            >
              How did you hear about Kwek Vendorship?{" "}
            </label>
            <div className="tw-mt-1 tw-flex tw-rounded-md tw-space-x-4">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="tw-bg-red-50 tw-border-none focus:tw-ring-gray-300 focus:tw-bg-white-100 tw-flex-1 tw-block tw-w-full tw-rounded-l tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
                placeholder="Select one option"
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
                    className="focus:tw-ring-indigo-500 tw-h-4 tw-w-4 tw-text-indigo-600 tw-border-gray-300 tw-rounded"
                  />
                  <label
                    htmlFor="push-everything"
                    className="tw-ml-3 tw-block tw-text-xs tw-font-small tw-text-gray-700"
                  >
                    I have heard and accepted the <Link href={`/`}>
                    <a className="tw-text-red-kwek100">Seller’s Policy</a>
                    </Link> and <Link href={`/`}><a className="tw-text-red-kwek100">Terms and
                    Conditions{" "}</a>
                    </Link>
                  </label>
                </div>
              </div>
              <div className="tw-mt-2 tw-flex ">
              <button
                className={`btn bg-primary tw-flex-1 tw-w-6`}
                // onClick={handleSubmit}
              >
                {loading && loading ? (
                  <Loader
                    type="Puff"
                    color="#fff"
                    height={30}
                    width={30}
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

export async function getStaticProps(context) {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();
  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const mapStateToProps = (state: any) => ({
  // user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  // setUser: (user: any) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
