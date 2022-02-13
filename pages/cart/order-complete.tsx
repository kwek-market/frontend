import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import usePaymentVerify from "@/hooks/usePaymentVerify";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";

function OrderComplete() {
  const { user } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <MainLayout>
      <main className="tw-my-10">
        <section className="tw-flex tw-justify-center tw-items-center">
          <div className="tw-mr-5">
            <Image
              src="/svg/check.svg"
              alt="green check mark"
              width={90}
              height={90}
            />
          </div>
          <div>
            <p className="tw-text-green-success tw-font-semibold tw-text-lg">
              Successful!
            </p>
            <p className="tw-text-green-success tw-font-medium tw-text-base">
              Order No.: <span className="tw-text-black-kwek100">{orderId}</span>
            </p>
          </div>
        </section>
        <section className="tw-bg-white-100 tw-shadow-lg tw-w-3/5 tw-p-5">
          <p>Next Steps</p>
          <ul className="tw-list-disc">
            <li>confirmation</li>
            <ul className="tw-list-none">
              <li>
                Congratulations! Your order was successfully submitted. A
                confirmation email has just been sent to you and our Customer
                Service may contact you shortly to verify your order.
              </li>
            </ul>
            <li>shipping</li>
            <ul className="tw-list-none">
              <li>
                You will receive an update about your order when it has been
                shipped.
              </li>
            </ul>
            <li>My Account</li>
            <ul className="tw-list-none">
              <li>
                You can follow the status of your order by clicking on ‘My
                orders’ in your account page.
              </li>
            </ul>
          </ul>
        </section>
        <section></section>
      </main>
    </MainLayout>
  );
}

export default OrderComplete;
