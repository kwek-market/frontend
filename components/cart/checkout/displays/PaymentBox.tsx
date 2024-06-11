import Load from "@/components/Loader/Loader";
import SimpleModal from "@/components/modal";
import usePayment from "@/hooks/usePayment";
import usePlaceOrder from "@/hooks/usePlaceOrder";
import { PaymentLinkType, PlaceOrder } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../checkGrid/checkGrid.module.scss";

function PaymentBox({ step, addressId }) {
  const { user, cart, deliveryFee } = useSelector((state: RootState) => state);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [confirmModal, setConfirmModal] = useState(false);

  const showModal = () => {
    if (paymentMethod === "") {
      return message.warn("Please select a payment method");
    }
    setConfirmModal(true);
  };

  const handleCancel = () => {
    setConfirmModal(false);
  };

  const result = useMemo(() => {
    let initial = 0;
    cart.cart.forEach(item => {
      const current = item.price;
      initial += current;
    });
    return initial;
  }, [cart.cart]);

  const { mutate: placeOrderMutate, isLoading } = usePlaceOrder(user.token);
  const { mutate: paymentMutate, status } = usePayment(user.token);

  const handleOrder = () => {
    if (paymentMethod === "") {
      return message.warn("Please select a payment method");
    }
    if (paymentMethod === "pay on delivery") {
      const payload: PlaceOrder = {
        addressId,
        cartId: cart.cart[0].cart.id,
        deliveryMethod: "door step",
        paymentMethod,
        deliveryFee: deliveryFee?.fee,
        token: user.token,
      };
      placeOrderMutate(payload);
    } else if (paymentMethod === "card") {
      const payload: PaymentLinkType = {
        amount: result + deliveryFee?.fee,
        currency: "NGN",
        description: `Order payment for ${user.user.username}`,
        redirectUrl: "https://kwekmarket.com/cart/order-confirmation",
        token: user.token,
      };
      const placeOrder: PlaceOrder = {
        addressId,
        cartId: cart.cart[0].cart.id,
        deliveryMethod: "door step",
        paymentMethod,
        deliveryFee: deliveryFee?.fee,
        token: user.token,
      };
      window.sessionStorage.setItem("order", JSON.stringify(placeOrder));
      paymentMutate(payload);
    }
  };

  return (
    <div className={styles.payment_container}>
      <div className={styles.title_box}>
        <Image src='/svg/inactivetick.svg' width='32' height='32' />
        <p>3. PAYMENT METHOD</p>
      </div>
      {step === 3 && (
        <div className={styles.payment_box}>
          <div className={styles.info_box}>
            {/* <p className={styles.order_id}>KWEK3553767777</p> */}
            <p className={styles.price}>Total: ₦{result + deliveryFee.fee}</p>
          </div>
          <div className={styles.option_grid}>
            <div className={styles.option_box}>
              <input
                type='checkbox'
                name='payment-method'
                className={styles.inputRound}
                checked={paymentMethod === "pay on delivery"}
                onChange={() => setPaymentMethod("pay on delivery")}
              />
              <div className={styles.info}>
                <p className={styles.head}>Pay on delivery</p>
                <p className={styles.sub}>Pay cash when order gets delivered to you</p>
              </div>
              {/* {isLoading && <Load />} */}
            </div>
            <div className={styles.option_box}>
              <input
                type='checkbox'
                name='payment-method'
                className={styles.inputRound}
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <div className={styles.info}>
                <p className={styles.head}>Card</p>
                <p className={styles.sub}>Make Payments using your Credit or Debit Card</p>
              </div>
              {/* {status === "loading" && <Load />} */}
            </div>
          </div>
          <button type='submit' onClick={() => showModal()}>
            Place Order
          </button>
        </div>
      )}
      <SimpleModal open={confirmModal} handleClose={handleCancel}>
        <div className=' tw-bg-white-100 tw-rounded tw-w-[80vw] lg:tw-w-[30vw] tw-mt-[30vh] tw-p-10'>
          <h2 className='tw-mb-0 tw-font-bold tw-text-center tw-text-3xl tw-pb-10'>Place Order?</h2>

          <button type='submit' onClick={() => handleOrder()}>
            {status === "loading" || isLoading ? <Load /> : "Confirm"}
          </button>
        </div>
      </SimpleModal>
    </div>
  );
}

export default PaymentBox;
