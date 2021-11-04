import React from "react";

function Badge({ badgeStyle, text }) {
  return <span className={badgeStyle}>{text}</span>;
}

export default Badge;
