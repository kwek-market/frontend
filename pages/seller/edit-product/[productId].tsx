import { Empty } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditProductCategory from "../../../components/edit-product/edit-product-category";
import EditProductDetails from "../../../components/edit-product/edit-product-details";
import EditProductHeader from "../../../components/edit-product/edit-product-header";
import EditProductImage from "../../../components/edit-product/edit-product-image";
import EditProductOthers from "../../../components/edit-product/edit-product-others";
import EditProductPricing from "../../../components/edit-product/edit-product-pricing";
import Load from "../../../components/Loader/Loader";
import { useGetProductCharge } from "../../../hooks/admin/productCharges";
import { useGetProduct } from "../../../hooks/useProduct";
import { EditProductType, ProductType } from "../../../interfaces/commonTypes";
import { RootState } from "../../../store/rootReducer";

const index = () => {
  const router = useRouter();
  const { user, token } = useSelector((state: RootState) => state.user);
  const { data: productChargeData, isLoading: isLoadingCharge } = useGetProductCharge(token);

  const productCharge = productChargeData?.getProductCharge;

  const productId = router?.query?.productId as string;
  const { data, isLoading, isError } = useGetProduct(productId as string, !!productId);

  const [submitDetails, setSubmitDetails] = useState<EditProductType>({
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
    warranty: "no warranty",
    productId,
  });

  useEffect(() => {
    if (data?.product && productCharge) {
      const product = data?.product as ProductType;
      const productOptions = data?.product?.options?.map(option => ({
        price: Number(option.price) - option.productCharge,
        color: option.color,
        quantity: option.quantity,
        size: option.size,
        discounted_price: option.discountedPrice,
        option_total_price: option.price,
        sizePostfix: option?.size?.trim(" ")[1] || "",
      }));

      setSubmitDetails({
        brand: product.brand,
        category: product.category.id,
        chargeFivePercentVat: product.chargeFivePercentVat,
        color: product.color,
        gender: product.gender,
        keyword: product.keyword,
        productImageUrl: product.image?.map(img => img.imageUrl),
        productOptions: productOptions,
        productTitle: product.productTitle,
        productWeight: product?.productWeight,
        returnPolicy: product?.returnPolicy,
        shortDescription: product?.shortDescription,
        subcategory: product.subcategory.id,
        warranty: product?.warranty,
        productId,
      });
    }

    return () => {};
  }, [data?.product, productCharge]);

  return (
    <>
      {data?.product && productCharge && !isLoading && user?.id === data?.product?.user?.id ? (
        <section>
          <EditProductHeader submitDetails={submitDetails} />
          <section className='tw-bg-primary tw-mx-auto tw-py-6 tw-px-3 md:tw-px-20 lg:tw-px-56'>
            <EditProductCategory
              submitDetails={submitDetails}
              setSubmitDetails={setSubmitDetails}
              product={data?.product}
            />
            <EditProductImage
              submitDetails={submitDetails}
              setSubmitDetails={setSubmitDetails}
              product={data?.product}
            />
            <EditProductDetails
              submitDetails={submitDetails}
              setSubmitDetails={setSubmitDetails}
              product={data?.product}
            />
            <EditProductPricing
              submitDetails={submitDetails}
              setSubmitDetails={setSubmitDetails}
              product={data?.product}
            />
            <EditProductOthers
              submitDetails={submitDetails}
              setSubmitDetails={setSubmitDetails}
              product={data?.product}
            />
          </section>
        </section>
      ) : null}

      {isError && <Empty />}

      {isLoading && <Load />}
    </>
  );
};

export default index;
