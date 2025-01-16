import useAvgRating from "@/hooks/useAvgRating";
import useGetSellerWallet from "@/hooks/useGetSellerWallet";
import usePayment from "@/hooks/usePayment";
import { useGetProduct } from "@/hooks/useProduct";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import Modal from "antd/lib/modal/Modal";
import Image from "next/legacy/image";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { userFetcherWithAuth } from "../../helpers";
import { GET_SELLER_PRODUCTS } from "../../store/seller/seller.queries";
import ErrorInfo from "../Loader/ErrorInfo";
import Load from "../Loader/Loader";
import SingleSelectSearchInput from "../input/SingleSelectSearchInput";
import styles from "./PromoteProduct.module.scss";

type PromoteData = {
  range: number;
  days: number;
  endDate: string;
  productId: string;
};

type PromoteProductProps = {
  promoteData: PromoteData;
  setPromoteData: React.Dispatch<React.SetStateAction<PromoteData>>;
};

const PromoteProduct = function ({ promoteData, setPromoteData }: PromoteProductProps) {
  console.log("🚀 ~~ PromoteProduct ~~ promoteData:", promoteData);

  const token = useSelector((state: RootState) => state.user?.token);

  const { status, data } = useGetSellerWallet(token);
  const { mutate, isLoading } = usePayment(token);
  const {
    error,
    isLoading: isProductLoading,
    data: productData,
  } = useGetProduct(promoteData?.productId);
  const [amount, setAmount] = useState(0);

  const product = productData?.product;

  const avgRating = useAvgRating(product);

  function addMoneyToWallet() {
    if (amount === 0) return message.error("Please enter amount");
    if (isNaN(amount)) return message.error("Please enter valid amount");
    const payload = {
      amount,
      currency: "NGN",
      description: "Fund Wallet",
      redirectUrl: "https://kwekmarket.com/seller/fund-wallet",
      token,
    };
    mutate(payload, {
      onSuccess: data => {
        console.log("🚀 ~~ addMoneyToWallet ~~ data:", data);

        //message.success(data.paymentLink.message);
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Modal
        title='Add Money'
        visible={isModalVisible}
        onOk={addMoneyToWallet}
        onCancel={handleCancel}
        okText='Add Money'
      >
        <div className=''>
          <label htmlFor='amount' className=''>
            Amount
            <br />
            <input
              id='amount'
              type='number'
              placeholder='200'
              className=''
              value={amount}
              onChange={e => setAmount(e.target.valueAsNumber)}
            />
          </label>
        </div>
      </Modal>

      <div className={styles.promote}>
        <div className='tw-flex-[2]'>
          <form className={styles.form}>
            <div className='tw-space-y-2'>
              <label className=' tw-font-medium'>Select Product</label>
              {/* <SearchSelectInput
                fetchOptions={search => fetchProductsList(search, token)}
                placeholder='Search the user and select'
                onChange={value => {
                  setPromoteData({ ...promoteData, productId: value?.value });
                }}
                maxTagCount={"responsive"}
              /> */}

              <SingleSelectSearchInput
                style={{ width: "100%" }}
                placeHolder='Select Product'
                onSearch={value => fetchProductsList(value, token)}
                onChange={value => {
                  setPromoteData({ ...promoteData, productId: value });
                }}
              />
            </div>

            <div className={styles.board}>
              <h4 className={styles.duration}>Duration</h4>
              <div className={styles.key}>
                <Image src='/images/board.png' width='20' height='20' className={styles.img} />
              </div>
            </div>

            <div className={styles.parallel}>
              <div className=''>
                <label htmlFor='day' className={styles.count}>
                  Days
                </label>
                <input
                  id='day'
                  placeholder='Day'
                  type={"number"}
                  value={promoteData.days}
                  onChange={e =>
                    setPromoteData({
                      ...promoteData,
                      days: e.target.valueAsNumber,
                    })
                  }
                  className={styles.number}
                ></input>
              </div>
              {/* <div className="">
                <label htmlFor="date" className={styles.count}>
                  End date
                </label>
                <input
                  id="date"
                  type={"date"}
                  value={promoteData.endDate}
                  onChange={(e) =>
                    setPromoteData({ ...promoteData, endDate: e.target.value })
                  }
                  className={styles.number}
                ></input>
              </div> */}
            </div>
            <div className={styles.line}></div>
            <div className={styles.boarder}>
              <h4>Total Budget</h4>
              <div className={styles.key}>
                <Image src='/images/board.png' width='20' height='20' className={styles.img} />
              </div>
            </div>
            <p className={styles.estimate}>Estimated 3k - 9.2k people reached daily</p>
            <div className={styles.span}>
              <p className={styles.spaner}>NGN</p>
              <h2>{Number(promoteData.range).toLocaleString()}.00</h2>
            </div>

            <div>
              <input
                type='range'
                min={0}
                max={100000}
                value={promoteData.range}
                onChange={e =>
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
                <h6>NGN {data !== undefined && data.getSellerWallet[0].balance}</h6>
              </div>
              <button
                className='tw-rounded-md tw-px-5 tw-bg-red-kwek100 tw-text-white-100'
                onClick={() => showModal()}
              >
                Add Money
              </button>
            </div>
          </div>
        </div>

        <div className={styles.session2}>
          <h4 className={styles.preview}>Ad Preview</h4>
          {isProductLoading && <Load />}
          {error && <ErrorInfo error={(error as any).message} />}
          {product && (
            <div className=''>
              <div className={styles.product}>
                <Image src={product.image[0].imageUrl} width='500' height='284' />
                <span className='tw-bg-green-success tw-text-white-100 tw-rounded-xl tw-py-1 tw-px-4 tw-absolute tw-left-[60%] tw-top-[5%]'>
                  promoted
                </span>
              </div>
              <div className='tw-text-center'>
                <p className={styles.fash}>{product.productTitle}</p>
                <p className={styles.shiny}>
                  ₦{product.options[0]?.price}
                  <span className={styles.heel}>₦{product.options[0]?.discountedPrice}</span>
                </p>
                <div className={styles.revs}>
                  <StarRatingComponent
                    name='seller-product'
                    starCount={5}
                    value={avgRating}
                    editing={false}
                    emptyStarColor='#c4c4c4'
                    starColor='#ffc107'
                  />
                  <p className={styles.six}>({product.productRating?.length} Reviews)</p>
                </div>
              </div>
            </div>
          )}

          <div className={styles.liner}></div>
          <h4 className={styles.summary}>Payment Summary</h4>
          <p className={styles.run}>Your ad will run for {promoteData.days} days</p>
          <div className={styles.budget}>
            <p>Total budget</p>
            <p className=''>NGN {Number(promoteData.range).toLocaleString()}.00</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PromoteProduct;

async function fetchProductsList(search: string, token?: string): Promise<any[]> {
  try {
    const result = await userFetcherWithAuth(
      GET_SELLER_PRODUCTS,
      { search, token, page: 1, pageSize: 50 },
      token
    );

    return result?.getSellerProducts?.objects?.map(product => ({
      text: `${product.productTitle}`,
      value: product.id,
    }));
  } catch (error) {
    console.error(error);
  }
}
