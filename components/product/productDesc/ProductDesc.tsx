import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { message, Tabs } from "antd";
import { FaStar } from "react-icons/fa";
import styles from "./productDesc.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, ReviewType } from "@/interfaces/commonTypes";
import Link from "next/link";
import StarRatingComponent from "react-star-rating-component";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import { reviewProduct } from "@/store/review/review.action";
import { RootState } from "@/store/rootReducer";
import { v4 as uuid } from "uuid";
import useAvgRating from "@/hooks/useAvgRating";

dayjs.extend(LocalizedFormat);

const { TabPane } = Tabs;

type ProductDescProps = {
  product: ProductType;
};

const ProductDesc = function ({ product }: ProductDescProps) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [reviewType, setReviewType] = useState<ReviewType>({
    comment: "",
    rating: 0,
    email: "",
    name: "",
    token: user.token,
    productId: product.id,
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { comment, token, productId } = reviewType;
    if (token === "") return message.error("Login to enter comment");
    dispatch(
      reviewProduct(
        {
          rating: rating,
          token,
          productId,
        },
        user.token
      )
    );
  }

  return (
    <div className={styles.desc_container}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Description" key="1">
          <div className={styles.tab_content}>
            <p className={styles.descP}>{product.shortDescription}</p>
            {/* <div className={styles.checked}>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className={styles.cheaked_content}>
                <i className="fas fa-check" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <p className={styles.descP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p> */}
          </div>
        </TabPane>
        <TabPane tab="Additional" key="2">
          <div className={styles.tab_content}>
            <div className={styles.add_add}>
              <p>
                SKU: <span>{product.id}</span>
              </p>
              <p>
                Color: <span>{product.color}</span>
              </p>
              <p>
                Size:{" "}
                <span>{product.options.map((item) => `${item.size}, `)}</span>
              </p>
              <p>
                Weight (kg): <span>{product.productWeight}</span>
              </p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Shipping & Returns" key="3">
          <div className={styles.tab_content}>
            <div className={styles.sr_content}>
              <div className={styles.contentbox}>
                <div className={styles.img}>
                  <Image src="/svg/dev.svg" width="40" height="40" />
                </div>
                <div className={styles.info}>
                  <p className={styles.head}>Delivery</p>
                  <p className={styles.sub}>
                    Estimated delivery time: 1 - 9 days
                  </p>
                </div>
              </div>
              <div className={styles.contentbox}>
                <div className={styles.img}>
                  <Image
                    src="/svg/returnsvg.svg"
                    width="40"
                    height="40"
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.head}>7 Days Return Guarantee</p>
                  <p className={styles.sub}>
                    For more information on the return shipping options, go to{" "}
                    <Link href="/returnPolicy">
                      <a>Kwek return Policy</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Reviews" key="4">
          <div className={styles.tab_content}>
            <div className={styles.reviewContent}>
              <div className={styles.review_content}>
                <p className={styles.rating_head}>Average Rating:</p>
                <StarRatingComponent
                  name="avg-rating"
                  starCount={5}
                  value={useAvgRating(product)}
                  editing={false}
                />
              </div>
              <div className={styles.review_content}>
                {product.productRating.map((item) => (
                  <div className={styles.reviewer}>
                    <Image
                      src="/images/store.png"
                      width="80"
                      height="80"
                      className={styles.img}
                    />
                    <div className={styles.reviewer_content}>
                      <div className={styles.user}>
                        <div className={styles.infouser}>
                          <p className={styles.name}>{item.user.username}</p>
                          <p className={styles.date}>
                            {dayjs(item.ratedAt).format("MMMM D, YYYY h:mm A")}
                          </p>
                        </div>
                        <div className={styles.box_productRating}>
                          <StarRatingComponent
                            name="avg-rating"
                            starCount={5}
                            value={item.rating}
                            editing={false}
                          />
                        </div>
                      </div>
                      <p className={styles.reviewer_review}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.formbox}>
                <div className={styles.form_content}>
                  <p className={styles.form_head}>Add a Review</p>
                  <p className={styles.form_sub}>
                    Your email address will not be published, Required fields
                    are marked *
                  </p>
                </div>
                <form className={styles.form} onSubmit={(e) => submit(e)}>
                  <div className={styles.ratebox}>
                    <p>Your Rating:</p>
                    <div className={styles.box_productRating}>
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                          <label key={uuid()}>
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                              className={styles.stars}
                              color={
                                ratingValue <= (hover || rating)
                                  ? "#ffc107"
                                  : "#bfa5a3"
                              }
                              onMouseOver={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.inputs}>
                    <textarea
                      onChange={(e) =>
                        setReviewType({
                          ...reviewType,
                          comment: e.target.value,
                        })
                      }
                      id="comment"
                      placeholder="comment *"
                      name="Comment"
                      required
                      value={reviewType.comment}
                    />
                    <div className={styles.input_grid}>
                      <div>
                        <input
                          onChange={(e) =>
                            setReviewType({
                              ...reviewType,
                              name: e.target.value,
                            })
                          }
                          id="name"
                          placeholder="name *"
                          name="Name"
                          type="text"
                          required
                          value={reviewType.name}
                        />
                      </div>
                      <div>
                        <input
                          onChange={(e) =>
                            setReviewType({
                              ...reviewType,
                              email: e.target.value,
                            })
                          }
                          id="email"
                          placeholder="email *"
                          name="Email"
                          type="email"
                          required
                          value={reviewType.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductDesc;
