import { getIp } from "@/helpers";
import { AddToCartPayload } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
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
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

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

  return (
    <Link href={`/product/${productId}`}>
      <a className=''>
        <div className={listStyle}>
          <div className={styles.first_grid}>
            <Image src={imgSrc} alt={altText} width='100' height='80' className={styles.img} />
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
            <div className={styles.heartImg}>
              <Image
                src='/svg/heart-filled.svg'
                alt={altText}
                width={12}
                height={10.68}
                className={styles.heart}
                // layout="responsive"
              />
            </div>
            <Image
              src={imgSrc}
              alt={altText}
              width='100%'
              height='100%'
              layout='responsive'
              className={styles.img}
            />
          </div>
          <div className={styles.content_box}>
            <p className={inStock ? styles.stock : styles.stock_out}>
              {inStock ? "In Stock" : "Out Of Stock"}
            </p>
            <p className={styles.item_name}>{itemName}</p>
            <p className={styles.item_price}>₦{itemPrice}</p>
            {options[0]?.productRating?.length > 0 ? (
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
                  ({options[0].productRating[0].likes} Reviews)
                </small>
              </div>
            ) : (
              <div className={styles.box_productRating}>
                <StarRatingComponent name='rate2' starCount={5} value={0} editing={false} />
                <p>
                  <small className='tw-text-gray-kwek400'>(0 Reviews)</small>
                </p>
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ListComponent;
