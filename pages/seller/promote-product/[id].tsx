import React, { useState } from "react";
import PromoteHeader from "@/shared/PromoteHeader/PromoteHeader";
import PromoteProduct from "@/components/promoteProduct/PromoteProduct";
import { useRouter } from "next/router";
import Load from "@/components/Loader/Loader";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { message } from "antd";
import usePromoteProduct from "@/hooks/usePromoteProduct";
import ModalLoader from "@/components/Loader/ModalLoader";
import useGetSellerWallet from "@/hooks/useGetSellerWallet";

const Promote = function () {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { id } = router.query;
  const { status, data } = useGetSellerWallet(token);
  const { mutate, isLoading } = usePromoteProduct();
  const [promoteData, setPromoteData] = useState({
    range: 4590,
    days: 0,
    endDate: new Date().toISOString(),
  });

  function promoteProduct() {
    const { days, range } = promoteData;
    if (data?.getSellerWallet[0].balance < range) {
      return message.error("Insufficient funds, add money to wallet");
    }
    if (range === 0) return message.error("Range must be more than 0");
    if (days === 0) return message.error("Days must be more than 0");
    const payload = {
      days,
      productId: id as string,
      amount: range,
      token,
    };
    mutate(payload, {
      onSuccess: (data) => {
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
      {id ? (
        <PromoteProduct
          id={id as string}
          promoteData={promoteData}
          setPromoteData={setPromoteData}
        />
      ) : (
        <Load />
      )}
    </PromoteHeader>
  );
};

export default Promote;
