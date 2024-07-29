import useAvgRating from "@/hooks/useAvgRating";
import usePromotions from "@/hooks/usePromotions";
import { ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Naira } from "../UI/NairaSymbol";
import styles from "./ProductFilled.module.scss";

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
    return data?.getSellerPromotedProducts.find(item => item.id === id);
  }

  return (
    <section className='tw-shadow-lg'>
      <div className={styles.filled}>
        <div className={styles.products}>
          <div className='tw-text-lg tw-font-semibold'>All Products - {product.length}</div>
          <div className='tw-flex tw-gap-x-4 tw-items-center'>
            <p className='tw-p-0 tw-m-0'>Sort by: </p>
            <select className='' value={filter} onChange={e => setFilter(e.target.value)}>
              <option value='-clicks'>Most Popular</option>
              <option value='-date_created'>Recent</option>
              <option value='sales'>Price: Low to High</option>
              <option value='-sales'>Price: High to Low</option>
              <option value='-rating'>Product Rating</option>
            </select>
          </div>
        </div>
        <div className='tw-grid tw-gap-3 tw-grid-cols-2 lg:tw-grid-cols-4 tw-mt-2'>
          {product.map((prod: ProductType) => (
            <Link href={`/product/${prod?.id}`}>
              <a key={prod.id} className='tw-shadow-lg tw-cursor-pointer tw-relative tw-block'>
                <Image
                  src={prod.image[0].imageUrl}
                  alt={prod.productTitle}
                  layout='responsive'
                  width={200}
                  height={200}
                  className=' tw-object-cover'
                />
                {!!isPromoted(prod.id) && (
                  <span className='tw-bg-green-success tw-text-white-100 tw-rounded-xl tw-py-1 tw-px-4 tw-absolute tw-left-[35%] md:tw-left-[60%] tw-top-[5%]'>
                    promoted
                  </span>
                )}
                <div className='tw-flex tw-flex-wrap tw-justify-between tw-p-3'>
                  <div>
                    <p className='tw-text-lg tw-font-semibold tw-mb-0'>{prod.productTitle}</p>
                    <Rate allowHalf value={useAvgRating(prod)} />

                    <p className='tw-font-light tw-text-gray-600 tw-mb-0'>
                      <span>Quantity: </span>
                      {prod.options[0]?.quantity}
                    </p>
                  </div>

                  <div>
                    <p
                      className={`tw-text-lg tw-font-semibold tw-mb-0 tw-text-right ${
                        prod.options[0]?.discountedPrice ? "tw-line-through tw-text-gray-300" : ""
                      }`}
                    >
                      <Naira />
                      {prod.options[0]?.price}
                    </p>

                    {prod.options[0]?.discountedPrice ? (
                      <p className={`tw-text-lg tw-font-semibold tw-mb-0 tw-text-right`}>
                        <Naira />
                        {prod.options[0]?.price}
                      </p>
                    ) : null}

                    <p className=' tw-text-[#BFA5A3] tw-text-xs'>
                      ({prod?.productRating.length} reviews)
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className='tw-mt-4'>
          <ReactPaginate
            nextLabel='next >'
            onPageChange={e => handlePageClick(e)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel='< previous'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFilled;
