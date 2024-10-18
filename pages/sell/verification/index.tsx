import {
  ProgressTracker,
  ValidID,
  VendorsPolicy,
  VerifyBankAccount,
  VerifyBVN,
} from "@/components/verification";
import withAuth from "@/hooks/withAuth";
import VerificationLayout from "@/layouts/seller/VerificationLayout";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Step, StepComponentProps, Steps } from "react-step-builder";
import VerifiedModal from "../../../components/verification/VerifiedModal";

function index(props: StepComponentProps) {
  const seller = useSelector((state: RootState) => state.seller);
  const router = useRouter();

  const submitDetails = (details: any) => {
    // console.log(details);
    //dispatch(sellerVerification(details, user.token))
  };

  useEffect(() => {
    // a verified seller shouldn't be able to access this page
    if (seller.seller.sellerIsVerified) {
      // router.push("/seller/profile");
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
        <Step
          title='Complete Verification'
          component={VerifiedModal}
          // submit={submitDetails}
        />
        <Step title="Vendor's Policy" component={VendorsPolicy} />
        <Step title='Upload a Valid ID' component={ValidID} />
        <Step title='Verify BVN' component={VerifyBVN} />
        <Step title='Verify Bank Account' component={VerifyBankAccount} submit={submitDetails} />
      </Steps>
    </VerificationLayout>
  );
}

export default withAuth(index, '/sell/verification');
