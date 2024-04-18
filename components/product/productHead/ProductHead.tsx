import { getIp } from "@/helpers";
import useAvgRating from "@/hooks/useAvgRating";
import useItemInWishlist from "@/hooks/useItemInWishlist";
import { AddToCartPayload, AddToWishlistPayload, ProductType } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import { Carousel, message } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { v4 } from "uuid";
import styles from "./productHead.module.scss";

const SampleNextArrow = function (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: 80, height: 80, zIndex: 10, marginRight: 20 }}
      onClick={onClick}
    >
      <Image src='/svg/right-chevron2.svg' width='80' height='80' />
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
      <Image src='/svg/right-chevron1.svg' width='80' height='80' />
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
  const router = useRouter();

  const {
    user,
    wishlist: { wishlists },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [numItem, incNumItem] = useState(1);

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      quantity: numItem,
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
    incNumItem(prev => prev + 1);
  }, [numItem]);

  const decreaseQuantity = useCallback(() => {
    incNumItem(prev => (prev === 0 ? 0 : prev - 1));
  }, [numItem]);

  function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    message.success("Link copied to clipboard");
  }

  function shareOnWhatsapp() {
    window.open(`https://web.whatsapp.com://send?text=${window.location.href}`);
  }

  const checkIfItemInWishlist = useItemInWishlist(product, wishlists);

  const carouselRef = React.useRef<CarouselRef>();

  const handleCarouselChange = (number: number) => {
    carouselRef?.current?.goTo(number);
  };

  return (
    <div className={styles.product_container}>
      <div className={styles.product_carousel}>
        <Carousel arrows {...settings} autoplay dots={true} ref={carouselRef}>
          {product?.image?.map((image, idx) => (
            <div key={idx}>
              <Image
                className={styles.carousel_img}
                src={image.imageUrl}
                width='848'
                height='765'
                placeholder='blur'
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.carousel_sub}>
          {product?.image?.map((image, idx) => (
            <div key={idx} onClick={() => handleCarouselChange(idx)}>
              <button className={styles.img_sub}>
                <Image
                  className={styles.carousel_img}
                  src={image.imageUrl}
                  width='200'
                  height='200'
                  placeholder='blur'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.product_desc}>
        <div className={styles.navigation}>
          <Image src='/svg/house.svg' width='20' height='20' />
          <i className='fas fa-angle-right' />
          <span>{product?.category?.name}</span>
          <i className='fas fa-angle-right' />
          <span>{product?.subcategory?.name}</span>
          <i className='fas fa-angle-right' />
          <span>{product.productTitle}</span>
        </div>
        <p className={styles.productTitle}>{product.productTitle}</p>
        <div className={styles.product_subDesc}>
          <p className={styles.product_seller}>
            Seller: <span>{product?.user?.sellerProfile[0]?.shopName}</span>
          </p>
          <p className={styles.product_Code}>Product Code: {product?.id}</p>
        </div>
        <p className={styles.product_price}>₦{product.options[0]?.price}</p>
        {!product.productRating.length ? (
          <div className={styles.box_productRating}>
            <StarRatingComponent
              name='rate1'
              starCount={5}
              value={0}
              editing={false}
              emptyStarColor='#c4c4c4'
              starColor='#ffc107'
            />
          </div>
        ) : (
          <StarRatingComponent
            name='rate1'
            starCount={5}
            value={useAvgRating(product)}
            editing={false}
            emptyStarColor='#c4c4c4'
            starColor='#ffc107'
          />
        )}
        <p className={styles.product_subtitle}>{product.shortDescription}</p>
        <div className={styles.product_options_color}>
          <p>COLOR:</p>
          <div
            style={{ backgroundColor: `${product.color.toLowerCase()}` }}
            className='tw-p-3'
          ></div>
        </div>
        <div className={styles.product_option_size}>
          <p>SIZE:</p>
          <div className={styles.product_sizebox}>
            {product.options.map(option => (
              <button key={v4()}>{option.size}</button>
            ))}
          </div>
        </div>
        <div className=''>
          <p className='tw-capitalize tw-textbase'>
            <span className='tw-font-medium'>Warranty</span>: {product.warranty}
          </p>
          <p className='tw-capitalize tw-textbase'>
            <span className='tw-font-medium'>Return policy</span>: {product.returnPolicy}
          </p>
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
              <i className='fas fa-shopping-cart' />
              <p>Buy Now</p>
            </button>
            {user.token && (
              <Fragment>
                {!checkIfItemInWishlist(product.id) ? (
                  <button
                    onClick={() => addToWishlist(product.id)}
                    className={styles.product_saveButton}
                  >
                    <i className='far fa-heart' />
                    <p>Save for Later</p>
                  </button>
                ) : (
                  <button className='tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-py-3 tw-px-10'>
                    <i className='fas fa-heart tw-mr-2 tw-text-white-100' />
                    Saved
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
        <div className={styles.product_option_details}>
          <div className={styles.orderbox}>
            <Image src='/svg/pickup.svg' width='40' height='40' />
            <p>Pickup & Pay on Collection Available</p>
          </div>
          <div className={styles.debox}>
            <Image src='/svg/cod.svg' width='40' height='40' />
            <p>Pay on Delivery</p>
          </div>
        </div>
        <div className={styles.product_option_share}>
          <p>Share:</p>
          <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-justify-center tw-items-center tw-gap-2 '>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://kwekmarket.com/product/${router.query.product}`}
              target='_blank noreferer noopener'
              className='tw-bg-[#3b5998] tw-text-white-100 tw-rounded-md tw-p-2'
            >
              <i className='fab fa-facebook-f tw-mr-2' />
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://kwekmarket.com/product/${router.query.product}`}
              target='_blank noreferer noopener'
              className='tw-bg-[#1da1f2] tw-text-white-100 tw-rounded-md tw-p-2'
            >
              <i className='fab fa-twitter tw-mr-2' />
              Twitter
            </a>
            <button
              className='tw-bg-[#25d366] tw-text-white-100 tw-rounded-md tw-p-2'
              onClick={() => shareOnWhatsapp()}
            >
              <i className='fab fa-whatsapp tw-mr-2' />
              Whatsapp
            </button>
            <button
              className='tw-border tw-border-gray-kwek100 tw-text-gray-kwek100 tw-rounded-md tw-p-2'
              onClick={() => copyLink()}
            >
              <i className='fas fa-link tw-mr-2 ' />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHead;
