import ArrowDownIcon from "@/components/icons/admin/nav/arrow-down";
import NotificationIcon from "@/components/icons/admin/nav/notification";
import SearchIcon from "@/components/icons/admin/nav/search";
import CancelIcon from "@/components/icons/cancel";
import { getInitials } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { setSearched } from "@/store/search/search.action";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  const reduxState = useSelector((state: RootState) => state);
  const searchState = reduxState.search;
  const user = reduxState.user;
  const dispatch = useDispatch();
  const elementRef = useRef<HTMLDivElement>(null);

  const triggerMouseOver = useCallback(() => {
    // Trigger the mouseover event on the element if the ref is defined
    const event = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
    });
    elementRef.current?.dispatchEvent(event);
    if (!elementRef.current?.classList.contains("tw-border-[1px]")) {
      elementRef.current?.classList.add("tw-border-[1px]");
    }
    if (!elementRef.current?.classList.contains("tw-rounded-lg")) {
      elementRef.current?.classList.add("tw-rounded-lg");
    }
    if (!elementRef.current?.classList.contains("tw-border-[#1D1616]")) {
      elementRef.current?.classList.add("tw-border-[#1D1616]");
    }
  }, []);

  const [search, setSearch] = useState(searchState.search);

  const handleSearchHover = () => {
    const searchInput = document.querySelector(".searchInput");
    if (searchInput) {
      setTimeout(() => {
        if (searchInput.classList.contains("tw-hidden")) {
          searchInput.classList.remove("tw-hidden");
        }
        if (!searchInput.classList.contains("tw-flex")) {
          searchInput.classList.add("tw-flex");
        }
      }, 200);
    }
  };

  const handleSearchLeave = () => {
    const searchInput = document.querySelector(".searchInput");
    if (searchInput && search == "") {
      setTimeout(() => {
        if (searchInput.classList.contains("tw-flex")) {
          searchInput.classList.remove("tw-flex");
        }
        if (!searchInput.classList.contains("tw-hidden")) {
          searchInput.classList.add("tw-hidden");
        }

        if (elementRef.current?.classList.contains("tw-border-[1px]")) {
          elementRef.current?.classList.remove("tw-border-[1px]");
        }
        if (elementRef.current?.classList.contains("tw-rounded-lg")) {
          elementRef.current?.classList.remove("tw-rounded-lg");
        }
        if (elementRef.current?.classList.contains("tw-border-[#1D1616]")) {
          elementRef.current?.classList.remove("tw-border-[#1D1616]");
        }
      }, 200);
    }
  };

  // dispatch(createProduct(submitDetails, user.token));

  useEffect(() => {
    if (search !== "") {
      triggerMouseOver();
    } else {
      dispatch(setSearched(search, false));
    }

    /////////////////////////////////////////////////////
    const delay = 1500; // Set your desired delay time
    let timeoutId;

    // Clear the previous timeout if the user continues typing
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      if (search !== "") {
        dispatch(setSearched(search, true));
      }
    }, delay);

    // Clean up the timeout on component unmount or when search changes
    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className="tw-sticky tw-top-0 tw-z-[1] tw-bg-white-100 tw-border-b tw-border-b-[#D7DCE0] tw-flex tw-justify-end tw-items-center tw-py-3 lg:tw-py-4 tw-px-4 lg:tw-px-8">
      <div className="tw-flex  lg:tw-gap-x-8 tw-items-center tw-w-full lg:tw-w-max tw-justify-between lg:tw-justify-start transition-all duration-300">
        <div className="lg:tw-hidden">
          <MenuIcon
            color="black"
            onClick={() => setSidebarOpen(true)}
            width={40}
            height={40}
          />
        </div>
        <div className="tw-flex tw-gap-x-6 lg:tw-gap-x-8 tw-items-center tw-w-max tw-justify-between lg:tw-justify-start">
          <div
            ref={elementRef}
            className={`tw-flex hover:tw-border-[1px] hover:tw-rounded-lg hover:tw-border-[#1D1616] tw-items-center tw-gap-x-2 md:tw-gap-x-2 tw-py-1 tw-px-2 tw-transition-all tw-duration-300`}
            onMouseEnter={handleSearchHover}
            onMouseLeave={handleSearchLeave}
          >
            <SearchIcon />
            <div className="tw-hidden tw-items-center tw-gap-x-2 md:tw-gap-x-2 searchInput">
              <input
                className="tw-border-none tw-max-w-[5.5rem] tw-p-0.5"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search != "" ? (
                <div
                  onClick={(e) => {
                    setSearch("");
                    dispatch(setSearched(search, false));
                  }}
                >
                  <CancelIcon height={15} width={15} />
                </div>
              ) : null}
            </div>
          </div>
          <NotificationIcon />

          <div className=" tw-flex tw-gap-x-[10px] tw-items-center tw-justify-self-end">
            <div className=" tw-w-10 tw-h-10 tw-rounded-full tw-overflow-hidden tw-bg-black-kwek100 tw-flex tw-content-center tw-items-center tw-place-content-center">
              <p className="tw-text-white-400 tw-mb-0">
                {getInitials(user?.user?.fullName ?? "")}
              </p>
            </div>
            <div className=" tw-font-poppins">
              <p className=" tw-mb-0 tw-font-semibold tw-text-sm">
                {user?.user?.fullName}
              </p>
              <p className=" tw-mb-0 tw-text-black-kwek100 tw-text-opacity-60 tw-text-[10px]">
                {user?.user?.email}
              </p>
            </div>
          </div>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
