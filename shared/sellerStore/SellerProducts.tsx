import ProductFilled from "@/components/productFilled/ProductFilled";
import { ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { Fragment, useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

export function SellerProduct({ products }: { products: ProductType[] }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState<string>("-clicks");

  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <Fragment>
      <ProductFilled
        product={products}
        setShowProduct={setShowProduct}
        setProduct={setProduct}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        filter={filter}
        setFilter={setFilter}
      />
    </Fragment>
  );
}
