import { Tabs } from "antd";
import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import Store from "./components/Store";

const { TabPane } = Tabs;

export default function Settings() {
  return (
    <section className="tw-rounded-md">
      <p className="tw-capitalize tw-font-semibold tw-text-lg tw-text-gray-kwek900">
        Settings
      </p>
      <section className="">
        <Tabs
          defaultActiveKey="1"
          color="tw-text-error"
          className="tw-text-error tw-border-0"
          animated
        >
          <TabPane tab="Personal Details" key="1">
            <PersonalDetails />
          </TabPane>
          <TabPane tab="Store" key="2">
            <Store />
          </TabPane>
          <TabPane tab="Delivery" key="3">
            Content of Tab Pane 1
          </TabPane>
        </Tabs>
      </section>
    </section>
  );
}
