import Load from "@/components/Loader/Loader";
import useWithdrawFromWallet, {
  WithdrawFromWalletType,
} from "@/hooks/useWithdrawFromWallet";
import { RootState } from "@/store/rootReducer";
import { Input, message } from "antd";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function WithdrawFunds() {
  const {
    user: { token },
    seller: { seller },
  } = useSelector((state: RootState) => state);
  const { mutate, isLoading } = useWithdrawFromWallet();
  const [eye, setEye] = useState(false);
  const [withdrawFunds, setWithdrawFunds] = useState({
    amount: "",
    password: "",
  });
  const showEye = !eye ? "fa-eye" : "fa-eye-slash";

  function withdraw() {
    const { amount, password } = withdrawFunds;
    if (amount === "") return message.error("input an amount");
    if (!Number(amount)) return message.error("Input a number as the amount");
    if (password === "") return message.error("input your password");
    const payload: WithdrawFromWalletType = {
      amount: Number(amount),
      password,
      token,
    };
    mutate(payload, {
      onSuccess: (data) => {
        message.success(
          (data as Record<string, any>)?.withdrawFromWallet.message
        );
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  return (
    <main className="tw-px-5">
      <div className="tw-rounded-md tw-p-3 tw-flex tw-justify-between tw-border tw-border-gray-kwek700">
        <Image
          src="/svg/atm-red.svg"
          alt="atm"
          width="50"
          height="50"
          className="tw-flex-1 tw-self-start"
        />
        <p className="tw-flex-[2] tw-ml-2 tw-mb-0">
          your funds will be withdrawn to your{" "}
          <span className="tw-capitalize tw-text-red-kwek100">
            {seller.bankName}
          </span>{" "}
          account,{" "}
          <span className="tw-capitalize tw-text-red-kwek100">
            {seller.bankAccountNumber}
          </span>
        </p>
      </div>
      <div id="form" className="tw-mt-3">
        <div className="">
          <label
            htmlFor="amount"
            className="tw-mt-3 tw-font-semibold tw-gray-kwek900"
          >
            How much do you want to withdraw?{" "}
            <span className="tw-text-sm tw-text-gray-kwek800">
              (minumum NGN 2,000.00)
            </span>
          </label>
          <Input
            id="amount"
            type="text"
            addonAfter="NGN"
            placeholder="2000"
            className="tw-rounded-md"
            value={withdrawFunds.amount}
            onChange={(e) =>
              setWithdrawFunds({ ...withdrawFunds, amount: e.target.value })
            }
          />
        </div>
        <div className="tw-mt-3">
          <label
            htmlFor="password"
            className="tw-my-3 tw-font-semibold tw-gray-kwek900"
          >
            Enter your password
          </label>
          <Input
            id="password"
            type={eye ? "text" : "password"}
            addonAfter={
              <i className={`fas ${showEye}`} onClick={() => setEye(!eye)} />
            }
            placeholder="******"
            className="tw-rounded-md"
            value={withdrawFunds.password}
            onChange={(e) =>
              setWithdrawFunds({
                ...withdrawFunds,
                password: e.target.value,
              })
            }
          />
        </div>
        <br />
        {isLoading ? (
          <Load />
        ) : (
          <button
            className="tw-rounded-md tw-block tw-capitalize tw-bg-red-kwek100 tw-text-white-100 tw-p-3 tw-w-full tw-mt-3"
            onClick={() => withdraw()}
          >
            withdraw funds
          </button>
        )}
      </div>
    </main>
  );
}
