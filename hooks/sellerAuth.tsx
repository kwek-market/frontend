import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { verifyTokenFunc } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { logout } from "@/store/user/user.actions";
import { clearAccount } from "@/store/account/account.actions";
import { clearSubs } from "@/store/newsletter/newsletter.actions";
import { clearSeller } from "@/store/seller/seller.action";

const sellerAuth = (WrappedComponent: any) => {
  return function (props: any) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user, seller } = useSelector((state: RootState) => state);

    useEffect(() => {
      const beforeHistoryChange = (url: string, { shallow }) => {
        console.log(
          `App is changing to ${url} ${
            shallow ? "with" : "without"
          } shallow routing`
        );
      };
      router.events.on("beforeHistoryChange", beforeHistoryChange);

      return () => {
        router.events.off("beforeHistoryChange", beforeHistoryChange);
      };
    }, []);

    useEffect(() => {
      (async () => {
        const { message } = await import("antd");
        // if no accessToken was found,then we redirect to "/" page.
        if (!user.token) {
          // console.log("no token found");
          // message.error("You are not a authenticated");
          router.push("/login");
        } else {
          // we call the api that verifies the token.
          const data = await verifyTokenFunc(user.token);
          // console.log({ data });
          // verify token first
          if (data.verifyToken.status) {
            // if token was verified, then we can check if the person is a seller
            if (user.user.isSeller) {
              setIsAuthenticated(data.verifyToken.status);
              setIsLoading(false);
            } else {
              // person is not a seller
              // message.error("You are not a seller");
              router.push("/sell/create-account");
            }
          } else {
            // If the token was fraud we first remove it from localStorage and then redirect to "/"
            dispatch(logout());
            dispatch(clearSubs());
            dispatch(clearAccount());
            dispatch(clearSeller());
            router.push("/login");
          }
        }
      })();
    }, [user.id]);

    // check loading state
    if (isLoading) {
      return (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      );
    }
    if (isAuthenticated) {
      return <WrappedComponent isLoading={isLoading} {...props} />;
    }
    return null;
  };
};

export default sellerAuth;
