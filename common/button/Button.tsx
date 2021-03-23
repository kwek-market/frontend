import React from "react";

interface Props {
  className: string;
  action?: () => void;
}

const Button: React.FC<Props> = ({ children, className, action }) => {
  return (
    <React.Fragment>
      <button className={className} onClick={action}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
