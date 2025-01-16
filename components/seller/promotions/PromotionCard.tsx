import ModalLoader from "@/components/Loader/ModalLoader";
import useCancelPromotion, { CancelPromotionPayload } from "@/hooks/useCancelPromotion";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import Image from "next/legacy/image";
import { QueryClient } from "react-query";
import { useSelector } from "react-redux";

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
  const queryClient = new QueryClient();
  const token = useSelector((state: RootState) => state?.user);
  const currentPromo = promotion?.promo?.find(pro => pro?.active);
  const active = currentPromo?.active ? "tw-bg-yellow-filled" : "tw-bg-green-success";

  const { mutate, isLoading } = useCancelPromotion();

  function cancelPromotion(productId: string) {
    const payload: CancelPromotionPayload = {
      productId,
      token,
    };
    mutate(payload, {
      onSuccess: async () => {
        message.success("Promotion cancelled successfully");
        await queryClient.refetchQueries(["promotions"], {
          active: true,
          exact: true,
        });
      },
      onError: (err: { message: string }) => {
        message.error(err.message);
      },
    });
  }
  return (
    <div className='tw-border tw-border-gray-kwek700 tw-rounded-md tw-bg-gray-kwek700 tw-bg-opacity-5 tw-flex tw-justify-between tw-items-center tw-flex-wrap tw-p-3'>
      {isLoading && <ModalLoader />}
      <div className='tw-mr-2'>
        <Image src={promotion.image[0].imageUrl} alt='product' width='120' height='100' />
      </div>
      <div className='tw-flex-[2]'>
        <p className='tw-text-base md:tw-text-2xl tw-font-normal tw-text-gray-kwek900 tw-mb-0'>
          {promotion.productTitle}
        </p>
        <span className='tw-font-semibold tw-text-base md:tw-font-3xl tw-text-gray-kwek900'>
          ₦{Number(promotion.options[0]?.discountedPrice).toLocaleString()}
        </span>
        <span className='tw-text-sm tw-font-medium tw-line-through tw-opacity-50 tw-text-gray-kwek900 tw-ml-2'>
          ₦{Number(promotion.options[0]?.price).toLocaleString()}
        </span>

        <div className='tw-mt-2'>
          <div className='tw-text-sm'>
            <span className='tw-font-normal tw-text-gray-kwek900'>Links Clicked: </span>
            <span className='tw-font-semibold'>{currentPromo?.linkClicks}</span>
          </div>

          <div className='tw-text-sm'>
            <span className='tw-font-normal tw-text-gray-kwek900'>Reached: </span>
            <span className='tw-font-semibold'>{currentPromo?.reach}</span>
          </div>

          <div className='tw-text-sm'>
            <span className='tw-font-normal tw-text-gray-kwek900'>Amount Deposited: </span>
            <span className='tw-font-semibold'>{currentPromo?.amount}</span>
          </div>
        </div>
      </div>
      <div>
        <span className={`tw-rounded-full tw-inline-block tw-h-4 tw-w-4  ${active}`}></span>
        <span className='tw-font-medium tw-text-base tw-text-gray-kwek900 tw-ml-2'>
          {currentPromo?.active ? "Ongoing" : "Completed"}
        </span>
      </div>
      <div className='tw-flex tw-flex-1 tw-gap-2 tw-ml-2'>
        {/* <button className='tw-p-3 tw-bg-red-kwek100 tw-bg-opacity-20 tw-text-red-kwek100 tw-rounded-sm'>
          view details
        </button> */}
        <button
          onClick={() => cancelPromotion(promotion.id)}
          className='tw-p-3 tw-bg-red-kwek100 tw-bg-opacity-20 tw-text-red-kwek100 tw-rounded-sm'
        >
          cancel
        </button>
      </div>
    </div>
  );
}
