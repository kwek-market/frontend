import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromoteProduct.module.scss";
import useProduct from "@/hooks/useProduct";
import Load from "../Loader/Loader";
import ErrorInfo from "../Loader/ErrorInfo";
import StarRatingComponent from "react-star-rating-component";

const PromoteProduct = function ({ id }) {
  const payload = {
    id: id as string,
  };
  const { status, data, error } = useProduct(payload);
  const [promoteData, setPromoteData] = useState({
    range: 4590,
    days: 0,
    endDate: new Date().toISOString(),
  });
  return (
    <div className={styles.promote}>
      <div className="tw-flex-[2]">
        <form className={styles.form}>
          <div className={styles.board}>
            <h4 className={styles.duration}>Duration</h4>
            <div className={styles.key}>
              <Image
                src="/images/board.png"
                width="20"
                height="20"
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.parallel}>
            <div className={styles.day}>
              <p className={styles.count}>Days</p>
              <input
                placeholder="Day"
                type={"number"}
                value={promoteData.days}
                onChange={(e) =>
                  setPromoteData({
                    ...promoteData,
                    days: e.target.valueAsNumber,
                  })
                }
                className={styles.number}
              ></input>
            </div>
            <div className={styles.date}>
              <p className={styles.count}>End date</p>
              <input
                type={"date"}
                value={promoteData.endDate}
                onChange={(e) =>
                  setPromoteData({ ...promoteData, endDate: e.target.value })
                }
                className={styles.number}
              ></input>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.boarder}>
            <h4>Total Budget</h4>
            <div className={styles.key}>
              <Image
                src="/images/board.png"
                width="20"
                height="20"
                className={styles.img}
              />
            </div>
          </div>
          <p className={styles.estimate}>
            Estimated 3k - 9.2k people reached daily
          </p>
          <div className={styles.span}>
            <p className={styles.spaner}>NGN</p>
            <h2>{Number(promoteData.range).toLocaleString()}.00</h2>
          </div>

          <div>
            <input
              type="range"
              min={0}
              max={100000}
              value={promoteData.range}
              onChange={(e) =>
                setPromoteData({
                  ...promoteData,
                  range: e.target.valueAsNumber,
                })
              }
              className={styles.range}
            ></input>
          </div>
        </form>
        <div className={styles.method}>
          <h4 className={styles.pay}>Payment Method</h4>
          <div className={styles.money}>
            <div className={styles.balance}>
              <p>Available Balance</p>
              <h6>NGN 4.49</h6>
            </div>
            <div className={styles.add}>
              <Image src="/images/money.png" width="168" height="48" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.session2}>
        <h4 className={styles.preview}>Ad Preview</h4>
        {status === "loading" && <Load />}
        {status === "error" && <ErrorInfo error={error} />}
        {data !== undefined && status === "success" && (
          <div className="tw-w-1/2 lg:tw-w-full tw-mx-auto lg:tw-mr-auto">
            <div className={styles.product}>
              <Image
                src={data.product.image[0].imageUrl}
                width="500"
                height="284"
              />
              <span className="tw-bg-green-success tw-text-white-100 tw-rounded-xl tw-py-1 tw-px-4 tw-absolute tw-left-3/4 tw-top-[5%]">
                promoted
              </span>
            </div>
            <div className="tw-text-center">
              <p className={styles.fash}>{data.product.productTitle}</p>
              <p className={styles.shiny}>
                ₦{data?.product.options[0].discountedPrice}
                <span className={styles.heel}>
                  ₦{data?.product.options[0].price}
                </span>
              </p>
              <div className={styles.revs}>
                <StarRatingComponent
                  name="seller-product"
                  starCount={5}
                  value={data?.product.productRating[0]?.rating}
                  editing={false}
                  emptyStarColor="#c4c4c4"
                  starColor="#ffc107"
                />
                <p className={styles.six}>
                  ({data?.product.productRating[0]?.likes} Reviews)
                </p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.liner}></div>
        <h4 className={styles.summary}>Payment Summary</h4>
        <p className={styles.run}>Your ad will run for 4 days</p>
        <div className={styles.budget}>
          <p>Total budget</p>
          <p className={styles.ad}>
            NGN {Number(promoteData.range).toLocaleString()}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoteProduct;
