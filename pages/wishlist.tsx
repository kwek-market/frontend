import React, { useEffect } from "react";
import Loader from "react-loader-spinner";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import List from "@/components/wishlist/List";
import styles from "@/components/wishlist/list.module.scss";

import { MainLayout } from "@/layouts";
import { getWishList } from "@/store/wishlist/wishlist.actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { WishlistType } from "@/interfaces/commonTypes";

const Page = function () {
  const {
    wishlist: { error, loading, wishlists },
  } = useSelector((state: RootState) => state);

  const isLoading = !!loading && (
    <div>
      <Loader type="Audio" color="#fff" height={30} width={30} />
    </div>
  );

  const hasError = !!error && (
    <div>
      <h1>{error}</h1>
    </div>
  );

  const hasWishlist =
    wishlists.length > 0 ? (
      <div className={styles.list_content}>
        {wishlists.map((wishlist: WishlistType) => (
          <List key={wishlist.id} wishlists={wishlist} />
        ))}
      </div>
    ) : (
      <div>
        <h1>No wishlist found</h1>
      </div>
    );

  return (
    <MainLayout title="Wishlist">
      {isLoading}
      {hasError}
      {hasWishlist}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
