import React, { useEffect, useMemo, useState } from "react";
import styles from "../checkGrid/checkGrid.module.scss";
import Image from "next/image";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { message } from "antd";
import usePlaceOrder from "@/hooks/usePlaceOrder";
import { PaymentLinkType, PlaceOrder } from "@/interfaces/commonTypes";
import usePayment from "@/hooks/usePayment";

function PaymentBox({ step, addressId }) {
  const { user, cart } = useSelector((state: RootState) => state);
  const [paymentMethod, setPaymentMethod] = useState("");

  const result = useMemo(() => {
    let initial = 0;
    cart.cart.forEach((item) => {
      const current = item.price * item.quantity;
      initial += current;
    });
    return initial;
  }, [cart.cart]);

  const { mutate: placeOrderMutate } = usePlaceOrder(user.token);
  const { mutate: paymentMutate } = usePayment(user.token);

  useEffect(() => {
    if (paymentMethod === "pay on delivery") {
      const payload: PlaceOrder = {
        addressId,
        cartId: cart.cart[0].cart.id,
        deliveryMethod: "door step",
        paymentMethod,
        productOptionsId: cart.cart.map((item) => item.product.options[0].id),
        token: user.token,
      };
      placeOrderMutate(payload);
    } else if (paymentMethod === "card") {
      const payload: PaymentLinkType = {
        amount: result + 100,
        currency: "NGN",
        description: `Order payment for ${user.user.username}`,
        redirectUrl: "https://kwekmarket.com/cart/order-complete",
        token: user.token,
      };
      const placeOrder: PlaceOrder = {
        addressId,
        cartId: cart.cart[0].cart.id,
        deliveryMethod: "pickup",
        paymentMethod,
        productOptionsId: cart.cart.map((item) => item.product.options[0].id),
        token: user.token,
      };
      window.sessionStorage.setItem("order", JSON.stringify(placeOrder));
      paymentMutate(payload);
    }
  }, [paymentMethod]);

  return (
    <div className={styles.payment_container}>
      <div className={styles.title_box}>
        <Image src="/svg/inactivetick.svg" width="32" height="32" />
        <p>3. PAYMENT METHOD</p>
      </div>
      {step === 3 && (
        <div className={styles.payment_box}>
          <div className={styles.info_box}>
            <p className={styles.order_id}>KWEK3553767777</p>
            <p className={styles.price}>₦{result + 100}</p>
          </div>
          <div className={styles.option_grid}>
            <div className={styles.option_box}>
              <input
                type="checkbox"
                name="payment-method"
                className={styles.inputRound}
                checked={paymentMethod === "pay on delivery"}
                onChange={() => setPaymentMethod("pay on delivery")}
              />
              <div className={styles.info}>
                <p className={styles.head}>Pay on delivery</p>
                <p className={styles.sub}>
                  Pay cash when order gets delivered to you
                </p>
              </div>
            </div>
            <div className={styles.option_box}>
              <input
                type="checkbox"
                name="payment-method"
                className={styles.inputRound}
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <div className={styles.info}>
                <p className={styles.head}>Card</p>
                <p className={styles.sub}>
                  Make Payments using your Credit or Debit Card
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentBox;
