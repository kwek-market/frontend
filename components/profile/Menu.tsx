import React from "react";
import MenuButton from "./MenuButton";

function Menu({ activeBtn, setActiveBtn }) {
  return (
    <div className="tw-border tw-border-gray-500 tw-border-opacity-50 tw-divide-y tw-divide-gray-400 tw-divide-opacity-50 tw-rounded tw-p-5 tw-h-72 tw-hidden md:tw-block" >
      <MenuButton
        name="Account"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <MenuButton
        name="My Orders"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <MenuButton
        name="Track My Order"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <MenuButton
        name="Sell On Kwek"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <MenuButton
        name="My Addresses"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
    </div>
  );
}

export default Menu;
