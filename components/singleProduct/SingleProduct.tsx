import useAvgRating from "@/hooks/useAvgRating";
import { ProductType } from "@/interfaces/commonTypes";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { v4 } from "uuid";
import { separateWords } from "../../helpers/helper";
import styles from "./SingleProduct.module.scss";

type SingleProductProps = {
  product: ProductType;
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleProduct = function ({ product, setShowProduct }: SingleProductProps) {
  const router = useRouter();

  function promote(id: string) {
    router.push(`/seller/promote-product/${id}`);
  }

  function edit() {
    router.push("#");
  }

  function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    message.success("Link copied to clipboard");
  }

  function shareOnWhatsapp() {
    window.open(`https://web.whatsapp.com://send?text=${window.location.href}`);
  }

  return (
    <div className={styles.product}>
      <div className={styles.holder}>
        <div className={styles.key}>
          <i
            className='fas fa-arrow-left tw-cursor-pointer'
            onClick={() => setShowProduct(false)}
          />
        </div>
        <div className={styles.greenly}>
          <button
            className='tw-bg-green-success tw-text-white-100 tw-rounded-sm tw-py-2 tw-px-3'
            onClick={() => promote(product.id)}
          >
            Promote
          </button>
          <button
            className='tw-border-2 tw-border-gray-kwek900 tw-rounded-sm tw-py-2 tw-px-3'
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
              width='722'
              height='693.41'
              className={styles.img}
            />
          </div>
          <div className={styles.masky}>
            {product.image.map(image => (
              <Image
                key={v4()}
                src={image.imageUrl}
                width='163.22'
                height='156.54'
                className={styles.img}
              />
            ))}
          </div>
        </div>

        <div className={styles.element}>
          <div>
            <h4>{product.productTitle}</h4>
            <div className={styles.review}>
              <div className='tw-flex-1'>
                <strong>Product Code:</strong> {product.id}
              </div>

              <div className={styles.revs}>
                <StarRatingComponent
                  name='seller-product'
                  starCount={5}
                  value={useAvgRating(product)}
                  editing={false}
                  emptyStarColor='#c4c4c4'
                  starColor='#ffc107'
                />
                <p className={styles.six}>({product?.productRating?.length} Reviews)</p>
              </div>
            </div>
          </div>
          <h2>₦{product?.options[0]?.price}</h2>
          <p className={styles.name}>{product.shortDescription}</p>

          <div className={styles.colors}>
            <p>COLOR: </p>
            {separateWords(product.color).map(color => (
              <div key={v4()} style={{ backgroundColor: color }} className={styles.paint}>
                <div style={{ backgroundColor: color }} className='tw-w-[32px] tw-h-[32px]'></div>
              </div>
            ))}
          </div>
          <div className={styles.size}>
            <p>SIZE:</p>
            <div className={styles.fort}>
              {product.options.map(option => (
                <div key={v4()} className={styles.forty}>
                  {option.size}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.share}>
            <p className={styles.shareon}>Share on:</p>
            <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-1 tw-justify-center tw-items-center tw-gap-2 tw-ml-2'>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target='_blank noreferer noopener'
                className='tw-bg-[#3b5998] tw-text-white-100 tw-rounded-md tw-p-2 tw-truncate'
              >
                <i className='fab fa-facebook-f tw-mr-2' />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target='_blank noreferer noopener'
                className='tw-bg-[#1da1f2] tw-text-white-100 tw-rounded-md tw-p-2'
              >
                <i className='fab fa-twitter tw-mr-2' />
                Twitter
              </a>
              <button
                className='tw-bg-[#25d366] tw-text-white-100 tw-rounded-md tw-p-2 tw-truncate'
                onClick={() => shareOnWhatsapp()}
              >
                <i className='fab fa-whatsapp tw-mr-2' />
                Whatsapp
              </button>
              <button
                className='tw-border tw-border-gray-kwek100 tw-text-gray-kwek100 tw-rounded-md tw-p-2 tw-truncate'
                onClick={() => copyLink()}
              >
                <i className='fas fa-link tw-mr-2 ' />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
