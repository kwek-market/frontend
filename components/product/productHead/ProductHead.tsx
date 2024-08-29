import { getIp } from "@/helpers";
import useAvgRating from "@/hooks/useAvgRating";
import useItemInWishlist from "@/hooks/useItemInWishlist";
import { AddToCartPayload, AddToWishlistPayload, ProductType } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { createWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Button, Carousel, Modal, Radio, message } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { v4 } from "uuid";
import { separateWords } from "../../../helpers/helper";
import { useDeleteProduct } from "../../../store/product/product.action";
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

  const user = useSelector((state: RootState) => state.user);
  const wishlists = useSelector((state: RootState) => state.wishlist?.wishlists);

  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct(user.token);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();

  const [numItem, incNumItem] = useState(1);

  const [selectedColor, setSelectedColor] = useState<string>("");

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      quantity: numItem,
      token: user.token,
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

  const handleDeleteProduct = () => {
    deleteProduct({ id: product.id });
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
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
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89PDhNQAIzQN82oRX+AAAAABJRU5ErkJggg=='
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
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89PDhNQAIzQN82oRX+AAAAABJRU5ErkJggg=='
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
          <a>{product?.category?.name}</a>
          <i className='fas fa-angle-right' />
          <a>{product?.subcategory?.name}</a>
          <i className='fas fa-angle-right' />
          <a>{product.productTitle}</a>
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
          <Radio.Group
            className={`${styles.product_options_color} tw-flex tw-space-x-4 tw-items-center tw-border-r-2`}
            defaultValue='a'
            buttonStyle='solid'
          >
            {separateWords(product.color).map((color, index) => (
              <Radio.Button
                key={v4()}
                style={{
                  backgroundColor: `${color.toLowerCase()}`,
                  opacity: selectedColor === color ? 0.8 : 1,
                  border: selectedColor === color ? `2px solid magenta` : "0px",
                }}
                onClick={e => setSelectedColor(color)}
                className='tw-p-3 tw-w-5 tw-h-5 tw-border-4'
                value='a'
              ></Radio.Button>
            ))}
          </Radio.Group>
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
            <Image alt='pickup' src='/svg/pickup.svg' width='40' height='40' />
            <p>Pickup & Pay on Collection Available</p>
          </div>
          <div className={styles.debox}>
            <Image alt='delivery' src='/svg/cod.svg' width='40' height='40' />
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

        {user?.user?.id === product?.user?.id ? (
          <div className='tw-flex tw-mt-5 tw-space-x-4'>
            <Button
              size='large'
              className='tw-text-gray-50 tw-bg-yellow-500 hover:tw-bg-yellow-600 hover:tw-text-gray-50'
              icon={<PencilAltIcon className='tw-w-7 tw-h-7' />}
              onClick={() => router.push(`/seller/edit-product/${product.id}`)}
            >
              Edit product
            </Button>

            <>
              <Button
                size='large'
                className='tw-text-gray-50 tw-bg-red-600 hover:tw-bg-red-700 hover:tw-text-gray-50'
                icon={<TrashIcon className='tw-w-7 tw-h-7' />}
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              >
                Delete product
              </Button>
              <Modal
                title='Are you sure you want to delete this product?'
                open={isDeleteModalOpen}
                onOk={handleDeleteProduct}
                okText='Yes, Delete'
                confirmLoading={isDeleting}
                onCancel={handleCancel}
                classNames={{ header: "!tw-text-2xl" }}
                className='!tw-text-2xl'
                okButtonProps={{
                  size: "large",
                  type: "primary",
                  className:
                    "tw-text-white-100 tw-bg-red-600 hover:tw-bg-red-700 hover:tw-text-gray-50",
                }}
                cancelButtonProps={{
                  size: "large",
                  type: "text",
                  className: "tw-bg-transparent hover:tw-bg-transparent border-2 ",
                }}
              >
                <p className='tw-text-sm tw-text-gray-800'>
                  By Deleting this product, you will lose all the information about it. and you will
                  not be able to retrieve it.
                </p>
              </Modal>
            </>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductHead;
