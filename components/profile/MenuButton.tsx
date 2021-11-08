import router from "next/router";
import React from "react";

type MenuButtonProps = {
  name: string;
  activeBtn: string;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  IconName?: React.ComponentType<any>;
};

function MenuButton({
  name,
  activeBtn,
  setActiveBtn,
  IconName,
}: MenuButtonProps) {
  return (
    <div
      role="button"
      className={`tw-py-3 tw-pr-2 md:tw-pr-0 tw-font-medium tw-text-sm md:tw-text-base lg:tw-text-xl tw-whitespace-nowrap  ${
        activeBtn === name ? "tw-text-red-kwek100" : "tw-text-gray-kwek500"
      }`}
      onClick={() =>
        name === "Sell On Kwek" ? router.push("/sell") : setActiveBtn(name)
      }
    >
      <IconName className="tw-inline" /> <span className="">{name}</span>
    </div>
  );
}

export default MenuButton;
