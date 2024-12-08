import { useRouter } from "next/router";
import { useState } from "react";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";
import { useDispatch, useSelector } from "react-redux";

import { UserLogin } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { loginUser } from "@/store/user/user.actions";

const Page = function () {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const signIn = (formData: UserLogin) => {
    const variables: UserLogin = {
      email: formData.email,
      password: formData.password,
    };
    loginUser(variables, () => {
      if (router.query?.next_page) {
        router.push(router.query.next_page as string);
      } else {
        user.user.isVerified !== false && router.push("/");
      }
    })(dispatch);
  };

  const form = {
    title: "Welcome Back",
    isLoading,
    fields: [
      {
        name: "email",
        placeholder: "Email Address",
        type: "email",
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
        sub: {
          text: "Forgot Password?",
          url: "/forgot-password",
        },
      },
    ],
    submit: {
      text: "Sign In",
      action: signIn,
    },
    extra: {
      text: "Don't have an account?",
      linkText: "Create an Account",
      linkUrl: "/create-account",
    },
    userId: {
      id: user.id,
      message: user.message,
    },
  };

  const bannerText = {
    lineOne: "A Fresh",
    lineTwo: "Approach to",
    lineThree: "Shopping",
  };

  return (
    <AuthLayout id='Login' withBanner bannerText={bannerText}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
