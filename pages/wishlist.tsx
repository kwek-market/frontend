import { Audio } from "react-loader-spinner";

import List from "@/components/wishlist/List";
import styles from "@/components/wishlist/list.module.scss";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";

import { MainLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";

import ErrorInfo from "@/components/Loader/ErrorInfo";
import { WishlistType } from "@/interfaces/commonTypes";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Page = function () {
  const { error, loading, wishlists } = useSelector((state: RootState) => state.wishlist);

  const isLoading = loading && (
    <div>
      <Audio color='#fff' height={30} width={30} />
    </div>
  );

  const hasError = error && <ErrorInfo error={error} />;

  const hasWishlist =
    wishlists.length > 0 ? (
      <section>
        <div className={styles.list_content}>
          {wishlists.map((wishlist: WishlistType) => (
            <section key={wishlist.id}>
              <List wishlists={wishlist} />
            </section>
          ))}
        </div>
      </section>
    ) : (
      <ErrorInfo error={"No items in wishlist"} />
    );

  return (
    <MainLayout title='Wishlist'>
      <section>
        {isLoading}
        {hasError}
        {hasWishlist}
      </section>
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
