import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const sliderFiles = [
  {
    images:
      'https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=656&q=80',
  },
  {
    images:
      'https://images.unsplash.com/photo-1541447237128-f4cac6138fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=669&q=80',
  },
  {
    images:
      'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    images:
      'https://images.unsplash.com/photo-1543988884-c01cfa7b41c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80',
  },
  {
    images:
      'https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
  },
];

type CarouselProps = {
  slides: { element: JSX.Element }[];
  height: string;
  background?: string;
};
const Carousel = function ({ slides, height, background }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const slide = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? slide - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slide - 1 ? 0 : current + 1);
  };

  // loop the carousel continously
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="tw-relative md:tw-hidden tw-flex tw-h-3/6 tw-w-full tw-justify-center tw-items-center tw-mt-5 tw-bg-cover"
      style={{ height, background }}
    >
      <div className="tw-rounded-full tw-bg-white-100 tw-absolute tw-top-2/4 tw-left-2 tw-p-3 tw-opacity-0 hover:tw-opacity-100">
        <MdArrowBackIos className="tw-text-2xl tw-text-blue-400" onClick={prevSlide} />
      </div>
      {slides.map((file, index) => (
        <div key={index} className={`${index === current ? 'slide active' : 'slide'}`}>
          {index === current && file.element}
        </div>
      ))}
      <div className="tw-rounded-full tw-bg-white-100 tw-absolute tw-top-2/4 tw-right-2 tw-p-3 tw-opacity-0 hover:tw-opacity-100">
        <MdArrowForwardIos className="tw-text-2xl tw-text-blue-400" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
