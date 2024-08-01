import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import PromotionCard from "./PromotionCard";

export default function FilledContent() {
  const user = useSelector((state: RootState) => state?.user);
  const { status, data, error } = usePromotions(user?.token);
  console.log(data);

  return (
    <section className='tw-mt-5'>
      <div className='tw-flex tw-justify-between tw-items-center tw-border-b tw-border-gray-kwek700 tw-pb-2'>
        <p className='tw-font-medium tw-text-base tw-text-gray-kwek900 tw-uppercase'>promotions</p>
        <label>
          {" "}
          showing{" "}
          <select aria-placeholder='All time' className='' value='' onChange={() => null}>
            <option>All Promotions</option>
          </select>
        </label>
      </div>
      <div className='tw-grid tw-gap-3 tw-grid-cols-1 tw-my-4'>
        {data?.getSellerPromotedProducts.map(promotion => (
          <PromotionCard key={v4()} promotion={promotion} />
        ))}
      </div>
    </section>
  );
}
