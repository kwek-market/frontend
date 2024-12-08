import { verifyTokenFunc } from "@/helpers";
import { clearAccount } from "@/store/account/account.actions";
import { clearSubs } from "@/store/newsletter/newsletter.actions";
import { RootState } from "@/store/rootReducer";
import { clearSeller } from "@/store/seller/seller.action";
import { logout } from "@/store/user/user.actions";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const sellerAuth = (WrappedComponent: any) => {
  return function SellerAuth(props: any) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state: RootState) => state.user);
    const seller = useSelector((state: RootState) => state.seller);

    // useEffect(() => {
    //   const beforeHistoryChange = (url: string, { shallow }) => {
    //     console.log(
    //       `App is changing to ${url} ${
    //         shallow ? "with" : "without"
    //       } shallow routing`
    //     );
    //   };
    //   router.events.on("beforeHistoryChange", beforeHistoryChange);

    //   return () => {
    //     router.events.off("beforeHistoryChange", beforeHistoryChange);
    //   };
    // }, []);

    useEffect(() => {
      (async () => {
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
            // check if the is a seller and the verification is pending
            if (user.user.isSeller) {
              // check if the user is a seller and is verified
              if (user.user?.isSeller && seller.seller.sellerIsVerified) {
                setIsAuthenticated(data.verifyToken.status);
                return setIsLoading(false);
              }

              if (!seller.seller?.sellerIsVerified) {
                return router.push("/sell/verification");
              }
            }

            if (!user.user?.isSeller) {
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
