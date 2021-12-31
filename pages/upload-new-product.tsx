import React from "react";
import {
  Header,
  Others,
  ProductCategory,
  ProductDetails,
  ProductImage,
  ProductPricing,
} from "@/components/new-product";

function page() {
  return (
    <section>
      <Header />
      <section className="tw-bg-primary tw-mx-auto tw-py-6 tw-px-3 md:tw-px-20 lg:tw-px-56">
        <ProductCategory />
        <ProductImage />
        <ProductDetails />
        <ProductPricing />
        <Others />
      </section>
    </section>
  );
}

export default page;
