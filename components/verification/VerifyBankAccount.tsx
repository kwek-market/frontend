import { SellerVerification } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { getSellerData, sellerVerification } from "@/store/seller/seller.action";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { StepComponentProps } from "react-step-builder";
import Button from "../buttons/Button";
import Header from "./Header";
import VerifiedModal from "./VerifiedModal";

interface T extends StepComponentProps {
  submit: (data: any) => void;
}
function VerifyBankAccount(props: T) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const seller = useSelector((state: RootState) => state.seller);

  const [loading, setLoading] = useState(false);
  const fetchFromState = (value: string, defaultValue: string = "") => {
    const checkThis = props.getState(value, defaultValue);
    if (!!checkThis && typeof checkThis === "string") {
      defaultValue = checkThis;
    }
    return defaultValue;
  };

  let [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [banks, setBanks] = useState([]);
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankCBNCode, setBankCBNCode] = useState("");
  const [bankSortCode, setBankSortCode] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    // do final submission
    console.log("submitted");
    const details: SellerVerification = {
      acceptedVendorPolicy: true,
      accountName: props.state.bankAccountName as unknown as string,
      accountNumber: props.state.bankAccountNumber as unknown as string,
      bankName: props.state.bankName as unknown as string,
      bankSortCode: bankSortCode,
      bvn: props.state.bvn as unknown as string,
      preferedId: props.state.validID as unknown as string,
      preferedIdUrl: props.state.uploadedID as unknown as string,
      token: user.token,
    };
    // console.log(details);
    sellerVerification(details, user.token, (data, nack) => {
      setIsModalVisible(false);
      props.next();
    })(dispatch);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function confirmDetails() {
    const { message } = await import("antd");
    if (props.state.bankName === "") return message.error("Please enter your bank name");
    if (props.state.bankAccountName === "") return message.error("Please enter your bank name");
    if (props.state.bankAccountNumber === "")
      return message.error("Please enter your bank account number");
    // console.log(props.state);
    // console.log(props.submit(props.state));
    // console.log(bankSortCode);
    showModal();
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setState("bankName", e.target.value);
    // get bank code from selected bank name
    const bankCode = banks.filter((bank: any) => bank.name === e.target.value)[0].code;
    setBankCBNCode(bankCode);
    // get bank sort code from bank name
    const bankSortCode = banks.filter((bank: any) => bank.name === e.target.value)[0].longcode;
    //props.setState("bankSortCode", bankSortCode);
    setBankSortCode(bankSortCode);
  }

  // get bank cbn code
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const accountNumber = props.state.bankAccountNumber;
    // console.log(bankCBNCode);
    const bankCode = bankCBNCode;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_SECRET}`,
      },
      signal,
    };
    props.state.bankName &&
      props.state.bankAccountNumber &&
      (async () => {
        try {
          setLoading(true);
          const res = await (
            await fetch(
              `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
              options
            )
          ).json();
          setLoading(false);
          setBankAccountName(res.data.account_name);
          props.setState("bankAccountName", res.data.account_name);
          // get bank sort code from bank name
          const bankSortCode = banks.filter((bank: any) => bank.name === props.state.bankName)[0]
            .longcode;
          //props.setState("bankSortCode", bankSortCode);
          console.log({ res });
        } catch (err) {
          console.log({ err });
          setLoading(false);
        }
      })();
    return () => controller.abort();
  }, [props.state.bankName, props.state.bankAccountNumber]);

  // to get list of banks
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_SECRET}`,
        },
        signal,
      };
      try {
        const res = await (await fetch("https://api.paystack.co/bank", options)).json();
        setBanks(res.data);
        console.log({ res });
      } catch (err) {
        console.log({ err });
      }
    })();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (seller.sellerVerified.status) {
      getSellerData(user.token)(dispatch);
    }
  }, [seller.sellerVerified.status]);

  return (
    <>
      {isOpen && <VerifiedModal />}
      <Modal
        title='Confirm Submission'
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className='tw-text-center tw-font-medium tw-text-lg'>Are you sure of your details?</p>
        <div className='tw-text-center tw-shadow-lg'>
          <p className='tw-font-medium'>ID : {props.state.validID}</p>
          <p className='tw-font-medium'>BVN : {props.state.bvn}</p>
          <p className='tw-font-medium'>Bank Name : {props.state.bankName}</p>
          <p className='tw-font-medium'>Account Number : {props.state.bankAccountNumber}</p>
        </div>
      </Modal>
      ;<Header title='verify bank account' num='4' />
      <div className='tw-bg-white-100 tw-border tw-border-white-300 tw-p-6'>
        <h4 className='tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3'>
          Enter your account details linked to the BVN entered previously
        </h4>
        <form className='tw-w-full md:tw-w-9/12'>
          <label className='tw-block tw-mb-1 tw-font-medium' htmlFor='bankName'>
            Bank Name
          </label>
          <select
            id='bankName'
            name='bankName'
            value={props.getState("bankName", banks.map((bank: any) => bank.name)[0])}
            onChange={e => handleSelect(e)}
            className='tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2 tw-w-full tw-mb-3'
          >
            {banks.map((bank: any) => (
              <option key={bank.code} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          <label className='tw-block tw-mb-1 tw-font-medium' htmlFor='accountNumber'>
            Account Number
          </label>
          <input
            id={"accountNumber"}
            type='text'
            placeholder='Enter Bank account number'
            className={`tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2 tw-w-full tw-mb-3`}
            min={1}
            max={50}
            required
            name='bankAccountNumber'
            value={props.getState("bankAccountNumber", "")}
            onChange={props.handleChange}
          />
          {loading && <Circles width={20} height={20} color='#FC476E' />}
          {props.state.bankName && props.state.bankAccountNumber && (
            <p className='tw-font-medium'>{bankAccountName}</p>
          )}
        </form>
        <br />
        <div className='tw-flex tw-justify-end tw-mt-5'>
          <Button
            isDisabled={
              props.state.bankName === "" ||
              props.state.bankAccountNumber === "" ||
              bankAccountName === ""
            }
            buttonStyle={`tw-rounded-sm tw-py-3 tw-px-10 tw-bg-green-success tw-text-white-100 tw-text-xs disabled:tw-bg-gray-kwek100`}
            text={"Verify"}
            cmd={confirmDetails}
          />
        </div>
      </div>
      <div className='tw-mt-6'>
        <button
          className='tw-p-3 tw-rounded-sm tw-text-white-100 tw-bg-red-kwek100'
          onClick={props.prev}
        >
          Previous
        </button>
      </div>
    </>
  );
}

export default VerifyBankAccount;
