import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoBagCheckSharp, IoLocationSharp, IoBagAdd, IoHome } from 'react-icons/io5';
import MenuButton from './MenuButton';

type MenuProps = {
  activeBtn: string;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
};

const Menu = function ({ activeBtn, setActiveBtn }: MenuProps) {
  return (
    <>
      <div className="tw-border tw-border-gray-500 tw-border-opacity-50 tw-divide-y tw-divide-gray-400 tw-divide-opacity-50 tw-rounded tw-h-72 tw-p-5 tw-hidden md:tw-block">
        <MenuButton name="Account" IconName={FaUser} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton name="My Orders" IconName={IoBagCheckSharp} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton
          name="Track My Order"
          IconName={IoLocationSharp}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
        <MenuButton name="Sell On Kwek" IconName={IoBagAdd} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton name="My Addresses" IconName={IoHome} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
      <div
        className="tw-flex tw3-flex-row tw-justify-between tw-border-b tw-border-b-gray-400 tw-whitespace-nowrap tw-overflow-x-auto tw-overflow-y-hidden tw-pr-2 md:tw-hidden"
        style={{ whiteSpace: 'nowrap' }}
      >
        <MenuButton name="Account" IconName={FaUser} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton name="My Orders" IconName={IoBagCheckSharp} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton
          name="Track My Order"
          IconName={IoLocationSharp}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
        />
        <MenuButton name="Sell On Kwek" IconName={IoBagAdd} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <MenuButton name="My Addresses" IconName={IoHome} activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
    </>
  );
};

export default Menu;
