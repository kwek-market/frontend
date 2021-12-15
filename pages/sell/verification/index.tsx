import {
  ProgressTracker,
  ValidID,
  VendorsPolicy,
  VerifyBankAccount,
  VerifyBVN,
} from "@/components/verification";
import VerificationLayout from "@/layouts/seller/VerificationLayout";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Step, StepComponentProps } from "react-step-builder";

function index(props: StepComponentProps) {
  const dispatch = useDispatch();
  const seller = useSelector((state: RootState) => state.seller);
  // find last element in the array
  

  return (
    <VerificationLayout>
      <ProgressTracker />
      <Steps>
        <Step title="vendor's policy" component={VendorsPolicy} />
        <Step title="upload a valid id" component={ValidID} />
        <Step title="verify bvn" component={VerifyBVN} />
        <Step title="verify bank account" component={VerifyBankAccount} />
      </Steps>
    </VerificationLayout>
  );
}

export default index;
