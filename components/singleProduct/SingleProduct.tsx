import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SingleProduct.module.scss";
import { useRouter } from "next/router";
import StarRatingComponent from "react-star-rating-component";
import { v4 } from "uuid";

const SingleProduct = function ({ product, setShowProduct }) {
  const router = useRouter();

  function promote(id: string) {
    router.push(`/seller/promote-product/${id}`);
  }

  function edit() {
    router.push("#");
  }

  return (
    <div className={styles.product}>
      <div className={styles.holder}>
        <div className={styles.key}>
          <i
            className="fas fa-arrow-left tw-cursor-pointer"
            onClick={() => setShowProduct(false)}
          />
        </div>
        <div className={styles.greenly}>
          <button
            className="tw-bg-green-success tw-text-white-100 tw-rounded-sm tw-py-2 tw-px-3"
            onClick={() => promote(product.id)}
          >
            Promote
          </button>
          <button
            className="tw-border-2 tw-border-gray-kwek900 tw-rounded-sm tw-py-2 tw-px-3"
            onClick={() => edit()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={styles.single}>
        <div className={styles.images}>
          <div className={styles.mask}>
            <Image
              src={product.image[0].imageUrl}
              width="722"
              height="693.41"
              className={styles.img}
            />
          </div>
          <div className={styles.masky}>
            {product.image.map((image) => (
              <Image
                key={v4()}
                src={image.imageUrl}
                width="163.22"
                height="156.54"
                className={styles.img}
              />
            ))}
          </div>
        </div>

        <div className={styles.element}>
          <div>
            <h4>{product.productTitle}</h4>
            <div className={styles.review}>
              <div className="tw-flex-1">
                <strong>Product Code:</strong> {product.id}
              </div>

              <div className={styles.revs}>
                <StarRatingComponent
                  name="seller-product"
                  starCount={5}
                  value={product?.productRating[0]?.rating}
                  editing={false}
                  emptyStarColor="#c4c4c4"
                  starColor="#ffc107"
                />
                <p className={styles.six}>
                  ({product?.productRating?.likes} Reviews)
                </p>
              </div>
            </div>
          </div>
          <h2>₦{product.options[0].price}</h2>
          <p className={styles.name}>{product.shortDescription}</p>

          <div className={styles.colors}>
            <p>COLOR: </p>
            <div className={styles.paint}>
              <div className="tw-w=[32px] tw-h=[32px]">{product.color}</div>
            </div>
          </div>
          <div className={styles.size}>
            <p>SIZE:</p>
            <div className={styles.fort}>
              {product.options.map((option) => (
                <div key={v4()} className={styles.forty}>
                  {option.size}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.share}>
            <p className={styles.shareon}>Share on:</p>
            <div>
              <div className={styles.book}>
                <div className={styles.facebook}>
                  <Link href="/">
                    <a className={styles.link}>
                      <Image
                        src="/images/facebooktime.png"
                        width="121"
                        height="42"
                        className={styles.facebook}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.twitter}>
                  <Link href="/">
                    <a className={styles.link}>
                      <Image
                        src="/images/tweet.png"
                        width="121"
                        height="42"
                        className={styles.twitter}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.whatsapp}>
                  <Link href="/">
                    <a className={styles.link}>
                      <Image
                        src="/images/whatsapp.png"
                        width="121"
                        height="42"
                        className={styles.whatsapp}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.copy}>
                  <Link href="/">
                    <a className={styles.link}>
                      <Image
                        src="/images/copy.png"
                        width="121"
                        height="42"
                        className={styles.copy}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
