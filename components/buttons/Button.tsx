import React from "react";

type ButtonProps = {
  buttonStyle: string;
  text: string;
  icon?: string;
  cmd: () => void;
  isDisabled?: boolean;
};

const Button = function ({
  buttonStyle,
  text,
  cmd,
  icon,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled}
      className={buttonStyle}
      style={{ whiteSpace: "nowrap" }}
      onClick={cmd}
    >
      {icon && <i className={`fas ${icon}`} style={{ paddingRight: "12px" }} />}
      {"    "}
      {text}
    </button>
  );
};

export default Button;
