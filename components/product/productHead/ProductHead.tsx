import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import styles from "./productHead.module.scss";
import {
  AddToCartPayload,
  AddToWishlistPayload,
  ProductType,
} from "@/interfaces/commonTypes";
import { v4 as uuid, v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { getIp } from "@/helpers";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import StarRatingComponent from "react-star-rating-component";

const SampleNextArrow = function (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: 80, height: 80, zIndex: 10, marginRight: 20 }}
      onClick={onClick}
    >
      <Image src="/svg/right-chevron2.svg" width="80" height="80" />
    </div>
  );
};

const SamplePrevArrow = function (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: 80, height: 80, zIndex: 10, marginLeft: 20 }}
      onClick={onClick}
    >
      <Image src="/svg/right-chevron1.svg" width="80" height="80" />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

type ProductHeadProps = {
  product: ProductType;
};

const ProductHead = function ({ product }: ProductHeadProps) {
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [numItem, incNumItem] = useState(1);
  console.log(product);

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

  // When increasing items, ensure it's not more than the quantity market has
  const increaseQuantity = useCallback(() => {
    incNumItem((prev) => prev + 1);
  }, [numItem]);

  const decreaseQuantity = useCallback(() => {
    incNumItem((prev) => (prev === 0 ? 0 : prev - 1));
  }, [numItem]);

  const avgRating = useMemo(() => {
    const totalRating = product.productRating.reduce((a, b) => a + b.rating, 0);
    const avg = totalRating / product.productRating.length;
    return avg;
  }, product.productRating);

  return (
    <div className={styles.product_container}>
      <div className={styles.product_carousel}>
        <Carousel arrows {...settings} autoplay dots={false}>
          {product?.image?.map((image) => (
            <div key={uuid()}>
              <Image
                className={styles.carousel_img}
                src={image.imageUrl}
                width="848"
                height="765"
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.carousel_sub}>
          {product?.image?.map((image) => (
            <div key={uuid()}>
              <button className={styles.img_sub}>
                <Image
                  className={styles.carousel_img}
                  src={image.imageUrl}
                  width="200"
                  height="200"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.product_desc}>
        <div className={styles.navigation}>
          <Image src="/svg/house.svg" width="20" height="20" />
          <i className="fas fa-angle-right" />
          <a>{product?.category?.name}</a>
          <i className="fas fa-angle-right" />
          <a>{product?.subcategory?.name}</a>
          <i className="fas fa-angle-right" />
          <a>{product.productTitle}</a>
        </div>
        <p className={styles.productTitle}>{product.productTitle}</p>
        <div className={styles.product_subDesc}>
          <p className={styles.product_seller}>
            Seller: <span>{product?.user?.sellerprofileSet[0]?.shopName}</span>
          </p>
          <p className={styles.product_Code}>Product Code: {product?.id}</p>
        </div>
        <p className={styles.product_price}>
          ₦{product.options[0].optionTotalPrice}
        </p>
        {!product.productRating.length ? (
          <div className={styles.box_productRating}>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={0}
              editing={false}
              emptyStarColor="#c4c4c4"
              starColor="#ffc107"
            />
          </div>
        ) : (
          <StarRatingComponent
            name="rate1"
            starCount={avgRating}
            value={0}
            editing={false}
            emptyStarColor="#c4c4c4"
            starColor="#ffc107"
          />
        )}
        <p className={styles.product_subtitle}>{product.shortDescription}</p>
        <div className={styles.product_options_color}>
          <p>COLOR:</p>
          <div className={`tw-p-3 tw-bg-${product.color.toLowerCase()}`}>
            {product.color}
          </div>
        </div>
        <div className={styles.product_option_size}>
          <p>SIZE:</p>
          <div className={styles.product_sizebox}>
            {product.options.map((option) => (
              <button key={v4()}>{option.size}</button>
            ))}
          </div>
        </div>
        <div className={styles.product_option_order}>
          <div className={styles.product_qty}>
            <p>QTY:</p>
            <div className={styles.product_addToCart}>
              <button onClick={() => decreaseQuantity()}>-</button>
              <p>{numItem}</p>
              <button onClick={() => increaseQuantity()}>+</button>
            </div>
          </div>
          <div className={styles.product_buttonbox}>
            <button
              onClick={() => addToCart(product.options[0].id)}
              className={styles.butnowButton}
            >
              <i className="fas fa-shopping-cart" />
              <p>Buy Now</p>
            </button>
            {user.token && (
              <button
                onClick={() => addToWishlist(product.id)}
                className={styles.product_saveButton}
              >
                <i className="far fa-heart" />
                <p>Save for Later</p>
              </button>
            )}
          </div>
        </div>
        <div className={styles.product_option_details}>
          <div className={styles.orderbox}>
            <Image src="/svg/pickup.svg" width="40" height="40" />
            <p>Pickup & Pay on Collection Available</p>
          </div>
          <div className={styles.debox}>
            <Image src="/svg/cod.svg" width="40" height="40" />
            <p>Pay on Delivery</p>
          </div>
        </div>
        <div className={styles.product_option_share}>
          <p>Share:</p>
          <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-1 tw-justify-center tw-items-center tw-gap-2 ">
            <button className="tw-bg-[#3b5998] tw-p-2">
              <i className="fab fa-facebook-f tw-mr-2" />
              Facebook
            </button>
            <button className="tw-bg-[#1da1f2 tw-p-2]">
              <i className="fab fa-twitter tw-mr-2" />
              Twitter
            </button>
            <button className="tw-bg-[#25d366] tw-p-2">
              <i className="fab fa-whatsapp tw-mr-2" />
              Whatsapp
            </button>
            <button>
              <i className="fas fa-link tw-mr-2" />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHead;
