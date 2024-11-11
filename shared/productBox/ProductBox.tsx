import { getIp } from "@/helpers";
import useClicksUpdate from "@/hooks/useClicksUpdate";
import useItemInCart from "@/hooks/useItemInCart";
import useItemInWishlist from "@/hooks/useItemInWishlist";
import { AddToCartPayload, AddToWishlistPayload, ProductType } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import { Badge, Modal, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Rings } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import ProductVariant from "../../components/product/ProductVariant/ProductVariant";
import { getProductQuantity } from "../../helpers/helper";
import styles from "./ProductBox.module.scss";

export type ProductBoxProps = {
  id?: string;
  product?: ProductType;
};

const ProductBox = function ({ id, product: prod }: ProductBoxProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const { mutate } = useClicksUpdate();
  const [isProductVariantModalOpen, setIsProductVariantModalOpen] = useState(false);

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      token: user.token,
      quantity: 1,
    };
    addToCartFunc(payload, user.token)(dispatch);
    getCartFunc(user.token)(dispatch);
  }

  function addToWishlist(id: string) {
    const payload: AddToWishlistPayload = {
      productId: id,
      token: user.token,
    };
    createWishlist(payload, user.token)(dispatch);
    getWishList(user.token)(dispatch);
  }

  const checkIfItemInCart = useItemInCart(prod, cart.cart);

  const checkIfItemInWishlist = useItemInWishlist(prod, wishlist.wishlists);

  function updateClicks(productId: string, token: string) {
    mutate({ productId, token });
  }

  console.log("getProductQuantity(prod?.options)", getProductQuantity(prod?.options));

  if (prod === undefined)
    return (
      <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
        <Rings width={60} height={60} color='#FC476E' />
      </div>
    );

  return (
    <div className='tw-w-full'>
      {Number(getProductQuantity(prod?.options)) === 0 ? (
        <Badge.Ribbon
          color='orange'
          className='tw-absolute tw-top-0 tw-z-10'
          text='Out of stock'
        ></Badge.Ribbon>
      ) : null}

      <div className='tw-relative tw-w-full'>
        <div className='tw-relative tw-w-full tw-h-[150px] lg:tw-h-[284px]'>
          <Image
            src={prod?.image[0]?.imageUrl}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89PDhNQAIzQN82oRX+AAAAABJRU5ErkJggg=='
            // width="329"
            // height="284"
            layout='fill'
            alt='product'
            quality={50}
            className=' tw-object-cover'
          />
        </div>
        {/* <span
          id="cart-wishlist"
          className="tw-absolute top-75 tw-right-0 tw-mr-3 tw-flex tw-flex-row hover:tw-hidden"
        >
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
        </span> */}{" "}
        <div
          className='tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 overlay tw-z-20 tw-bg-brown-kwek300 tw-cursor-pointer tw-block'
          onClick={e => {
            updateClicks(prod.id, user.token);
            router.push(`/product/${prod.id}?id=${prod.productTitle}`);
          }}
        >
          <span className='tw-absolute tw-right-0 tw-flex tw-flex-col tw-mt-2 tw-mr-2 tw-z-10'>
            {getProductQuantity(prod?.options) && (
              <i
                className={`fas fa-shopping-cart ${
                  !checkIfItemInCart(prod?.options[0]?.id) ? "tw-bg-white-100" : "tw-bg-red-kwek100"
                } tw-rounded-full fa-0.5x fa-xs tw-mb-2 tw-text-gray-kwek100`}
                style={{ padding: "5px" }}
                onClick={e => {
                  e.stopPropagation();
                  if (prod?.options.length > 1) {
                    setIsProductVariantModalOpen(true);
                    return;
                  }
                  addToCart(prod?.options[0]?.id);
                }}
              />
            )}
            {user.token && getProductQuantity(prod?.options) && (
              <i
                className={`fas fa-heart tw-p-1 ${
                  !checkIfItemInWishlist(id) ? "tw-bg-white-100" : "tw-bg-gray-kwek700"
                } tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs`}
                style={{ padding: "5px" }}
                onClick={() => addToWishlist(id)}
              />
            )}
          </span>
          <span className='tw-bg-red-kwek200 bg-red-200 tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-p-2 tw-text-center tw-text-white-100 tw-uppercase tw-opacity-100'>
            details
          </span>
        </div>
      </div>

      <div
        onClick={() => {
          router.push(`/product/${prod.id}?id=${prod.productTitle}`);
        }}
      >
        <div className={styles.box_details}>
          <p className={styles.box_productCategory}>{prod?.productTitle}</p>

          <p className={styles.box_productPrice}>
            {!!prod?.options[0]?.discountedPrice && (
              <span>
                ₦{""} {prod?.options[0]?.discountedPrice}
              </span>
            )}
            <span
              className={
                prod?.options[0]?.discountedPrice
                  ? styles.box_productDiscountPrice
                  : styles.box_productPrice
              }
            >
              ₦ {prod?.options[0]?.price}
            </span>
          </p>

          {prod.productRating.length > 0 ? (
            <div className='tw-flex tw-flex-wrap tw-justify-center'>
              <Rate
                style={{ fontSize: "0.75rem" }}
                allowHalf
                disabled
                value={prod.productRating[0]?.rating}
              />
              <small className='tw-text-gray-kwek400'>
                ({prod.productRating[0].likes} reviews)
              </small>
            </div>
          ) : (
            <div className='tw-flex tw-flex-wrap tw-justify-center'>
              <Rate style={{ fontSize: "0.75rem" }} allowHalf disabled value={0} />
              <small className='tw-text-gray-kwek400'>(0 Reviews)</small>
            </div>
          )}
        </div>
      </div>

      {isProductVariantModalOpen && (
        <Modal
          title='Please Select a product Variation'
          open={isProductVariantModalOpen}
          okButtonProps={{
            className: "tw-w-full tw-bg-red-kwek100 hover:!tw-bg-red-kwek100",
            size: "large",
          }}
          cancelButtonProps={{
            className:
              "tw-w-full tw-border-red-kwek100 tw-text-red-kwek100  hover:!tw-text-red-kwek100/50 hover:!tw-border-red-kwek100/50",
            size: "large",
          }}
          okText='View Cart'
          cancelText='Continue'
          classNames={{
            footer: "tw-flex",
          }}
          onOk={() => {
            router.push("/cart");
          }}
          onCancel={() => setIsProductVariantModalOpen(false)}
        >
          <ProductVariant product={prod} />
        </Modal>
      )}
    </div>
  );
};

export default ProductBox;
