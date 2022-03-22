import React from "react";
import Loader from "react-loader-spinner";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import List from "@/components/wishlist/List";
import styles from "@/components/wishlist/list.module.scss";

import { MainLayout } from "@/layouts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { WishlistType } from "@/interfaces/commonTypes";
import ErrorInfo from "@/components/Loader/ErrorInfo";

const Page = function () {
  const {
    wishlist: { error, loading, wishlists },
  } = useSelector((state: RootState) => state);

  const isLoading = loading && (
    <div>
      <Loader type="Audio" color="#fff" height={30} width={30} />
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
    <MainLayout title="Wishlist">
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
