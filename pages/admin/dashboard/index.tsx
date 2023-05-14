import Card from "@/components/admin/dashboard/card";
import DashboardChart from "@/components/admin/dashboard/chart";

import ShoppingBagIcon from "@/components/icons/admin/dashboard/bag";
import CartIcon from "@/components/icons/admin/dashboard/cart";
import ProfitIcon from "@/components/icons/admin/dashboard/profit";
import DownloadIcon from "@/components/icons/admin/download";
import ArrowDownIcon from "@/components/icons/admin/nav/arrow-down";
import { AdminLayout } from "@/layouts";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className=" tw-font-poppins tw-flex tw-justify-between">
        <h1 className=" tw-text-[2rem] tw-font-bold tw-mb-0">Dashboard</h1>
        <div className=" tw-flex tw-gap-x-4">
          <div>
            <button className=" tw-rounded tw-border tw-border-[#D7DCE0] tw-flex tw-gap-x-2 tw-p-3 tw-items-center  ">
              This Month <ArrowDownIcon />
            </button>
          </div>
          <div>
            <button className=" tw-border tw-border-[#D4D4D8] tw-rounded-[5px] tw-bg-[#FFC107] tw-flex tw-gap-x-2 tw-p-3 tw-items-center">
              <DownloadIcon /> Export PDF
            </button>
          </div>
        </div>
      </div>

      <div className=" tw-grid tw-grid-cols-3 tw-gap-x-8 tw-mt-10">
        <Card
          text={"TOTAL ORDERS"}
          subText={"2,210"}
          down
          fig={19}
          lastText={"Compared to February"}
          Icon={CartIcon}
        />
        <Card
          text={"TOTAL SALES"}
          subText={"₦128,700"}
          fig={16}
          lastText={"Compared to February"}
          Icon={ProfitIcon}
        />
        <Card
          text={"TOTAL ORDERS"}
          subText={"2,210"}
          fig={36}
          lastText={"Compared to February"}
          Icon={ShoppingBagIcon}
        />
      </div>
      <div className=" tw-flex  tw-pt-8 tw-gap-x-8 tw-font-poppins">
        <div className=" tw-flex-[10] tw-rounded-[3px] tw-border tw-border-black-kwek100 tw-border-opacity-10 tw-p-10 tw-font-poppins">
          <h2 className="tw-mb-0 tw-tracking-[1px] tw-text-lg tw-text-black-kwek100">
            Total Revenue
          </h2>
          <p className="tw-mb-0 tw-font-medium tw-pt-3 tw-text-2xl">
            NGN 2,043,435.98
          </p>
          <div className=" tw-pt-2">
            <DashboardChart />
          </div>
        </div>
        <div className=" tw-border tw-border-[#E4E4E7] tw-rounded-[10px] tw-flex-[5] tw-p-6">
          <h2 className="tw-mb-0 tw-tracking-[1px] tw-text-[#18181B]">
            Active Customers
          </h2>

          <div className=" tw-text-center tw-bg-[#FFF8E4] tw-py-4 tw-mt-4 tw-font-medium tw-text-[2rem]">
            2,210
          </div>
          <p className=" tw-mb-0 tw-pt-3 tw-text-[#71717A] tw-text-sm">
            Recent Transactions
          </p>
          <div className=" tw-space-y-4 tw-pt-4">
            {Array(5)
              .fill(null)
              .map(() => (
                <div className=" tw-flex tw-gap-x-3 tw-items-center">
                  <div className=" flex-[1]">
                    <Image
                      src="/images/pp.png"
                      alt="pp"
                      className="  tw-rounded-full tw-overflow-hidden"
                      height={36}
                      width={36}
                    />
                  </div>
                  <div className=" tw-flex-[9]">
                    <div className=" tw-flex tw-justify-between">
                      <span className=" tw-font-semibold tw-text-sm">
                        Henry Eze
                      </span>
                      <span className=" tw-text-sm">N 18,119</span>
                    </div>
                    <div className=" tw-text-sm tw-text-[#1D1616] tw-text-opacity-40 tw-flex tw-justify-between tw-pt-1">
                      <span>eze3271@gmail.com</span>
                      <span>Lagos</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <Link href="/admin/customers">
            <a className=" tw-uppercase tw-text-xs tw-font-semibold tw-text-[#151518] tw-text-opacity-50 tw-tracking-[1px] tw-flex tw-items-center tw-gap-x-2 tw-pt-6">
              See All customers <ChevronRightIcon width={20} height={20} />
            </a>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
