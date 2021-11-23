import React from "react";
import { StepComponentProps } from "react-step-builder";
import { NumberInputProps } from "./VerifyBVN";

export type NumberInput = {
  bvn: NumberInputProps;
  setBvn: React.Dispatch<React.SetStateAction<NumberInputProps>>;
  props: StepComponentProps;
};

function NumberInput({ bvn, setBvn, props }: NumberInput) {
  return (
    <>
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="first"
        value={props.getState("first", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="second"
        value={props.getState("second", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="third"
        value={props.getState("third", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="fourth"
        value={props.getState("fourth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="fifth"
        value={props.getState("fifth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="sixth"
        value={props.getState("sixth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="seventh"
        value={props.getState("seventh", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="eighth"
        value={props.getState("eighth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="ninth"
        value={props.getState("ninth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="tenth"
        value={props.getState("tenth", 0)}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-w-16 tw-text-gray-kwek200 tw-mr-2"
        min="0"
        max="9"
        required
        name="eleventh"
        value={props.getState("eleventh", "0")}
        onChange={props.handleChange}
      />
    </>
  );
}

export default NumberInput;
