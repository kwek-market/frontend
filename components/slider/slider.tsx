import React from "react";
import { v4 } from "uuid";

type SliderProps = {
  element: { element: JSX.Element }[];
};

const Slider = function ({ element }: SliderProps) {
  return (
    <div className="tw-flex tw-flex-row md:tw-hidden tw-overflow-x-auto tw-overflow-y-hidden">
      {element.map((item, index) => {
        return <React.Fragment key={v4()}>{item.element}</React.Fragment>;
      })}
    </div>
  );
};

export default Slider;
