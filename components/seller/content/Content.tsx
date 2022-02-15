import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import useSellerProducts from "@/hooks/useSellerProducts";
import ProductFilled from "@/components/productFilled/ProductFilled";
import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import Load from "@/components/Loader/Loader";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import { OrdersEmpty, OrdersFilled } from "../orders";

const { TabPane } = Tabs;

function Content() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    status,
    data: productsData,
    error: productError,
  } = useSellerProducts(token);

  return (
    <div className="tw-py-3 tw-px-6">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Home" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Products" key="2">
          {status === "loading" && <Load />}
          {status === "error" && <ErrorInfo error={productError} />}
          {status === "success" &&
          productsData.getSellerProducts !== undefined &&
          productsData.getSellerProducts.length > 0 ? (
            <ProductFilled product={productsData.getSellerProducts} />
          ) : (
            <ProductEmpty />
          )}
        </TabPane>
        <TabPane tab="Order" key="3">
          <OrdersEmpty />
          <OrdersFilled />
        </TabPane>
        <TabPane tab="Reviews" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Promotions" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Settings" key="6">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Wallet" key="7">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Content;
