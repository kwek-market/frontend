import ArrowDownIcon from "@/components/icons/admin/nav/arrow-down";
import NotificationIcon from "@/components/icons/admin/nav/notification";
import SearchIcon from "@/components/icons/admin/nav/search";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const NavAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="tw-sticky tw-top-0 tw-z-[1] tw-bg-white-100 tw-border-b tw-border-b-[#D7DCE0] tw-flex tw-justify-end tw-items-center tw-py-3 lg:tw-py-4 tw-px-4 lg:tw-px-8">
      <div className=" tw-flex  lg:tw-gap-x-8 tw-items-center tw-w-full lg:tw-w-max tw-justify-between lg:tw-justify-start">
        <div className="lg:tw-hidden">
          <MenuIcon
            color="black"
            onClick={() => setSidebarOpen(true)}
            width={40}
            height={40}
          />
        </div>
        <SearchIcon />
        <NotificationIcon />

        <div className=" tw-flex tw-gap-x-[10px] tw-items-center">
          <div className=" tw-w-10 tw-h-10 tw-rounded-full tw-overflow-hidden tw-bg-black-kwek100"></div>
          <div className=" tw-font-poppins">
            <p className=" tw-mb-0 tw-font-semibold tw-text-sm">
              Komolafe Deborah
            </p>
            <p className=" tw-mb-0 tw-text-black-kwek100 tw-text-opacity-60 tw-text-[10px]">
              thekomolafed@gmail.com
            </p>
          </div>
        </div>

        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default NavAdmin;
