import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import VerificationLayout from "../../layouts/seller/VerificationLayout";
import { RootState } from "../../store/rootReducer";

function VerificationPending() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  function handleClick() {
    router.push("/seller/profile");
  }

  useEffect(() => {
    console.log("things are happening");
  }, []);

  return (
    <div className='tw-bg-gray-kwek200 tw-flex tw-justify-center tw-items-center tw-z-30 tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-left-0'>
      <div className='tw-w-4/5 tw-h-[70%] tw-bg-white-100 tw-rounded-md tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-2 md:tw-p-14'>
        <div className='tw-rounded-full'>
          <img src='/svg/verified-pic.svg' />
        </div>
        <div className='tw-px-6 tw-text-center tw-my-5'>
          <p className='tw-text-gray-kwek200 tw-font-semibold tw-text-base md:tw-text-3xl tw-mb-2'>
            {" "}
            Thank you for submitting your application to become a vendor with us. We are pleased to
            inform you that your application is currently being reviewed by our team. We appreciate
            your interest in partnering with us and will get back to you shortly (through email or
            phone call) with the next steps. If we need any additional information, we will reach
            out to you. Thank you for your patience and understanding.
          </p>
        </div>
        <div>
          <button
            onClick={handleClick}
            className='tw-rounded-md tw-py-3 tw-px-6 tw-bg-red-kwek100 tw-text-white-100 tw-font-medium tw-text-sm'
          >
            Start Earning!
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationPending;
