import React from "react";
import { UserDataType, UserPasswordType } from "../seller/settings/components/PersonalDetails";

type TextInputProps = {
  text: string;
  type: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number | UserDataType | UserPasswordType>>;
  hide?: string;
  min?: number;
  max?: number;
  style?: string;
  children?: JSX.Element;
  restStyles?: string;
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
  restStyles,
}: TextInputProps) {
  return (
    <div className={`tw-flex tw-flex-col tw-relative ${restStyles}`}>
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
        onChange={e => setValue(e.target.value)}
        min={min}
        max={max}
      />
      {children}
    </div>
  );
};

export default TextInput;

interface InputFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

export const InputField = ({ label, ...props }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id} className=' tw-font-medium'>
        {label}
      </label>
      <input
        {...props}
        className={
          "tw-mt-1 tw-w-full tw-border tw-border-[#D7DCE0] tw-rounded tw-p-4 tw-outline-none " +
          props.className
        }
      />
    </div>
  );
};

interface SelectFieldProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
}

export const SelectField = ({ label, ...props }: SelectFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id} className=' tw-font-medium'>
        {label}
      </label>
      <select
        {...props}
        className={
          "tw-mt-1 tw-w-full tw-border tw-border-[#D7DCE0] tw-rounded tw-p-4 tw-outline-none " +
          props.className
        }
      >
        {props.children}
      </select>
    </div>
  );
};

export const RadioField = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className=' tw-flex tw-gap-x-2 tw-items-center'>
      <input
        {...props}
        className={
          " tw-border tw-cursor-pointer tw-border-[#D7DCE0] tw-rounded tw-p-4 tw-outline-none " +
          props.className
        }
        id={props.id ?? label}
        type='radio'
      />
      <label htmlFor={props.id ?? label} className=' tw-font-medium tw-cursor-pointer'>
        {label}
      </label>
    </div>
  );
};
interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

export const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id} className=' tw-font-medium'>
        {label}
      </label>
      <textarea
        {...props}
        className={
          "tw-mt-1 tw-w-full tw-border tw-border-[#D7DCE0] tw-rounded tw-p-4 tw-outline-none tw-resize-none tw-h-28" +
          props.className
        }
      />
    </div>
  );
};
