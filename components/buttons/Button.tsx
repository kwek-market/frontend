import React from 'react';

type ButtonProps = {
  buttonStyle: string;
  text: string;
  icon?: string;
  cmd: () => void;
};

const Button = function ({ buttonStyle, text, cmd, icon }: ButtonProps) {
  return (
    <button className={buttonStyle} style={{ whiteSpace: 'nowrap' }} onClick={cmd}>
      {icon && <i className={`fas ${icon}`} style={{ paddingRight: '12px' }} />}
      {'    '}
      {text}
    </button>
  );
};

export default Button;
