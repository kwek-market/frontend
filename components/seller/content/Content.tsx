import React, { useState } from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import useSellerProducts from "@/hooks/useSellerProducts";
import ProductFilled from "@/components/productFilled/ProductFilled";
import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import Load from "@/components/Loader/Loader";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import { OrdersEmpty, OrdersFilled } from "../orders";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import useSellerOrders from "@/hooks/useSellerOrders";

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
  const {
    status: ordersStatus,
    data: ordersData,
    error: ordersError,
  } = useSellerOrders(token);
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <div className="tw-py-3 tw-px-6">
      <Tabs
        defaultActiveKey="1"
        color="tw-text-error"
        className="tw-text-error tw-border-0"
        animated
      >
        <TabPane tab="Home" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Products" key="2">
          {status === "loading" && <Load />}
          {status === "error" && <ErrorInfo error={productError} />}
          {status === "success" &&
          productsData.getSellerProducts !== undefined &&
          productsData.getSellerProducts.length > 0
            ? !showProduct && (
                <ProductFilled
                  product={productsData.getSellerProducts}
                  setShowProduct={setShowProduct}
                  setProduct={setProduct}
                />
              )
            : !showProduct && <ProductEmpty />}
          {showProduct && (
            <SingleProduct setShowProduct={setShowProduct} product={product} />
          )}
        </TabPane>
        <TabPane tab="Order" key="3">
          {ordersStatus === "loading" && <Load />}
          {ordersStatus === "error" && <ErrorInfo error={productError} />}
          {ordersStatus === "success" &&
          ordersData !== undefined &&
          ordersData.getSellerOrders.length > 0 ? (
            <OrdersFilled orders={ordersData.getSellerOrders} />
          ) : (
            <OrdersEmpty />
          )}
        </TabPane>
        <TabPane tab="Reviews" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Promotions" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Settings" key="6">
          settings
        </TabPane>
        <TabPane tab="Wallet" key="7">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Content;
