import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useGetSellerWallet from "@/hooks/useGetSellerWallet";
import useInvoice, { Payload } from "@/hooks/useInvoice";
import { RootState } from "@/store/rootReducer";
import { Drawer } from "antd";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { FundWallet } from "./FundWallet";
import WalletCard from "./WalletCard";
import WalletContent from "./WalletContent";
import WalletHeader from "./WalletHeader";
import WithdrawFunds from "./WithdrawFunds";

export default function Wallet() {
  const token = useSelector((state: RootState) => state.user?.token);

  const [visible, setVisible] = useState(false);
  const [isFundWalletModalOpen, setIsFundWalletModalOpen] = useState(false);

  const { data: walletData, error: walletError, status: walletStatus } = useGetSellerWallet(token);
  const payload: Payload = { token: token, page: 1, pageSize: 100 };
  const { data: invoiceData, error: invoiceError, status: invoiceStatus } = useInvoice(payload);

  const invoiceNum =
    invoiceStatus === "success" &&
    invoiceData !== undefined &&
    invoiceData.getSellerInvoices.objects.length > 0
      ? invoiceData.getSellerInvoices.objects.length
      : 0;

  return (
    <section className='tw-mt-4 tw-p-4 tw-bg-white-100 tw-shadow-md tw-border tw-border-gray-kwek700 tw-rounded-md'>
      <Drawer
        title='Withdraw Funds'
        placement={"right"}
        onClose={() => {
          setVisible(false);
        }}
        open={visible}
        key={"right-fuck"}
        closable={true}
        destroyOnClose={true}
        width='75%'
      >
        <WithdrawFunds />
      </Drawer>
      <FundWallet isOpen={isFundWalletModalOpen} onClose={() => setIsFundWalletModalOpen(false)} />
      <WalletHeader setIsFundWalletModalOpen={setIsFundWalletModalOpen} setVisible={setVisible} />
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-mt-4'>
        {walletStatus === "loading" && <Load />}
        {walletStatus === "error" && <ErrorInfo error='An error occurred' />}
        {walletStatus === "success" && walletData !== undefined && (
          <Fragment>
            <WalletCard
              name='Balance'
              num={walletData.getSellerWallet[0].balance}
              imgSrc='/svg/wallet.svg'
              imgAlt='wallet'
            />
            <WalletCard
              name='Invoice'
              content={invoiceNum}
              num={invoiceNum}
              imgSrc='/svg/invoice.svg'
              imgAlt='invoice'
            />
            <WalletCard
              name='Total Income'
              content={walletData.getSellerWallet[0].balance}
              num={walletData.getSellerWallet[0].balance}
              imgSrc='/svg/income.svg'
              imgAlt='income'
            />
          </Fragment>
        )}
      </div>
      <WalletContent />
    </section>
  );
}
