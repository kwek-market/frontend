import React from "react";
import Image from "next/image";
import styles from "./ProductFilled.module.scss";
import { ProductType } from "@/interfaces/commonTypes";
import useAvgRating from "@/hooks/useAvgRating";
import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { Rate } from "antd";
import ReactPaginate from "react-paginate";

type ProductFilledProps = {
  product: ProductType[];
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const ProductFilled = function ({
  product,
  setShowProduct,
  setProduct,
  pageCount,
  handlePageClick,
  filter,
  setFilter,
}: ProductFilledProps) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { status, data, error } = usePromotions(token);

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
              <option value="-clicks">Most Popular</option>
              <option value="-date_created">Recent</option>
              <option value="sales">Price: Low to High</option>
              <option value="-sales">Price: High to Low</option>
              <option value="-rating">Product Rating</option>
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
        <div className="tw-mt-4">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFilled;
