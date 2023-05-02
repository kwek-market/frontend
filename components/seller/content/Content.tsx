import React from "react";
import { Tabs } from "antd";
import Settings from "../settings/Settings";
import Wallet from "../wallet/Wallet";
import Order from "../orders/Order";
import Product from "../product/Product";
import Promotions from "../promotions/Promotions";
import Home from "../home/Home";
import Reviews from "../reviews/Reviews";

const { TabPane } = Tabs;

function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="tw-p-3 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 ">
      {children}
    </section>
  );
}

function Content() {
  return (
    <div className="tw-py-3">
      <Tabs
        defaultActiveKey="1"
        animated
        tabBarStyle={{ margin: "0 3rem", borderColor: "red" }}
        className="sellprof"
      >
        <TabPane tab="Home" key="1">
          <Container>
            <Home />
          </Container>
        </TabPane>
        <TabPane tab="Products" key="2">
          <Container>
            <Product />
          </Container>
        </TabPane>
        <TabPane tab="Order" key="3">
          <Container>
            <Order />
          </Container>
        </TabPane>
        <TabPane tab="Reviews" key="4">
          <Container>
            <Reviews />
          </Container>
        </TabPane>
        <TabPane tab="Promotions" key="5">
          <Container>
            <Promotions />
          </Container>
        </TabPane>
        <TabPane tab="Settings" key="6">
          <Container>
            <Settings />
          </Container>
        </TabPane>
        <TabPane tab="Wallet" key="7">
          <Container>
            <Wallet />
          </Container>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Content;
