import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyTokenFunc } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { logout } from "@/store/user/user.actions";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
      (async () => {
        // if no accessToken was found,then we redirect to "/" page.
        if (!user.token) {
          // console.log("no token found");
          import("antd").then(antd => {
            antd.message.error("You are not authenticated");
          })
          router.push("/");
        } else {
          // we call the api that verifies the token.
          const data = await verifyTokenFunc(user.token);
          // console.log({ data });
          // if token was verified we set the state.
          if (data.verifyToken.status) {
            // console.log({data})
            setIsAuthenticated(data.verifyToken.status);
          } else {
            // If the token was fraud we first remove it from localStorage and then redirect to "/"
            dispatch(logout());
            router.push("/");
          }
        }
      })();
    }, [user.id]);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
