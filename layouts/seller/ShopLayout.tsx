import React from "react";
import { Header } from "@/shared/shop";
import sellerAuth from "@/hooks/sellerAuth";

function ShopLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default sellerAuth(ShopLayout);
