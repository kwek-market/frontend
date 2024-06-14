import { Modal, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import usePayment from "../../../hooks/usePayment";
import { RootState } from "../../../store/rootReducer";

export const FundWallet = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [amount, setAmount] = useState(null);
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { mutate, isLoading } = usePayment(token);

  function addMoneyToWallet() {
    if (amount === 0) return message.error("Please enter amount");
    if (isNaN(amount)) return message.error("Please enter valid amount");
    const payload = {
      amount,
      currency: "NGN",
      description: "Fund Wallet",
      redirectUrl: "http://localhost:3100/seller/fund-wallet",
      token,
    };
    mutate(payload, {
      onSuccess: data => {
        console.log("🚀 ~~ addMoneyToWallet ~~ data:", data);
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  return (
    <Modal
      title='Add Money'
      visible={isOpen}
      onOk={addMoneyToWallet}
      onCancel={onClose}
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
  );
};
