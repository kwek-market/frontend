import React from "react";

type ButtonProps = {
  buttonStyle: string;
  text: string;
  icon?: string;
  cmd: () => void;
};

function Button({ buttonStyle, text, cmd, icon }: ButtonProps) {
  return (
    <button className={buttonStyle} onClick={cmd}>
      {icon && (
        <i className={`fas ${icon}`} style={{ paddingRight: "12px" }}></i>
      )}
      {"    "}
      {text}
    </button>
  );
}

export default Button;
