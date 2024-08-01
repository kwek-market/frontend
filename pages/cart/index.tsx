import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { CartEmpty, CartGrid } from "@/components/cart";
import { MainLayout } from "@/layouts";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";

const Page = function () {
  const cart = useSelector((state: RootState) => state.cart);

  const isLoading = cart?.loading && <Load />;

  const hasError = cart?.error && <ErrorInfo error={cart?.error} />;

  const hasCart =
    Array.isArray(cart?.cart) && cart?.cart?.length ? <CartGrid /> : <CartEmpty />;

  return (
    <MainLayout title="Cart">
      <section>
        {isLoading}
        {hasError}
        {hasCart}
      </section>
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
