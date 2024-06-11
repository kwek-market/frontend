import { FeatureSection, HeroSection, Stats, Use } from "..";
import Testimonials from "../Testimonials/testimonials";

const SellerLandingBody = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <FeatureSection />
      <Testimonials />
      <Use />
    </>
  );

  // return (
  //   <div className='tw-grid lg:tw-grid-cols-2 tw-w-full tw-h-full tw-bg-[#FBF4F5] tw-border-4'>
  //     <div className='tw-border-2'>
  //       <div className='tw-space-y-3'>
  //         <h1 className='tw-text-4xl xl:tw-text-7xl'>Make Money & Grow your Business Online</h1>
  //         <p className='xl:tw-text-lg tw-text-white-light'>
  //           Reach millions of buyers in every state in Nigeria easily, get your store on KwekMarket
  //           today!
  //         </p>
  //       </div>

  //       <Link href={"/"}>
  //         <a className='tw-mt-5 tw-py-3 tw-px-6 tw-inline-flex tw-items-center tw-text-right tw-text-white-light tw-bg-red-600'>
  //           Get started Now <ArrowRightIcon className='tw-w-4 tw-h-4' />
  //         </a>
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default SellerLandingBody;

const CircleNumber = ({ number }) => {
  return (
    <div className=' tw-w-[38px] tw-h-[38px] 2xl:tw-h-[46px] 2xl:tw-w-[46px] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-[#005A8B] tw-text-white-100 tw-font-black text-lg 2xl:tw-text-2xl tw-flex-shrink-0'>
      {number}
    </div>
  );
};
