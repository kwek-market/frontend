import BreadCrumbs from "@/components/admin/breadcrumbs";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import { useState } from "react";
import { ProductCharges } from "../../../components/productCharges/ProductCharges";

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
        header='Settings'
      />
      <div className=' tw-pt-4'>
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className='adminTab'
          activeKey={activeKey}
          onTabClick={key => setActiveKey(key)}
        >
          <TabPane tab='Charge' key='1'>
            <ProductCharges />
          </TabPane>

          <TabPane tab='Email' key='2'>
            <p>Send message to:</p>

            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                Individual buyer
              </label>
            </div>
            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                Individual seller
              </label>
            </div>
            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                Selected Customer
              </label>
            </div>
            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                All buyer
              </label>
            </div>
            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                All Seller
              </label>
            </div>
            <div>
              <input id='individual_buyer' type='checkbox' className=' tw-outline-none' />
              <label htmlFor='individual_buyer' className='tw-ml-3'>
                Email selections from sign-ups
              </label>
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
