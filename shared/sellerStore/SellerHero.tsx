import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container } from "../../components/seller/content/Content";

export const SellerHero = ({ seller }) => {
  const { user } = useSelector((state: RootState) => state);
  const router = useRouter();

  const bgImg = seller.storeBannerUrl
    ? `linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('${seller.storeBannerUrl}')`
    : "linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('/images/stairs.jpg')";

  return (
    <div
      style={{
        background: bgImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundColor: "gray",
      }}
      className='tw-bg-seller-header tw-bg-no-repeat tw-bg-center tw-bg-cover'
    >
      <Container>
        <div className='tw-p-2 md: tw-py-7 md:tw-px-7 tw-flex tw-justify-between tw-items-center'>
          <div className='tw-flex tw-flex-col md:tw-flex-row'>
            <div className='md:tw-mr-4'>
              <img
                src={seller.storeBannerUrl ? seller.storeBannerUrl : "/images/user-photo.svg"}
                className='tw-rounded-xl '
                width={"150px"}
              />
            </div>
            <div className='tw-self-end tw-mb-4'>
              <p className='tw-font-semibold tw-text-white-100 tw-text-4xl tw-mb-0'>
                {seller.shopName}
              </p>
              <p className='tw-text-white-200'>{seller?.storeDescription}.</p>
              <span className='tw-text-white-100 tw-text-[12px]'>{seller?.shopAddress}</span>

              {/* <div className='tw-text-md'>
                <Rate disabled allowHalf value={seller.productRating?.rating} className='tw-text-[12px]' />
                {data !== undefined && data.getSellerReview.objects.length > 0 ? (
                  <span className='tw-text-white-100 tw-text-[12px]'>({rating} reviews)</span>
                ) : (
                  <span className='tw-text-white-100 tw-text-[12px]'>(0 reviews)</span>
                )}
              </div> */}
            </div>
          </div>
          <div className='tw-self-end tw-mb-7'>
            <a
              href={`tel:+234${seller.phoneNumber}`}
              className={"tw-rounded-sm tw-p-3 tw-bg-yellow-filled hover:tw-shadow-md"}
              style={{ whiteSpace: "nowrap" }}
            >
              <i className={`fas fa-phone`} style={{ paddingRight: "12px" }} />
              Contact Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
