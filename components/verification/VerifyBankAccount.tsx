import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import TextInput from '../input/textInput';
import Header from './Header';
import { StepComponentProps } from 'react-step-builder';

interface T extends StepComponentProps {
  submit: (data: any) => void;
}
function VerifyBankAccount(props: T) {
  const fetchFromState = (value: string, defaultValue: string = '') => {
    const checkThis = props.getState(value, defaultValue);
    if (!!checkThis && typeof checkThis === 'string') {
      defaultValue = checkThis;
    }
    return defaultValue;
  };
  const [bankAccountNumber, setBankAccountNumber] = useState(
    fetchFromState('bankAccountNumber'),
  );
  const [bankAccountName, setBankAccountName] = useState(
    fetchFromState('bankAccountName'),
  );

  async function confirmDetails() {
    const { message } = await import('antd');
    // props.setState('bankAccountName', bankAccountName);
    // props.setState('bankAccountNumber', bankAccountNumber);

    if (props.state.bankName === '')
      return message.error('Please enter your bank name');
    if (props.state.bankAccountName === '')
      return message.error('Please enter your bank name');
    if (props.state.bankAccountNumber === '')
      return message.error('Please enter your bank account number');
    console.log(props.state)
    console.log(props.submit(props.state));
  }

  return (
    <>
      <Header title="verify bank account" num="4" />
      <div className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <h4 className="tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3">
          Enter your account details linked to the BVN entered previously
        </h4>
        <form className="tw-w-full md:tw-w-9/12">
          <label>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className={`tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2`}
              min={1}
              max={50}
              required
              name="bankName"
              value={props.getState("bankName", "")}
              onChange={props.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Enter Bank account number"
              className={`tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2`}
              min={1}
              max={50}
              required
              name="bankAccountNumber"
              value={props.getState("bankAccountNumber", "")}
              onChange={props.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Enter Bank account number"
              className={`tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2`}
              min={1}
              max={50}
              required
              name="bankAccountName"
              value={props.getState("bankAccountName", "")}
              onChange={props.handleChange}
            />
          </label>
        </form>
        <br />
        <div className="tw-flex tw-justify-end tw-mt-5">
          <Button
            isDisabled={props.state.bankAccountName === '' || props.state.bankAccountNumber === ''}
            buttonStyle={`tw-rounded-sm tw-py-3 tw-px-10 tw-bg-green-success tw-text-white-100 tw-text-xs disabled:tw-bg-gray-kwek100`}
            text={'Verify'}
            cmd={confirmDetails}
          />
        </div>
      </div>
      <div className="tw-mt-6">
        <button
          className="tw-p-3 tw-rounded-sm tw-text-white-100 tw-bg-red-kwek100"
          onClick={props.prev}
        >
          Previous
        </button>
      </div>
    </>
  );
}

export default VerifyBankAccount;
