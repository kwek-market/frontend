import React from "react";
import { Header } from "@/shared/shop";

function ShopLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default ShopLayout;
