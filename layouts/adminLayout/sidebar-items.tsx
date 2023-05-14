import React, { useState } from "react";
import AdsIcon from "@/components/icons/admin/sidebar/ads";
import CategoriesIcon from "@/components/icons/admin/sidebar/categories";
import CustomersIcon from "@/components/icons/admin/sidebar/customers";
import DashboardIcon from "@/components/icons/admin/sidebar/dashboard";
import MarketingIcon from "@/components/icons/admin/sidebar/marketing";
import ProductsIcon from "@/components/icons/admin/sidebar/products";
import SettingsIcon from "@/components/icons/admin/sidebar/settings";
import TransactionsIcon from "@/components/icons/admin/sidebar/transactions";
import VendorsIcon from "@/components/icons/admin/sidebar/vendors";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { ChevronDownIcon } from "@heroicons/react/solid";

const SidebarItems = () => {
  const router = useRouter();

  const checkActive = (path: string) => {
    if (router.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  let paths = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      options: [],
      path: "/admin/dashboard",
    },
    {
      name: "Products",
      icon: ProductsIcon,
      options: [],
      path: "/admin/products",
    },
    {
      name: "Manage Categories",
      icon: CategoriesIcon,
      options: [
        { name: "New Category", path: "/admin/categories/add-category" },
        { name: "Category List", path: "/admin/categories/category-list" },
      ],
      path: "/admin/categories",
      open: false,
    },

    {
      name: "Customers",
      icon: CustomersIcon,
      options: [],
      path: "/admin/customers",
    },
    {
      name: "Vendors",
      icon: VendorsIcon,
      options: [],
      path: "/admin/vendors",
    },
    {
      name: "Marketing",
      icon: MarketingIcon,
      options: [],
      path: "/admin/marketing",
    },
    {
      name: "Transactions",
      icon: TransactionsIcon,
      options: [],
      path: "/admin/transactions",
    },
    {
      name: "Ads Management",
      icon: AdsIcon,
      options: [],
      path: "/admin/ads-management",
    },
    {
      name: "Settings",
      icon: SettingsIcon,
      options: [],
      path: "/admin/settings",
    },
  ];

  const [items, setItems] = useState(paths);

  return (
    <div className=" tw-space-y-1">
      {items.map((item, index) =>
        item.options.length > 0 ? (
          <div
            key={index}
            className={`  tw-text-sm tw-cursor-pointer `}
            onClick={() => {
              console.log("yay");
              setItems((prev) => {
                let tempPrev = prev.slice();
                tempPrev[index].open = !tempPrev[index].open;
                return tempPrev;
              });
            }}
          >
            <div
              className={`tw-border-l-4 tw-pl-7  tw-border-transparent tw-py-3 tw-flex tw-items-center tw-gap-x-[10px] ${
                checkActive(item.path)
                  ? "tw-text-[#FABA00] tw-bg-[#D9D9D9] tw-bg-opacity-20 tw-border-l-white-100"
                  : " tw-text-white-100 tw-text-opacity-70"
              } `}
            >
              <item.icon
                fill={checkActive(item.path) ? "#FABA00" : "#ffffffb3"}
              />
              {item.name}
              <ChevronDownIcon className=" tw-w-4 tw-h-4" />
            </div>
            <div
              className={` tw-pl-7  tw-overflow-hidden tw-transition-[max-height] tw-duration-300 tw-ease-out ${
                item.open ? "tw-max-h-20" : "tw-max-h-0"
              }`}
            >
              <div className=" tw-pt-4 tw-flex tw-flex-col tw-gap-y-4 tw-pl-8">
                {item.options.map((option, idx) => (
                  <Link href={option.path}>
                    <a className="tw-text-white-100 tw-text-opacity-70">
                      {option.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link href={item.path} passHref key={index}>
            <div
              className={` tw-border-l-4 tw-border-transparent tw-py-3 tw-pl-7 tw-text-sm tw-cursor-pointer ${
                checkActive(item.path)
                  ? "tw-text-[#FABA00] tw-bg-[#D9D9D9] tw-bg-opacity-20 tw-border-l-white-100"
                  : " tw-text-white-100 tw-text-opacity-70"
              }`}
            >
              <div className=" tw-flex tw-items-center tw-gap-x-[10px]">
                <item.icon
                  fill={checkActive(item.path) ? "#FABA00" : "#ffffffb3"}
                />
                {item.name}
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default SidebarItems;
