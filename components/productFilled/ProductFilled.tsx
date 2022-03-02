import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductFilled.module.scss";
import { ProductType } from "@/interfaces/commonTypes";
import useAvgRating from "@/hooks/useAvgRating";
import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { Rate } from "antd";

type ProductFilledProps = {
  product: ProductType[];
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const ProductFilled = function ({
  product,
  setShowProduct,
  setProduct,
}: ProductFilledProps) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { status, data, error } = usePromotions(token);
  const [filter, setFilter] = useState<string>("popular");
  console.log(data);

  function isPromoted(id: string) {
    return data?.getSellerPromotedProducts.find((item) => item.id === id);
  }

  function displayProductDetails(prod: any) {
    setShowProduct(true);
    setProduct(prod);
  }

  return (
    <section className="tw-shadow-lg">
      <div className={styles.filled}>
        <div className={styles.products}>
          <div className="tw-text-lg tw-font-semibold">
            All Products - {product.length}
          </div>
          <div className={styles.sort}>
            <p className="">Sort by: </p>
            <select
              className="tw-ml-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="recent">Recent</option>
              <option value="price">Price: Low to High</option>
              <option value="price">Price: High to Low</option>
              <option value="rating">Product Rating</option>
            </select>
          </div>
        </div>
        <div className="tw-grid tw-gap-3 tw-grid-cols-3 lg:tw-grid-cols-4 tw-mt-2">
          {product.map((prod: ProductType) => (
            <div
              key={prod.id}
              className="tw-shadow-lg tw-cursor-pointer tw-relative"
              onClick={() => displayProductDetails(prod)}
            >
              <Image
                src={prod.image[0].imageUrl}
                alt={prod.productTitle}
                layout="responsive"
                width={200}
                height={200}
              />
              {!!isPromoted(prod.id) && (
                <span className="tw-bg-green-success tw-text-white-100 tw-rounded-xl tw-py-1 tw-px-4 tw-absolute tw-left-[60%] tw-top-[5%]">
                  promoted
                </span>
              )}
              <div className="tw-flex tw-justify-between tw-p-3">
                <div>
                  <p className="tw-text-lg tw-font-semibold tw-mb-0">
                    {prod.productTitle}
                  </p>
                  <Rate allowHalf value={useAvgRating(prod)} />
                </div>
                <div>
                  <p className="tw-text-lg tw-font-semibold tw-mb-0">
                    {prod.options[0].price}
                  </p>
                  <p>{prod?.productRating.length} reviews</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFilled;
