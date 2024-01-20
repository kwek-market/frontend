import BreadCrumbs from "@/components/admin/breadcrumbs";
import EditIcon from "@/components/icons/admin/edit";
import MasterCardIcon from "@/components/icons/admin/mastercard";
import Offline from "@/components/icons/admin/offline";
import PaypalIcon from "@/components/icons/admin/paypal";
import SuccessIcon from "@/components/icons/admin/success";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import React, { useState } from "react";

const Settings = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Settings", path: "/admin/settings" },
        ]}
        header="Settings"
      />
      <div className=" tw-pt-4">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Email" key="1">
            <p>Send message to:</p>

            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                Individual buyer
              </label>
            </div>
            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                Individual seller
              </label>
            </div>
            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                Selected Customer
              </label>
            </div>
            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                All buyer
              </label>
            </div>
            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                All Seller
              </label>
            </div>
            <div>
              <input
                id="individual_buyer"
                type="checkbox"
                className=" tw-outline-none"
              />
              <label htmlFor="individual_buyer" className="tw-ml-3">
                Email selections from sign-ups
              </label>
            </div>
          </TabPane>
          <TabPane tab="Charge" key="2">
            <h2 className=" tw-pt-14 tw-font-semibold tw-text-[22px]">
              Payment Methods
            </h2>
            <p className=" tw-pt-5 tw-font-medium">
              Activate one or more payment methods to offer checkout options
              that best suits you and you clients.
            </p>

            <div className=" tw-mt-8 tw-font-medium tw-space-y-11">
              <div className=" tw-flex tw-gap-x-10">
                <MasterCardIcon />
                <div>
                  <p>
                    The safest, fastest and easiest way to accept credit card
                    payments. Integrate in minutes
                  </p>
                  <div className=" tw-pt-6 tw-flex tw-gap-x-3">
                    <button className=" tw-flex tw-gap-x-3 tw-items-center tw-border-[#FABA00] tw-text-[#FABA00] tw-border tw-rounded-[10px] tw-px-4 tw-py-2">
                      <EditIcon /> Edit
                    </button>
                    <button className=" tw-flex tw-gap-x-3 tw-items-center  tw-text-[#009D19] tw-bg-[#009d191a] tw-rounded-[10px] tw-px-4 tw-py-2">
                      <SuccessIcon /> ON
                    </button>
                  </div>
                </div>
              </div>
              <div className=" tw-flex tw-gap-x-10">
                <PaypalIcon />
                <div>
                  <p>Accept online payments using PayPal Express Checkout.</p>
                  <div className=" tw-pt-6 tw-flex tw-gap-x-3">
                    <button className=" tw-flex tw-gap-x-3 tw-items-center tw-border-[#FABA00] tw-text-[#FABA00] tw-border tw-rounded-[10px] tw-px-4 tw-py-2">
                      <EditIcon /> Edit
                    </button>
                    <button className=" tw-flex tw-gap-x-3 tw-items-center  tw-text-[#009D19] tw-bg-[#009d191a] tw-rounded-[10px] tw-px-4 tw-py-2">
                      <SuccessIcon /> ON
                    </button>
                  </div>
                </div>
              </div>
              <div className=" tw-flex tw-gap-x-10">
                <Offline />
                <div>
                  <p>
                    Set up to arrange alternative payments that best suits your
                    business and your clients.
                  </p>
                  <div className=" tw-pt-6 tw-flex tw-gap-x-3">
                    <button className=" tw-flex tw-gap-x-3 tw-items-center tw-border-[#FABA00] tw-text-[#FABA00] tw-border tw-rounded-[10px] tw-px-4 tw-py-2">
                      <EditIcon /> Edit
                    </button>
                    <button className=" tw-flex tw-gap-x-3 tw-items-center  tw-text-[#009D19] tw-bg-[#009d191a] tw-rounded-[10px] tw-px-4 tw-py-2">
                      <SuccessIcon /> ON
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          {/* <TabPane tab="Coupon" key="3">
            coupon
          </TabPane> */}
          {/* Removing coupon tab cause there's already a page for coupons */}
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
