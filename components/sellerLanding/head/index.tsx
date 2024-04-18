import { RootState } from "@/store/rootReducer";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const SellerLandingHead = () => {
  const { user, seller } = useSelector((state: RootState) => state);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className=' tw-bg-[#ffffff] tw-py-9 2xl:tw-py-14 tw-px-[5%] tw-flex tw-gap-x-8 lg:tw-gap-x-14'>
      <Link href='/'>
        <img src='/svg/kweklogo.svg' />
      </Link>
      <div className=' tw-font-poppins tw-font-[500] tw-text-sm lg:tw-text-base tw-hidden md:tw-flex tw-gap-x-5  lg:tw-gap-x-16  2xl:tw-text-lg'>
        <Link className='tw-text-black-kwek100' href={"/sell"}>
          Shop
        </Link>
        <Link className='tw-text-black-kwek100' href={"/aboutUs"}>
          About Us
        </Link>
        <Link className='tw-text-black-kwek100' href={"/contact-us"}>
          Contact us
        </Link>
        <Link className='tw-text-black-kwek100' href={"/"}>
          Buy on Kwek
        </Link>
        {!user.user.isSeller ? (
          <Link className='tw-text-black-kwek100' href={"/sell/create-account"}>
            Register now
          </Link>
        ) : (
          <Link className='tw-text-black-kwek100' href='/seller/profile'>
            Account
          </Link>
        )}
      </div>
      <i
        className='fas fa-bars fa-2x tw-text-black-stock tw-block md:tw-hidden'
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <div className='tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-z-30 tw-bg-white-light tw-w-7/12'>
          <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-py-4 md:tw-hidden'>
            <div className='tw-mb-5'>
              <i
                className='fas fa-times fa-2x tw-text-black-stock tw-block md:tw-hidden'
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className=' tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-5'>
              <Link className='tw-text-black-kwek100' href={"/sell"}>
                Shop
              </Link>
              <Link className='tw-text-black-kwek100' href={"/aboutUs"}>
                About Us
              </Link>
              <Link className='tw-text-black-kwek100' href={"/contact-us"}>
                Contact us
              </Link>
              <Link className='tw-text-black-kwek100' href={"/"}>
                Buy on Kwek
              </Link>
              {!user.user.isSeller ? (
                <Link className='tw-text-black-kwek100' href={"/sell/create-account"}>
                  Register now
                </Link>
              ) : (
                <Link className='tw-text-black-kwek100' href='/seller/profile'>
                  Account
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerLandingHead;
