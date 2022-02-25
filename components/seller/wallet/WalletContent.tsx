import { Tabs } from "antd";
import React from "react";
import History from "./History";
import Invoices from "./Invoices";

const { TabPane } = Tabs;

export default function WalletContent() {
  return (
    <div className="tw-mt-5">
      <Tabs defaultActiveKey="1" animated>
        <TabPane tab="HISTORY" key="1" style={{ color: "black" }}>
          <History />
        </TabPane>
        <TabPane tab="INVOICES" key="2">
          <Invoices />
        </TabPane>
      </Tabs>
    </div>
  );
}
