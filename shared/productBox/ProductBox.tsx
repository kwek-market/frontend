import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";
import styles from "./ProductBox.module.scss";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCartPayload,
  AddToWishlistPayload,
  ProductType,
} from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { getIp } from "@/helpers";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import Loader from "react-loader-spinner";
import useItemInCart from "@/hooks/useItemInCart";
import useItemInWishlist from "@/hooks/useItemInWishlist";

export type ProductBoxProps = {
  id?: string;
  product?: ProductType;
};

const ProductBox = function ({ id, product: prod }: ProductBoxProps) {
  const dispatch = useDispatch();
  const { user, cart, wishlist } = useSelector((state: RootState) => state);

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      token: user.token,
    };
    dispatch(addToCartFunc(payload, user.token));
    dispatch(getCartFunc(user.token));
  }

  function addToWishlist(id: string) {
    const payload: AddToWishlistPayload = {
      productId: id,
      token: user.token,
    };
    dispatch(createWishlist(payload, user.token));
    dispatch(getWishList(user.token));
  }

  const checkIfItemInCart = useItemInCart(prod, cart.cart);

  const checkIfItemInWishlist = useItemInWishlist(prod, wishlist.wishlists);

  if (prod === undefined)
    return (
      <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
        <Loader type="Rings" width={60} height={60} color="#FC476E" />
      </div>
    );

  return (
    <div className="tw-w-full">
      <div className="tw-relative tw-w-full">
        <Image
          src={prod?.image[0].imageUrl}
          width="329"
          height="284"
          alt="product"
        />
        <span className="tw-absolute top-75 tw-right-0 tw-mr-3 tw-flex tw-flex-row hover:tw-hidden">
          <i
            className={`fas fa-shopping-cart ${
              !checkIfItemInCart(prod?.options[0]?.id)
                ? "tw-bg-white-100"
                : "tw-bg-red-kwek100"
            } tw-rounded-full fa-0.5x fa-xs tw-mr-2 tw-text-gray-kwek100`}
            style={{ padding: "5px" }}
            onClick={() => addToCart(prod?.options[0]?.id)}
          />
          {user.token && (
            <i
              className={`fas fa-heart tw-p-1 ${
                !checkIfItemInWishlist(id)
                  ? "tw-bg-white-100"
                  : "tw-bg-gray-kwek700"
              } tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs`}
              style={{ padding: "5px" }}
              onClick={() => addToWishlist(id)}
            />
          )}
        </span>
        <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 overlay tw-z-20 tw-bg-brown-kwek300">
          <span className="tw-absolute tw-right-0 tw-flex tw-flex-col tw-mt-2 tw-mr-2">
            <i
              className={`fas fa-shopping-cart ${
                !checkIfItemInCart(prod?.options[0]?.id)
                  ? "tw-bg-white-100"
                  : "tw-bg-red-kwek100"
              } tw-rounded-full fa-0.5x fa-xs tw-mb-2 tw-text-gray-kwek100`}
              style={{ padding: "5px" }}
              onClick={() => addToCart(prod?.options[0]?.id)}
            />
            {user.token && (
              <i
                className={`fas fa-heart tw-p-1 ${
                  !checkIfItemInWishlist(id)
                    ? "tw-bg-white-100"
                    : "tw-bg-gray-kwek700"
                } tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs`}
                style={{ padding: "5px" }}
                onClick={() => addToWishlist(id)}
              />
            )}
          </span>
          <Link href={`/product/${prod.productTitle}?id=${prod.id}`} replace>
            <a className="tw-bg-red-kwek200 bg-red-200 tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-p-2 tw-text-center tw-text-white-100 tw-uppercase tw-opacity-100">
              details
            </a>
          </Link>
        </div>
      </div>

      <Link href={`/product/${prod.productTitle}?id=${prod.id}`} replace>
        <a>
          <div className={styles.box_details}>
            <p className={styles.box_productCategory}>{prod?.productTitle}</p>

            <p className={styles.box_productPrice}>
              {!!prod.options[0]?.discountedPrice && (
                <span>
                  ₦{""} {prod.options[0].optionTotalPrice}
                </span>
              )}
              <span>₦{prod.options[0]?.price}</span>
            </p>

            {prod.productRating.length > 0 ? (
              <div className="tw-flex">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={prod.productRating[0].rating}
                  editing={false}
                  emptyStarColor="#c4c4c4"
                  starColor="#ffc107"
                />
                <small className="tw-text-gray-kwek400">
                  ({prod.productRating[0].likes} reviews)
                </small>
              </div>
            ) : (
              <div className={styles.box_productRating}>
                <StarRatingComponent
                  name="rate2"
                  starCount={5}
                  value={0}
                  editing={false}
                />
                <small>(0 Reviews)</small>
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductBox;
