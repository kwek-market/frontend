import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import useCancelPromotion, {
  CancelPromotionPayload,
} from "@/hooks/useCancelPromotion";
import { message } from "antd";
import ModalLoader from "@/components/Loader/ModalLoader";

export type PromotionCardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
  total: string;
  status: string;
  id: string;
};

export default function PromotionCard({ promotion }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const active = promotion.promo[0].active
    ? "tw-bg-yellow-filled"
    : "tw-bg-green-success";

  const { mutate, isLoading } = useCancelPromotion();

  function cancelPromotion(promotionId: string) {
    const payload: CancelPromotionPayload = {
      promotionId,
      token,
    };
    mutate(payload, {
      onSuccess: () => {
        message.success("Promotion cancelled successfully");
      },
      onError: (err: { message: string }) => {
        message.error(err.message);
      },
    });
  }
  return (
    <div className="tw-border tw-border-gray-kwek700 tw-rounded-md tw-bg-gray-kwek700 tw-bg-opacity-5 tw-flex tw-justify-between tw-items-center tw-p-3">
      {isLoading && <ModalLoader />}
      <div>
        <Image
          src={promotion.image[0].imageUrl}
          alt="product"
          width="120"
          height="100"
        />
      </div>
      <div className="">
        <p className="tw-text-base md:tw-text-2xl tw-font-normal tw-text-gray-kwek900 tw-mb-0">
          {promotion.productTitle}
        </p>
        <span className="tw-font-semibold tw-text-base md:tw-font-3xl tw-text-gray-kwek900">
          ₦{Number(promotion.options[0].discountedPrice).toLocaleString()}
        </span>
        <span className="tw-text-sm tw-font-medium tw-line-through tw-opacity-50 tw-text-gray-kwek900 tw-ml-2">
          ₦{Number(promotion.options[0].price).toLocaleString()}
        </span>
      </div>
      <div>
        <span
          className={`tw-rounded-full tw-inline-block tw-h-4 tw-w-4  ${active}`}
        ></span>
        <span className="tw-font-medium tw-text-base tw-text-gray-kwek900 tw-ml-2">
          {promotion.promo[0].active ? "Ongoing" : "Completed"}
        </span>
      </div>
      <div className="tw-flex tw-gap-2">
        <button className="tw-p-3 tw-bg-red-kwek100 tw-bg-opacity-20 tw-text-red-kwek100 tw-rounded-sm">
          view details
        </button>
        <button
          onClick={() => cancelPromotion(promotion.id)}
          className="tw-p-3 tw-bg-red-kwek100 tw-bg-opacity-20 tw-text-red-kwek100 tw-rounded-sm"
        >
          cancel
        </button>
      </div>
    </div>
  );
}
