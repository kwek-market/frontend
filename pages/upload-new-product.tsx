import React, { useState } from "react";
import {
  Header,
  Others,
  ProductCategory,
  ProductDetails,
  ProductImage,
  ProductPricing,
} from "@/components/new-product";
import { UploadProductType } from "@/interfaces/commonTypes";

function page() {
  const [submitDetails, setSubmitDetails] = useState<UploadProductType>({
    brand: "",
    category: "",
    chargeFivePercentVat: false,
    color: "",
    gender: "Male",
    keyword: [],
    productImageUrl: [],
    productOptions: [],
    productTitle: "",
    productWeight: "",
    returnPolicy: "no return policy",
    shortDescription: "",
    subcategory: "",
    token: "",
    warranty: "no warranty",
  });

  return (
    <section>
      <Header submitDetails={submitDetails} />
      <section className="tw-bg-primary tw-mx-auto tw-py-6 tw-px-3 md:tw-px-20 lg:tw-px-56">
        <form>
          <ProductCategory
            submitDetails={submitDetails}
            setSubmitDetails={setSubmitDetails}
          />
          <ProductImage
            submitDetails={submitDetails}
            setSubmitDetails={setSubmitDetails}
          />
          <ProductDetails
            submitDetails={submitDetails}
            setSubmitDetails={setSubmitDetails}
          />
          <ProductPricing
            submitDetails={submitDetails}
            setSubmitDetails={setSubmitDetails}
          />
          <Others
            submitDetails={submitDetails}
            setSubmitDetails={setSubmitDetails}
          />
        </form>
      </section>
    </section>
  );
}

export default React.memo(page);
