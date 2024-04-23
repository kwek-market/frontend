import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import StarRatingComponent from "react-star-rating-component";
import styles from "@/shared/productBox/ProductBox.module.scss";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCartPayload,
  AddToWishlistPayload,
  ProductType,
} from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { getIp, updateClicks } from "@/helpers";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import useItemInCart from "@/hooks/useItemInCart";
import useItemInWishlist from "@/hooks/useItemInWishlist";
import useClicksUpdate from "@/hooks/useClicksUpdate";
import { Rate } from "antd";
import { useAppDispatch } from "../../store";

export type ProductBoxProps = {
  id: string;
  product: ProductType;
};

const CategoryProducts = function ({ id, product: prod }: ProductBoxProps) {
  const dispatch = useAppDispatch();
  const { user, cart, wishlist } = useSelector((state: RootState) => state);
  const { mutate } = useClicksUpdate();

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      token: user.token,
      quantity: 1,
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

  const checkIfItemInWIshlist = useItemInWishlist(prod, wishlist.wishlists);

  return (
    <div className="tw-w-full">
      <div className="tw-relative tw-w-full">
        <Image
          src={prod?.image[0].imageUrl}
          width="329"
          height="284"
          alt="product"
          className=" tw-object-cover"
        />
        {/* <span className="tw-absolute top-75 tw-right-0 tw-mr-3 tw-flex tw-flex-row hover:tw-hidden">
          <i
            className={`fas fa-shopping-cart ${
              !checkIfItemInCart(prod?.options[0]?.id)
                ? "tw-bg-white-100"
                : "tw-bg-red-kwek100"
            } tw-rounded-full fa-0.5x fa-xs tw-mr-2 tw-text-gray-kwek100`}
            style={{ padding: "5px" }}
            onClick={() => addToCart(prod.options[0].id)}
          />
          {user.token && (
            <i
              className={`fas fa-heart tw-p-1 ${
                !checkIfItemInWIshlist(id)
                  ? "tw-bg-white-100"
                  : "tw-bg-gray-kwek700"
              } tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs`}
              style={{ padding: "5px" }}
              onClick={() => addToWishlist(id)}
            />
          )}
        </span> */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 overlay tw-z-20 tw-bg-brown-kwek300">
          <span className="tw-absolute tw-right-0 tw-flex tw-flex-col tw-mt-2 tw-mr-2">
            <i
              className={`fas fa-shopping-cart ${
                !checkIfItemInCart(prod?.options[0]?.id)
                  ? "tw-bg-white-100"
                  : "tw-bg-red-kwek100"
              } tw-rounded-full fa-0.5x fa-xs tw-mb-2 tw-text-gray-kwek100`}
              style={{ padding: "5px" }}
              onClick={() => addToCart(prod.options[0].id)}
            />
            {user.token && (
              <i
                className={`fas fa-heart tw-p-1 ${
                  !checkIfItemInWIshlist(id)
                    ? "tw-bg-white-100"
                    : "tw-bg-gray-kwek700"
                } tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs`}
                style={{ padding: "5px" }}
                onClick={() => addToWishlist(id)}
              />
            )}
          </span>
          <Link
            href={`/product/${prod.id}?id=${prod.productTitle}`}
            onClick={() => updateClicks(prod.id, user.token, mutate)}
            className="tw-bg-red-kwek200 bg-red-200 tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-p-2 tw-text-center tw-text-white-100 tw-uppercase tw-opacity-100"
          >
            details
          </Link>
        </div>
      </div>

      <Link
        href={`/product/${prod.productTitle}?id=${prod.id}`}
        onClick={() => updateClicks(prod.id, user.token, mutate)}
      >
        <div className={styles.box_details}>
          <p className={styles.box_productCategory}>{prod?.productTitle}</p>

          <p className={styles.box_productPrice}>
            {prod.options[0]?.discountedPrice ? (
              <Fragment>
                <span>
                  ₦{""} {prod.options[0].discountedPrice}
                </span>
                <span>{prod.options[0]?.price}</span>
              </Fragment>
            ) : (
              <span>{prod.options[0]?.price}</span>
            )}
          </p>

          {prod.productRating.length > 0 ? (
            <div className="tw-flex tw-flex-wrap tw-justify-center">
              <Rate
                style={{ fontSize: "0.75rem" }}
                allowHalf
                disabled
                value={prod?.productRating[0]?.rating}
              />
              <small className="tw-text-gray-kwek400">
                ({prod.productRating[0].likes} Reviews)
              </small>
            </div>
          ) : (
            <div className="tw-flex tw-flex-wrap tw-justify-center">
              <Rate
                style={{ fontSize: "0.75rem" }}
                allowHalf
                disabled
                value={prod?.productRating[0]?.rating}
              />
              <small className="tw-text-gray-kwek400">(0 Reviews)</small>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CategoryProducts;
