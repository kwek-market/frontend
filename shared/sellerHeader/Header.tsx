import Button from "@/components/buttons/Button";
import useReviews from "@/hooks/useReviews";
import { RootState } from "@/store/rootReducer";
import { Rate, message } from "antd";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const Component = () => {
  const user = useSelector((state: RootState) => state.user);
  const seller = useSelector((state: RootState) => state.seller);
  const router = useRouter();

  const { status, data, error } = useReviews({
    token: user.token,
    page: 1,
    pageSize: 20,
  });

  const bgImg = seller.seller.storeBannerUrl
    ? `linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('${seller.seller.storeBannerUrl}')`
    : "linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('/images/user-photo.svg')";

  function uploadHandler() {
    router.push("/seller/upload-new-product");
  }

  async function copyHandler(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      message.success("Copy store link ");
    } catch (error) {
      message.error("Failed to copy shop link");
    }
  }

  const rating = useMemo(() => {
    if (data) {
      const ratings = data.getSellerReview.objects.map(
        (review: { rating: number }) => review.rating
      );
      const total = ratings.reduce((acc, cur) => acc + cur, 0);
      const avg = total / ratings.length;
      return avg;
    }
    return 0;
  }, [data]);

  return (
    <div
      style={{
        background: bgImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className='tw-p-2 md: tw-py-7 md:tw-px-7 tw-flex tw-justify-between tw-items-center tw-bg-seller-header tw-bg-no-repeat tw-bg-center tw-bg-cover'
    >
      <div className='tw-flex tw-flex-col md:tw-flex-row'>
        <div className='md:tw-mr-4'>
          <img
            src={
              seller.seller.storeBannerUrl ? seller.seller.storeBannerUrl : "/images/user-photo.svg"
            }
            className='tw-rounded-xl '
            width={"150px"}
          />
        </div>
        <div className='tw-self-end tw-mb-4'>
          <p className='tw-font-semibold tw-text-white-100 tw-text-4xl tw-mb-0'>
            {seller.seller.shopName}
          </p>
          <div className='tw-text-md'>
            <Rate disabled allowHalf value={rating} className='tw-text-[12px]' />
            {data !== undefined && data.getSellerReview.objects.length > 0 ? (
              <span className='tw-text-white-100 tw-text-[12px]'>({rating} reviews)</span>
            ) : (
              <span className='tw-text-white-100 tw-text-[12px]'>(0 reviews)</span>
            )}
          </div>
          <p className='tw-font-normal tw-text-white-100 tw-mb-0'>
            {seller.seller.shopUrl}{" "}
            <span className='tw-ml-2'>
              <i className='fas fa-copy'></i>
            </span>
          </p>

          <Button
            icon={"fa-copy"}
            buttonStyle={"tw-rounded-sm tw-p-3 tw-bg-yellow-filled hover:tw-shadow-md"}
            text={"Copy Store Url"}
            cmd={() =>
              copyHandler(`https://kwekmarket.com/store/${seller?.seller?.shopUrl}`) as any
            }
          />
        </div>
      </div>
      <div className='tw-self-end tw-mb-7'>
        <Button
          icon={"fa-plus"}
          buttonStyle={"tw-rounded-sm tw-p-3 tw-bg-yellow-filled hover:tw-shadow-md"}
          text={"New Product"}
          cmd={uploadHandler}
        />
      </div>
    </div>
  );
};

export default Component;
