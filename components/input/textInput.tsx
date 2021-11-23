import React from "react";

type TextInputProps = {
  text: string;
  type: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  hide?: string;
  min?: number;
  max?: number;
  style?: string;
  children?: JSX.Element;
};

const TextInput = function ({
  text,
  type,
  value,
  setValue,
  hide,
  min,
  max,
  style,
  children,
}: TextInputProps) {
  return (
    <div className="tw-flex tw-flex-col tw-relative">
      <label
        htmlFor={text}
        className={`tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 ${hide}`}
      >
        {text}
      </label>
      <input
        id={text}
        type={type}
        name={text}
        placeholder={text}
        className={`tw-rounded-sm tw-w-full ${style}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
      />
      {children}
    </div>
  );
};

export default TextInput;
