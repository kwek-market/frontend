import { Tabs } from "antd";
import { useRouter } from "next/router";
import React from "react";
import History from "./History";
import Invoices from "./Invoices";

const { TabPane } = Tabs;

export default function WalletContent() {
  const router = useRouter();
  function issueInvoice() {
    router.push("/seller/invoice");
  }
  const operation = (
    <button
      className="tw-uppercase tw-rounded-md tw-py-2 tw-px-3 tw-border tw-border-green-success tw-text-green-success"
      onClick={issueInvoice}
    >
      <i className="fas fa-plus tw-mr-2" />
      issue invoice
    </button>
  );

  return (
    <div className="tw-mt-5">
      <Tabs defaultActiveKey="1" animated tabBarExtraContent={operation}>
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
