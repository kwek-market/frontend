import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import styles from "./productHead.module.scss";
import {
  AddToCartPayload,
  AddToWishlistPayload,
  ProductType,
} from "@/interfaces/commonTypes";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { getIp } from "@/helpers";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { createWishlist } from "@/store/wishlist/wishlist.actions";

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
    // console.log(id);
    const payload: AddToWishlistPayload = {
      productId: id,
      token: user.token,
    };
    dispatch(createWishlist(payload, user.token));
  }

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
        <p className={styles.product_price}>₦25.00</p>
        <div className={styles.box_productRating}>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <small>(6 Reviews)</small>
        </div>
        <p className={styles.product_subtitle}>{product.shortDescription}</p>
        <div className={styles.product_options_color}>
          <p>COLOR:</p>
          <div
            className={`tw-p-3 tw-bg-[yellow] tw-bg-[${product.color.toLowerCase()}]`}
          >
            {product.color}
          </div>
        </div>
        <div className={styles.product_option_size}>
          <p>SIZE:</p>
          <div className={styles.product_sizebox}>
            <button>40</button>
            <button>41</button>
            <button>43</button>
            <button>44</button>
            <button>45</button>
          </div>
        </div>
        <div className={styles.product_option_order}>
          <div className={styles.product_qty}>
            <p>QTY:</p>
            <div className={styles.product_addToCart}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
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
            <button
              onClick={() => addToWishlist(product.id)}
              className={styles.product_saveButton}
            >
              <i className="far fa-heart" />
              <p>Save for Later</p>
            </button>
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
          <div className={styles.socialbox}>
            <a>
              <i className="fab fa-facebook-f" />
              <p>Facebook</p>
            </a>
            <a>
              <i className="fab fa-twitter" />
              <p>Twitter</p>
            </a>
            <a>
              <i className="fab fa-whatsapp" />
              <p>Whatsapp</p>
            </a>
            <a>
              <i className="fas fa-link" />
              <p>Copy Link</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHead;
