import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export const AdminAuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  const reduxState = useSelector((state: RootState) => state);
  const user = reduxState.user;

  console.log(user);

  const router = useRouter();

  useEffect(() => {
    console.log("Run", "many times");

    if (!user.user.isAdmin) {
      // redirect the user to the login page

      router.push("/login");
    }

    // if (user.user.isAdmin) {
    //   alert("Is Admin");
    //   router.push(router.pathname);
    // }
  }, []);

  return <div>{children}</div>;
};
