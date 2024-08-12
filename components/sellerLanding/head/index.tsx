import { RootState } from "@/store/rootReducer";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../UI/Logo";

const SellerLandingHead = () => {
  const user = useSelector((state: RootState) => state.user);
  const seller = useSelector((state: RootState) => state.seller?.seller);

  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    if (user.token && user?.user?.isSeller) {
      router.push("/seller/profile");
    }
  }, []);

  return (
    <div className=' tw-bg-lightMagenta tw-py-6 2xl:tw-py-9 tw-px-[5%] tw-flex tw-gap-x-8 lg:tw-gap-x-14 tw-justify-between tw-items-center lg:tw-justify-between lg:tw-items-center'>
      <Logo />

      <div className=' tw-font-poppins tw-font-[500] tw-text-sm lg:tw-text-base tw-hidden md:tw-flex tw-gap-x-5  lg:tw-gap-x-16  2xl:tw-text-lg md:tw-items-center'>
        <Link href={"/sell"}>
          <a className='tw-text-black-kwek100'>Shop</a>
        </Link>
        <Link href={"/aboutUs"}>
          <a className='tw-text-black-kwek100'>About Us</a>
        </Link>
        <Link href={"/contact-us"}>
          <a className='tw-text-black-kwek100'>Contact us</a>
        </Link>
        <Link href={"/"}>
          <a className='tw-text-black-kwek100'>Buy on Kwek</a>
        </Link>
        {!user.user.isSeller ? (
          <Link href={"/sell/create-account"}>
            <a className='tw-inline-block tw-bg-red-kwek100 tw-text-white-light tw-px-5 tw-py-3 tw-rounded-sm'>
              Register now
            </a>
          </Link>
        ) : (
          <Link href='/seller/profile'>
            <a className='tw-text-black-kwek100'>Account</a>
          </Link>
        )}
      </div>

      <i
        className='fas fa-bars fa-2x tw-text-black-stock tw-block md:tw-hidden'
        onClick={() => setShowMenu(true)}
      />

      {showMenu && (
        <div className='tw-fixed tw-top-0 tw-right-0 tw-bottom-0 tw-z-30 tw-bg-white-light tw-h-1/2 tw-w-7/12'>
          <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-p  y-4 md:tw-hidden'>
            <div className='tw-mb-5'>
              <i
                className='fas fa-times fa-2x tw-text-black-stock tw-block md:tw-hidden'
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className=' tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-5'>
              <Link href={"/sell"}>
                <a className='tw-text-black-kwek100'>Shop</a>
              </Link>
              <Link href={"/aboutUs"}>
                <a className='tw-text-black-kwek100'>About Us</a>
              </Link>
              <Link href={"/contact-us"}>
                <a className='tw-text-black-kwek100'>Contact us</a>
              </Link>
              <Link href={"/"}>
                <a className='tw-text-black-kwek100'>Buy on Kwek</a>
              </Link>
              {!user.user.isSeller ? (
                <Link href={"/sell/create-account"}>
                  <a className='tw-text-black-kwek100'>Register now</a>
                </Link>
              ) : (
                <Link href='/seller/profile'>
                  <a className='tw-text-black-kwek100'>Account</a>
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
