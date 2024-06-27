import ModalLoader from "@/components/Loader/ModalLoader";
import PromoteProduct from "@/components/promoteProduct/PromoteProduct";
import useGetSellerWallet from "@/hooks/useGetSellerWallet";
import usePromoteProduct from "@/hooks/usePromoteProduct";
import PromoteHeader from "@/shared/PromoteHeader/PromoteHeader";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Promote = function () {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { id } = router.query;
  const { status, data } = useGetSellerWallet(token);
  const { mutate, isLoading } = usePromoteProduct();
  const [promoteData, setPromoteData] = useState({
    range: 5000,
    days: 0,
    endDate: new Date().toISOString(),
    productId: null,
  });

  function promoteProduct() {
    const { days, range, productId } = promoteData;
    if (data?.getSellerWallet[0].balance < range) {
      return message.error("Insufficient funds, add money to wallet");
    }
    if (range === 0) return message.error("Range must be more than 0");
    if (days === 0) return message.error("Days must be more than 0");
    if (!productId) return message.error("ProductId must be more than 0");

    const payload = {
      days,
      productId: id as string,
      amount: range,
      token,
    };
    mutate(payload, {
      onSuccess: data => {
        message.success(data.promoteProduct.message);
        router.push("/seller/profile");
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  return (
    <PromoteHeader promoteProduct={promoteProduct}>
      {isLoading && <ModalLoader />}
      <PromoteProduct promoteData={promoteData} setPromoteData={setPromoteData} />
    </PromoteHeader>
  );
};

export default Promote;
