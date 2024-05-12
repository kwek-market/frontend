import { getInitials } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { setSearched } from "@/store/search/search.action";
import { MenuIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useRef, useState } from "react";
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
  }, []);

  const [search, setSearch] = useState(searchState.search);

  const handleSearchHover = () => {
    const searchInput = document.querySelector(".searchInput");
    if (searchInput) {
      setTimeout(() => {
        const classes = [
          ["add", searchInput, "tw-flex"],
          ["remove", searchInput, "tw-hidden"],
          ["add", elementRef.current, "tw-border-[1px]"],
          ["add", elementRef.current, "tw-rounded-lg"],
          ["add", elementRef.current, "tw-border-[#1D1616]"],
        ];

        for (let i = 0; i < classes.length; i++) {
          let element = classes[i][1] as Element | HTMLDivElement;
          const cls = classes[i][2] as string;
          if (classes[i][0] === "add") {
            if (!element.classList.contains(cls)) {
              element.classList.add(cls);
            }
          } else {
            if (element.classList.contains(cls)) {
              element.classList.remove(cls);
            }
          }
        }
      }, 200);
    }
  };

  const handleSearchLeave = () => {
    const searchInput = document.querySelector(".searchInput");
    if (searchInput && search == "") {
      setTimeout(() => {
        const classes = [
          ["remove", searchInput, "tw-flex"],
          ["add", searchInput, "tw-hidden"],
          ["remove", elementRef.current, "tw-border-[1px]"],
          ["remove", elementRef.current, "tw-rounded-lg"],
          ["remove", elementRef.current, "tw-border-[#1D1616]"],
        ];

        for (let i = 0; i < classes.length; i++) {
          let element = classes[i][1] as Element | HTMLDivElement;
          const cls = classes[i][2] as string;
          if (classes[i][0] === "add") {
            if (!element.classList.contains(cls)) {
              element.classList.add(cls);
            }
          } else {
            if (element.classList.contains(cls)) {
              element.classList.remove(cls);
            }
          }
        }
      }, 200);
    }
  };

  useEffect(() => {
    if (search !== "") {
      triggerMouseOver();
    } else {
      dispatch(setSearched(search, false));
    }

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
    <div className='tw-sticky tw-top-0 tw-z-[1] tw-bg-white-100 tw-border-b tw-border-b-[#D7DCE0] tw-flex tw-justify-end tw-items-center tw-py-3 lg:tw-py-4 tw-px-4 lg:tw-px-8'>
      <div className='tw-flex  lg:tw-gap-x-8 tw-items-center tw-w-full lg:tw-w-max tw-justify-between lg:tw-justify-start transition-all duration-300'>
        <div className='lg:tw-hidden'>
          <MenuIcon color='black' onClick={() => setSidebarOpen(true)} width={40} height={40} />
        </div>
        <div className='tw-flex tw-gap-x-6 lg:tw-gap-x-8 tw-items-center tw-w-max tw-justify-between lg:tw-justify-start'>
          {/* <div
            ref={elementRef}
            className={`tw-flex tw-items-center tw-gap-x-2 md:tw-gap-x-2 tw-py-1 tw-px-2 tw-transition-all tw-duration-300`}
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
          </div> */}
          {/* <NotificationIcon /> */}

          <div className=' tw-flex tw-gap-x-[10px] tw-items-center tw-justify-self-end'>
            <div className=' tw-w-10 tw-h-10 tw-rounded-full tw-overflow-hidden tw-bg-black-kwek100 tw-flex tw-content-center tw-items-center tw-place-content-center'>
              <p className='tw-text-white-400 tw-mb-0'>{getInitials(user?.user?.fullName ?? "")}</p>
            </div>
            <div className=' tw-font-poppins'>
              <p className=' tw-mb-0 tw-font-semibold tw-text-sm'>{user?.user?.fullName}</p>
              <p className=' tw-mb-0 tw-text-black-kwek100 tw-text-opacity-60 tw-text-[10px]'>
                {user?.user?.email}
              </p>
            </div>
          </div>
          {/* <ArrowDownIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
