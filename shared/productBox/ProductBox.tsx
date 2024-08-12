import { getIp } from "@/helpers";
import useClicksUpdate from "@/hooks/useClicksUpdate";
import useItemInCart from "@/hooks/useItemInCart";
import useItemInWishlist from "@/hooks/useItemInWishlist";
import { AddToCartPayload, AddToWishlistPayload, ProductType } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Rings } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductBox.module.scss";

export type ProductBoxProps = {
  id?: string;
  product?: ProductType;
};

const ProductBox = function ({ id, product: prod }: ProductBoxProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const { mutate } = useClicksUpdate();

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

  if (prod === undefined)
    return (
      <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
        <Rings width={60} height={60} color='#FC476E' />
      </div>
    );

  return (
    <div className='tw-w-full'>
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
        {Number(prod?.options[0]?.quantity) === 0 ? (
          <div className='absolute top-0 z-20 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg'>
            Out of Stock
          </div>
        ) : null}
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
        <Link
          href={`/product/${prod.id}?id=${prod.productTitle}`}
          className='tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 overlay tw-z-20 tw-bg-brown-kwek300 tw-cursor-pointer tw-block'
          onClick={e => {
            updateClicks(prod.id, user.token);
            e.stopPropagation();
          }}
        >
          <span className='tw-absolute tw-right-0 tw-flex tw-flex-col tw-mt-2 tw-mr-2 tw-z-10'>
            <i
              className={`fas fa-shopping-cart ${
                !checkIfItemInCart(prod?.options[0]?.id) ? "tw-bg-white-100" : "tw-bg-red-kwek100"
              } tw-rounded-full fa-0.5x fa-xs tw-mb-2 tw-text-gray-kwek100`}
              style={{ padding: "5px" }}
              onClick={() => {
                addToCart(prod?.options[0]?.id);
              }}
            />
            {user.token && (
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
        </Link>
      </div>

      <Link href={`/product/${prod.id}?id=${prod.productTitle}`} replace>
        <div className={styles.box_details}>
          <p className={styles.box_productCategory}>{prod?.productTitle}</p>

          <p className={styles.box_productPrice}>
            {!!prod.options[0]?.discountedPrice && (
              <span>
                ₦{""} {prod.options[0]?.discountedPrice}
              </span>
            )}
            <span
              className={
                prod.options[0]?.discountedPrice
                  ? styles.box_productDiscountPrice
                  : styles.box_productPrice
              }
            >
              ₦ {prod.options[0]?.price}
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
      </Link>
    </div>
  );
};

export default ProductBox;
