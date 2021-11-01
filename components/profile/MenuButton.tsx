import React from "react";

function MenuButton({ name, activeBtn, setActiveBtn }) {
  return (
    <div
      role="button"
      className={`tw-py-3 tw-font-medium tw-text-sm md:tw-text-xl  ${
        activeBtn === name ? "tw-text-red-kwek100" : "tw-text-gray-kwek500"
      }`}
      onClick={() => setActiveBtn(name)}
    >
      {name}
    </div>
  );
}

export default MenuButton;
