import { updateClicks } from "@/helpers";
import useClicksUpdate from "@/hooks/useClicksUpdate";
import { ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const token = useSelector((state: RootState) => state.user?.token);
  const { mutate } = useClicksUpdate();
  return (
    <Link
      href={`/product/${product.id}?id=${product.productTitle}`}
      onClick={() => updateClicks(product.id, token, mutate)}
    >
      <section className='tw-flex tw-flex-col'>
        <div className='tw-rounded-md'>
          <Image
            src={product.image[0].imageUrl}
            alt={product.productTitle}
            width='350'
            height='300'
          />
        </div>
        <div className='tw-text-center'>
          <p className='tw-text-gray-kwek900 tw-text-base tw-mb-0'>{product.productTitle}</p>
          <Fragment>
            {product.options.length > 0 ? (
              product.options[0].discountedPrice !== "" ? (
                <Fragment>
                  <span className='tw-font-semibold tw-text-gray-kwek200'>
                    ₦{product.options[0].discountedPrice}
                  </span>{" "}
                  <span className='tw-text-gray-review tw-line-through tw-font-medium tw-ml-2'>
                    ₦{product.options[0].price}
                  </span>
                </Fragment>
              ) : (
                <span className='tw-font-semibold tw-text-gray-kwek200'>
                  ₦{product.options[0].price}
                </span>
              )
            ) : (
              ""
            )}
          </Fragment>
          <Fragment>
            {product.productRating.length > 0 ? (
              <div className='tw-flex tw-justify-center tw-items-center'>
                <StarRatingComponent
                  name='rate1'
                  starCount={5}
                  value={product.productRating[0].rating}
                  editing={false}
                  emptyStarColor='#c4c4c4'
                  starColor='#ffc107'
                />{" "}
                <small className='tw-text-gray-kwek400 tw-ml-2'>
                  ({product.productRating?.length || 0} reviews)
                </small>
              </div>
            ) : (
              <div className='tw-flex tw-justify-center tw-items-center'>
                <StarRatingComponent name='rate2' starCount={5} value={0} editing={false} />{" "}
                <small className='tw-text-gray-kwek400 tw-ml-2'>(0 Reviews)</small>
              </div>
            )}
          </Fragment>
        </div>
      </section>
    </Link>
  );
}
