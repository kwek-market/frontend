import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import ProductFilled from "@/components/productFilled/ProductFilled";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import useSellerProducts from "@/hooks/useSellerProducts";
import { ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    status,
    data: productsData,
    error: productError,
  } = useSellerProducts(token);
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  return (
    <Fragment>
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
    </Fragment>
  );
}
