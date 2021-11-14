import React from 'react';

const Badge = function ({ badgeStyle, text }) {
  return <span className={badgeStyle}>{text}</span>;
};

export default Badge;
