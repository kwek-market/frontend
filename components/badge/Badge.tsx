import React from "react";

function Badge({ badgeStyle, text }) {
  return <div className={badgeStyle}>{text}</div>;
}

export default Badge;
