import { getIp } from "@/helpers";
import { AddToCartPayload, AddToWishlistPayload } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { Button } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getWishList, removeFromWishlist } from "../../store/wishlist/wishlist.actions";
import styles from "./list.module.scss";

const ListComponent = function ({
  listStyle,
  imgSrc,
  altText,
  itemName,
  itemPrice,
  itemDate,
  inStock,
  itemId,
  options,
  productId,
}) {
  console.log("🚀 ~~ imgSrc:", imgSrc, productId, options);

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      token: user?.token,
      quantity: 1,
    };
    addToCartFunc(payload, user?.token)(dispatch);
    getCartFunc(user?.token)(dispatch);
  }

  function addToWishlist(id: string) {
    const payload: AddToWishlistPayload = {
      productId: id,
      token: user.token,
    };
    removeFromWishlist(payload, user.token)(dispatch);
    getWishList(user.token)(dispatch);
  }

  return (
    <Link href={`/product/${productId}`} className=''>
      <div className={listStyle}>
        <div className={styles.first_grid}>
          <Image src={imgSrc} alt={altText} width={100} height={80} className={styles.img} />
        </div>
        <div className={styles.second_grid}>
          <p className={styles.item_name}>{itemName}</p>
          <p className={styles.item_price}>₦{itemPrice}</p>
          <p className={styles.date}>{itemDate}</p>
        </div>
        <div className={styles.third_grid}>
          <p className={inStock ? styles.stock : styles.stock_out}>
            {inStock ? "In Stock" : "Out Of Stock"}
          </p>
          {!!inStock && (
            <a className={styles.buy} onClick={() => addToCart(itemId)}>
              Buy Product
            </a>
          )}
        </div>
      </div>
      <div className={styles.list_grid_mobile}>
        <div className={styles.picture_grid}>
          {/* //TODO: fIX THIS LATER */}
          {/* <div className={cn(styles.heartImg, "tw-relative tw-z-0")}>
            <img
              src='/svg/heart-filled.svg'
              alt={altText}
              width={12}
              height={10.68}
              className={cn(styles.heart, "tw-w-3 tw-h-2 tw-relative")}
            />
          </div> */}
          <div className='relative'>
            <Image src={imgSrc} alt={altText} width={100} height={80} className={styles.img} />
          </div>
        </div>
        <div className={styles.content_box}>
          <p className={inStock ? styles.stock : styles.stock_out}>
            {inStock ? "In Stock" : "Out Of Stock"}
          </p>
          <p className={styles.item_name}>{itemName}</p>
          <p className={styles.item_price}>₦{itemPrice}</p>
          {/* {options[0]?.productRating?.length > 0 ? (
            <div className='tw-flex'>
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={options[0].productRating[0].rating}
                editing={false}
                emptyStarColor='#c4c4c4'
                starColor='#ffc107'
              />
              <small className='tw-text-gray-kwek400'>
                {console.log("🚀 ~~ options:", options)}({options[0].productRating[0].likes}{" "}
                Reviews)
              </small>
            </div>
          ) : (
            <div className={styles.box_productRating}>
              <StarRatingComponent name='rate2' starCount={5} value={0} editing={false} />
              <p>
                <small className='tw-text-gray-kwek400'>(0 Reviews)</small>
              </p>
            </div>
          )} */}

          <Button
            className='tw-border-red-kwek100 tw-text-red-kwek100 tw-mt-3 tw-mb-4 hover:!tw-border-red-kwek100 hover:!tw-text-red-kwek100'
            onClick={() => {
              addToWishlist(productId);
            }}
          >
            Remove Item
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ListComponent;
