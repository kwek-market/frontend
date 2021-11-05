import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { connect } from "react-redux";

const verifyAccount = ({ email }) => {
  const form = {
    title: "Verify your email to finish signing up to Kwek",
    subtitle: `Thank you for choosing Kwek! We've sent a message to ${email}, kindly check your inbox and follow the link to confirm your email`,
    fields: [],
    submit: {
      text: "Already Verified?",
      action: () => Router.push("/login"),
    },
  };

  useEffect(() => {
    !email && Router.push("/create-account");
  }, []);

  if (!email) {
    return null;
  }

  return (
    <AuthLayout id="verifyAccount" withBanner={false}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

const mapStateToProps = (state: any) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(verifyAccount);
