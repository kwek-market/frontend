import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import React, { useState } from "react";

const Settings = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  return (
    <AdminLayout>
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

            <div>individual buyer</div>
          </TabPane>
          <TabPane tab="Charge" key="2">
            <p>Payment Methods</p>
            
          </TabPane>
          <TabPane tab="Coupon" key="3">
            coupon
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
