import React, { Fragment, useState } from "react";
import { Drawer } from "antd";
import WithdrawFunds from "./WithdrawFunds";
import WalletHeader from "./WalletHeader";
import WalletCard from "./WalletCard";
import WalletContent from "./WalletContent";
import useGetSellerWallet from "@/hooks/useGetSellerWallet";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Load from "@/components/Loader/Loader";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import useInvoice, { Payload } from "@/hooks/useInvoice";

export default function Wallet() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const [visible, setVisible] = useState(false);
  const {
    data: walletData,
    error: walletError,
    status: walletStatus,
  } = useGetSellerWallet(token);
  const payload: Payload = { token: token, page: 1, pageSize: 100 };
  const {
    data: invoiceData,
    error: invoiceError,
    status: invoiceStatus,
  } = useInvoice(payload);

  const invoiceNum =
    invoiceStatus === "success" &&
    invoiceData !== undefined &&
    (invoiceData as Record<string, any>)?.getSellerInvoices.objects.length > 0
      ? (invoiceData as Record<string, any>)?.getSellerInvoices.objects.length
      : 0;

  return (
    <section className="tw-mt-4 tw-p-4 tw-bg-white-100 tw-shadow-md tw-border tw-border-gray-kwek700 tw-rounded-md">
      <Drawer
        title="Withdraw Funds"
        placement={"right"}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"right"}
        closable={true}
        width="75%"
        className="tw-w-3/4 lg:tw-w-1/2"
      >
        <WithdrawFunds />
      </Drawer>
      <WalletHeader setVisible={setVisible} />
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        {walletStatus === "loading" && <Load />}
        {walletStatus === "error" && <ErrorInfo error="An error occurred" />}
        {walletStatus === "success" && walletData !== undefined && (
          <Fragment>
            <WalletCard
              name="Balance"
              num={
                (walletData as Record<string, any>)?.getSellerWallet[0].balance
              }
              imgSrc="/svg/wallet.svg"
              imgAlt="wallet"
            />
            <WalletCard
              name="Invoice"
              content={invoiceNum}
              num={invoiceNum}
              imgSrc="/svg/invoice.svg"
              imgAlt="invoice"
            />
            <WalletCard
              name="Total Income"
              content={
                (walletData as Record<string, any>)?.getSellerWallet[0].balance
              }
              num={
                (walletData as Record<string, any>)?.getSellerWallet[0].balance
              }
              imgSrc="/svg/income.svg"
              imgAlt="income"
            />
          </Fragment>
        )}
      </div>
      <WalletContent />
    </section>
  );
}
