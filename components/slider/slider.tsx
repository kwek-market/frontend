import React from "react";
import { v4 } from "uuid";

type SliderProps = {
  element: { element: JSX.Element }[];
};

const Slider = function ({ element }: SliderProps) {
  return (
    <div className='md:tw-hidden tw-overflow-x-scroll tw-scrollbar-none'>
      {element.map((item, index) => {
        return (
          <div key={v4()} className='tw-w-[179vw] tw-space-x-6 tw-overflow-scroll tw-scrollbar-none tw-items-center tw-justify-center tw-flex'>
            <React.Fragment key={v4()}>{item.element}</React.Fragment>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
