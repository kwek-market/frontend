import React from "react";

type TextInputProps = {
  text: string;
  type: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  hide?: boolean;
  min?: number;
  max?: number;
};

function TextInput({
  text,
  type,
  value,
  setValue,
  hide,
  min,
  max,
}: TextInputProps) {
  return (
    <div className="tw-flex tw-flex-col">
      <label
        htmlFor={text}
        className={`tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 ${hide}`}
      >
        {text}
      </label>
      <input
        id={text}
        type={type}
        placeholder={text}
        className="tw-rounded-sm tw-w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
      />
    </div>
  );
}

export default TextInput;
