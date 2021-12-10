import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import { StepComponentProps } from "react-step-builder";
import Header from "./Header";
import NumberInput from "./NumberInput";

export type NumberInputProps = {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh: number;
  eighth: number;
  ninth: number;
  tenth: number;
  eleventh: number;
};

function VerifyBVN(props: StepComponentProps) {
  const [bvn, setBvn] = useState<NumberInputProps>({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
    seventh: 0,
    eighth: 0,
    ninth: 0,
    tenth: 0,
    eleventh: 0,
  });

  // need to find a better way, this is shit
  useEffect(() => {
    const userBVN = `${
      props.state.first === undefined ? 0 : props.state.first
    }${props.state.second === undefined ? 0 : props.state.second}${
      props.state.third === undefined ? 0 : props.state.third
    }${props.state.fourth === undefined ? 0 : props.state.fourth}${
      props.state.fifth === undefined ? 0 : props.state.fifth
    }${props.state.sixth === undefined ? 0 : props.state.sixth}${
      props.state.seventh === undefined ? 0 : props.state.seventh
    }${props.state.eighth === undefined ? 0 : props.state.eighth}${
      props.state.ninth === undefined ? 0 : props.state.ninth
    }${props.state.tenth === undefined ? 0 : props.state.tenth}${
      props.state.eleventh === undefined ? 0 : props.state.eleventh
    }`;
    console.log({ userBVN });
    props.setState("bvn", userBVN);
  }, [
    props.state.first,
    props.state.second,
    props.state.third,
    props.state.fourth,
    props.state.fifth,
    props.state.sixth,
    props.state.seventh,
    props.state.eighth,
    props.state.ninth,
    props.state.tenth,
    props.state.eleventh,
  ]);

  async function checkProceed() {
    console.log(bvn);
    console.log(props.state.bvn);
    props.next();
  }

  return (
    <>
      <Header title="verify bvn" num="3" />
      <div className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <h4 className="tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3">
          Enter your 11-digit Bank Verification Number
        </h4>
        <form className="tw-my-7">
          <NumberInput bvn={bvn} setBvn={setBvn} props={props} />
        </form>
        <div className="tw-flex tw-justify-end tw-mt-6">
          <Button
            buttonStyle={
              "tw-rounded-sm tw-py-3  tw-px-10 tw-bg-green-success tw-text-white-100 tw-text-xs"
            }
            text={"Proceed"}
            cmd={checkProceed}
          />
        </div>
      </div>
      <div className="tw-mt-6">
        <button
          className="tw-p-3 tw-rounded-sm tw-text-white-100 tw-bg-red-kwek100"
          onClick={props.prev}
        >
          previous
        </button>
      </div>
    </>
  );
}

export default VerifyBVN;
