import CancelIcon from "@/components/icons/cancel";
import Logo from "../../components/UI/Logo";
import SidebarItems from "./sidebar-items";

const SideBarAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`${
        sidebarOpen ? "tw-w-[16.25rem]" : "tw-w-0 tw-overflow-hidden"
      } tw-z-[2] tw-flex lg:tw-w-[16.25rem]  tw-flex-col tw-fixed tw-inset-y-0 tw-bg-black-kwek100 tw-transition-[width] tw-duration-300 tw-ease-out tw-overflow-y-scroll`}
    >
      <div
        className='tw-absolute tw-mt-1 tw-ml-0.5 tw-mr-1.5 tw-right-0  tw-flex tw-justify-end lg:tw-hidden tw-w-auto  tw-h-auto tw-py-0'
        onClick={() => setSidebarOpen(false)}
      >
        <div className='tw-flex tw-justify-start tw-p-2'>
          <CancelIcon />
        </div>
      </div>

      <div className='tw-w-full tw-h-full tw-pt-4'>
        <div className='tw-px-6'>
          <Logo
            className='tw-h-14 tw-w-full tw-overflow-hidden tw-mx-auto'
            src='/svg/kwek-logo-red.png'
            href='/admin'
          />
        </div>

        <div className=' tw-pt-10 tw-h-[80vh] '>
          {/* tw-overflow-y-scroll causing a white line on the sidebar removed for now. */}
          <SidebarItems />
        </div>
        {/* {sidebarOpen ? (
          <div
            className="lg:tw-hidden tw-fixed tw-top-0 tw-right-0 tw-w-[calc(100vw-16.25rem)] tw-bg-black-kwek100 tw-bg-opacity-10 tw-h-screen "
            onClick={() => setSidebarOpen(false)}
          >
            <div className=" tw-flex tw-justify-start tw-p-6">
              <CancelIcon />
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default SideBarAdmin;
