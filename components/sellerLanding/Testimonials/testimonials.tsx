import Image from "next/legacy/image";
import Styles from "./testimonials.module.scss";

import Switcher from "./Switcher";

const Testimonials = () => {
  const slides = [
    {
      element: (
        <>
          <div className='tw-flex tw-relative'>
            <Image className='circle-image' src='/images/james.jpg' height='70' width='70' />
            <div className='tw-flex tw-flex-col tw-justify-center tw-items-left tw-ml-3'>
              <h3 className='tw-text-base md:tw-text-lg tw-text-gray-kwek200'>James AFUYE</h3>
              <h4 className='tw-text-sm md:tw-text-lg'>Sustainable Living Advocate</h4>
            </div>
            <div className='tw-absolute tw-right-1'>
              <img src='/images/quote.png' className='tw-w-10' />
            </div>
          </div>
          <div>
            <h3 className='  xl:tw-line-clamp-none tw-text-gray-kwek200 tw-opacity-70 tw-text-sm md:tw-text-lg tw-mt-6'>
              &ldquo;Kwekmarket has completely transformed my shopping experience! The variety of
              unique, eco-friendly products is amazing, and I love supporting local vendors. Plus,
              the quick delivery and smooth transactions make it so convenient. It's the perfect
              marketplace for anyone who values sustainability and quality!&ldquo;
            </h3>
          </div>
          {/* <div className='tw-absolute tw-bottom-[5%]  md:tw-bottom-[10%] '>
            <img className='tw-h-5' src='/svg/FedEx-Logo.svg' />
          </div> */}
        </>
      ),
    },
    {
      element: (
        <>
          <div className='tw-flex tw-relative'>
            <Image
              className='circle-image'
              src='/images/testimonial-man.png'
              height='70'
              width='70'
            />
            <div className='tw-flex tw-flex-col tw-justify-center tw-items-left tw-ml-3'>
              <h3 className='tw-text-base md:tw-text-lg tw-text-gray-kwek200'>Julian Akinremi</h3>
              <h4 className='tw-text-sm md:tw-text-lg'>CEO Fourteen farms</h4>
            </div>
            <div className='tw-absolute tw-right-1'>
              <img src='/images/quote.png' className='tw-w-10' />
            </div>
          </div>
          <div>
            <h3 className='  xl:tw-line-clamp-none tw-text-gray-kwek200 tw-opacity-70 tw-text-sm md:tw-text-lg tw-mt-6'>
              &ldquo;Kwekmarket is a game-changer! I love how easy it is to find unique,
              eco-friendly products while supporting local sellers. The delivery is super fast, and
              the customer service is always on point. It's my go-to marketplace for stylish and
              sustainable shopping!&ldquo;
            </h3>
          </div>
          {/* <div className='tw-absolute tw-bottom-[5%]  md:tw-bottom-[10%]'>
            <img className='tw-h-5' src='/svg/FedEx-Logo.svg' />
          </div> */}
        </>
      ),
    },
  ];
  return (
    <div className={Styles.testimonials}>
      <div className={Styles.testimonialsAssurance}>
        <div className='tw-mx-2 md:tw-mx-10 lg:tw-mx-24 tw-text-center md:tw-text-left'>
          <h3 className='tw-text-white-100 tw-font-semibold tw-text-base md:tw-text-2xl lg:tw-text-5xl'>
            Don’t just take our word for it
          </h3>
          <p className='tw-text-xs md:tw-text-lg lg:tw-text-xl tw-font-normal'>
            Feedback from these happy customers helps us in reaching the heights
          </p>
        </div>
      </div>
      <div className={Styles.feedback}>
        <div className={Styles.feedbackBox}>
          <Switcher slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
