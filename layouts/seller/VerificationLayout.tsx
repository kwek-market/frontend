import React from "react";
import { Header } from "@/shared/verification";
import sellerAuth from "@/hooks/sellerAuth";

function VerificationLayout({ children }) {
  return (
    <div className="tw-bg-primary">
      <Header />
      <div className="tw-px-5 md:tw-px-14 tw-py-5">{children}</div>
    </div>
  );
}

export default VerificationLayout;
