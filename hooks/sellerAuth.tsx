import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { verifyTokenFunc } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { logout } from "@/store/user/user.actions";

const sellerAuth = (WrappedComponent: any) => {
  return function (props: any) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user, seller } = useSelector((state: RootState) => state);

    useEffect(() => {
      (async () => {
        // if no accessToken was found,then we redirect to "/" page.
        if (!user.token) {
          // console.log("no token found");
          import("antd").then((antd) => {
            antd.message.error("You are not authenticated");
          });
          router.push("/login");
        } else {
          // we call the api that verifies the token.
          const data = await verifyTokenFunc(user.token);
          // console.log({ data });
          // if token was verified we set the state.
          if (data.verifyToken.status && user.isSeller) {
            // console.log({data})
            setIsAuthenticated(data.verifyToken.status);
            setIsLoading(false);
          } else {
            // If the token was fraud we first remove it from localStorage and then redirect to "/"
            dispatch(logout());
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
