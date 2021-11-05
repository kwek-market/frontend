import React from "react";
import { AuthLayout } from "@/layouts";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/router";

function Emailverification() {
  const router = useRouter();
  return (
    <AuthLayout id={"emailVerification"} withBanner={false}>
      <div className="tw-flex tw-h-[80vh] tw-flex-col tw-justify-center tw-items-center tw-p-2 md:tw-p-0">
        <h3 className="tw-text-red-kwek100 tw-font-bold tw-text-base md:tw-text-xl lg:tw-text-3xl tw-text-center">
          Verify your email to finish signing up to Kwek
        </h3>
        <p className="tw-text-black-stock tw-text-sm md:tw-text-base">
          Thank you for choosing Kwek
        </p>
        <p className="tw-text-black-stock tw-text-sm md:tw-text-base">
          Please confirm that alisoneyo@gmail.com is your email address by
          clicking the button below or use this link{" "}
          <a
            href="https://courselify.com/confirm-email/SMLSDSV/650000500005000000"
            target="_blank"
            rel="noreferrer noopener"
            className="tw-text-yellow-filled"
          >
            verify-email
          </a>{" "}
          within the next 24 hours
        </p>
        <Button
          buttonStyle={
            "tw-py-2 tw-px-4 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-capitalize"
          }
          text={"sign in"}
          cmd={() => {
            router.push("/login");
          }}
        />
      </div>
    </AuthLayout>
  );
}

export default Emailverification;
