import React from "react";

type SliderProps = {
  element: { element: JSX.Element }[];
};

function Slider({ element }: SliderProps) {
  return (
    <div className="tw-flex tw-flex-row md:tw-hidden tw-overflow-x-auto tw-overflow-y-hidden">
      {element.map((item, index) => {
        return <React.Fragment key={index}>{item.element}</React.Fragment>;
      })}
    </div>
  );
}

export default Slider;
