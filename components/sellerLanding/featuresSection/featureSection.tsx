import React from 'react';
import Image from 'next/image';
import Styles from './featureSection.module.scss';
import Testimonials from '../Testimonials/testimonials';

import Feature from './Feature';

const featureSection = () => {
  const features = [
    {
      title: 'Effective Buyer’s Leveraging',
      description:
        'Our system functionality is enhanced to bring the right audience to your online shop outlet in your “nearness”.',
      image: '/images/investor.png',
    },
    {
      title: '24hrs delivery optimization',
      description:
        'Reach to a large community of people who value the availability of your products in their doorsteps “in no time”. Are you surprised?',
      image: '/images/24hours.png',
    },
    {
      title: 'Effective customer support',
      description: 'Easy communication, 24hrs instant response and convincing support level are all guaranteed.',
      image: '/images/customer.png',
    },
    {
      title: 'Organized Online Outlet',
      description:
        'Are you looking for the appearance for your online store? A well branded online shop outlet is available for you on kwekmarket.',
      image: '/images/outlet.png',
    },
    {
      title: 'Swift transaction',
      description:
        'Enjoy Money-to-hand transaction, transparent sales tracking, well understandable and traceable transaction history',
      image: '/images/swiftpay.png',
    },
    {
      title: 'Optimized Logistic Service',
      description:
        'Fastest delivery of your product is only a click away. Our team is available for you with our well-structured procurement system',
      image: '/images/delivery.png',
    },
  ];
  return (
    <div className={Styles.features}>
      <div className={Styles.features_question}>
        <h2 className="tw-text-xl md:tw-text-4xl lg:tw-text-6xl tw-text-gray-kwek200 ">
          Why Choose KwekMarketMall?
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-kwek-1 tw-gap-5 md:tw-md-gap-10 lg:tw-gap-20 tw-mx-5 md:tw-mx-20 tw-mb-5">
        {features.map((feature, index) => (
          <Feature key={index} imgSrc={feature.image} title={feature.title} description={feature.description} />
        ))}
      </div>
      <Testimonials />
    </div>
  );
};

export default featureSection;
