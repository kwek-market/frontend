import { RootState } from "@/store/rootReducer";
import Image from "next/image";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import styles from "../checkGrid/checkGrid.module.scss";

function CartInfo() {
  const { cart } = useSelector((state: RootState) => state);

  const result = useMemo(() => {
    let initial = 0;
    cart.cart.forEach(item => {
      const current = item.price;
      initial += current;
    });
    return initial;
  }, [cart.cart]);

  return (
    <div className={styles.second_box}>
      <p className={styles.title}>YOUR ORDER</p>
      <div className={`${styles.card_box} tw-space-y-8`}>
        {cart.cart.map(item => (
          <div key={v4()} className={""}>
            <div className='tw-relative tw-w-full tw-h-[144px] tw-object-center tw-object-cover'>
              <Image
                src={item.product.image[0].imageUrl}
                layout='fill'
                objectFit='cover'
                objectPosition={"center"}
                className={styles.img}
              />
            </div>
            <div className={"tw-mt-4"}>
              <div className={"tw-flex tw-space-x-2 tw-items-baseline"}>
                <p className={styles.seller}>
                  Seller:{" "}
                  <span className=''>
                    {item.product?.user?.sellerprofile
                      ? item.product?.user?.sellerprofile[0]?.shopName
                      : ""}
                  </span>
                </p>
                <p className={"tw-font-medium tw-text-lg"}>{item.product.productTitle}</p>
              </div>

              <div className={"tw-flex tw-space-x-2 tw-items-baseline"}>
                <p className={styles.qty}>Qty: {item.quantity}</p>
                <p className={"tw-font-medium tw-text-lg"}>₦{item.price}</p>
              </div>

              <div className={"tw-flex tw-space-x-2 tw-items-baseline"}>
                <p className={styles.qty}>Color:</p>
                <p className={"tw-font-medium tw-text-lg"}>{item.product.color}</p>
              </div>

              <div className={"tw-flex tw-space-x-2 tw-items-baseline"}>
                <p className={styles.qty}>Size:</p>
                <p className={"tw-font-medium tw-text-lg"}>{item.product.options[0].size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <div className={styles.subtotal_box}>
          <p className={styles.head}>Subtotal</p>
          <p className={styles.price}>₦{result}</p>
        </div>
        <div className={styles.charge_box}>
          <p className={styles.head}>Delivery Charges</p>
          <p className={styles.price}>₦100</p>
        </div>
        <div className={styles.total_box}>
          <p className={styles.head}>Total</p>
          <p className={styles.price}>₦{result + 100}</p>
        </div>
      </div>
    </div>
  );
}

export default CartInfo;
