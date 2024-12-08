import {
  ProgressTracker,
  ValidID,
  VendorsPolicy,
  VerifyBankAccount,
  VerifyBVN,
} from "@/components/verification";
import withAuth from "@/hooks/withAuth";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Step, StepComponentProps, Steps } from "react-step-builder";
import VerifiedModal from "../../../components/verification/VerifiedModal";
import VerificationLayout from "../../../layouts/seller/VerificationLayout";
import { sellerVerification } from "../../../store/seller/seller.action";

function index(props: StepComponentProps) {
  const seller = useSelector((state: RootState) => state.seller);
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const submitDetails = (details: any) => {
    // console.log(details);
    sellerVerification(details, user.token)(dispatch);
  };

  useEffect(() => {
    // a verified seller shouldn't be able to access this page
    if (seller.seller.sellerIsVerified) {
      router.push("/seller/profile");
    }

    if (user.user?.isSeller && !seller.seller.sellerIsVerified) {
      console.log(props, "fuck you");
    }
  }, [seller.seller.sellerIsVerified]);

  interface configProps {
    navigation: {
      component: (props: any) => JSX.Element;
      location: "before" | "after";
    };
  }
  const config: configProps = {
    navigation: {
      component: ProgressTracker as any, // a React component with special props provided automatically
      location: "before", // or after
    },
  };

  return (
    <VerificationLayout>
      <Steps config={config}>
        <Step title="Vendor's Policy" component={VendorsPolicy} />
        <Step title='Upload a Valid ID' component={ValidID} />
        <Step title='Verify BVN' component={VerifyBVN} />
        <Step
          title='Verify Bank Account'
          component={VerifyBankAccount}
          // submit={submitDetails}
        />
        <Step
          title='Complete Verification'
          component={VerifiedModal}
          // submit={submitDetails}
        />
      </Steps>
    </VerificationLayout>
  );
}

export default withAuth(index, "/sell/verification");
