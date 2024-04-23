import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { clearCart } from "@/store/cart/cart.actions";
import { logout } from "@/store/user/user.actions";
import { clearWishlist } from "@/store/wishlist/wishlist.actions";
import { useAppDispatch } from "../../store";

function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { seller } = useSelector((state: RootState) => state);

  function goBack() {
    router.back();
  }

  function handleLogout() {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearWishlist());
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/seller/profile/#settings">account</Link>
      </Menu.Item>
      <Menu.Item>
        <button onClick={handleLogout}>logout</button>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="tw-bg-red-kwek100 tw-py-4 tw-px-8 tw-flex tw-justify-between">
      <nav>
        <div
          className="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-7 tw-w-7 tw-bg-white-200"
          onClick={goBack}
        >
          <i className="fas fa-long-arrow-alt-left tw-text-white-100" />
        </div>
      </nav>
      <nav>
        <div>
          <p className="tw-font-semibold tw-capitalize tw-text-yellow-filled tw-text-base lg:tw-text-2xl">
            verification
          </p>
        </div>
      </nav>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <div className="tw-text-white-100 tw-bg-none">
          <i className="fas fa-user tw-mr-2" /> Hi {seller.seller.firstname}{" "}
          <i className="fas fa-caret-down" />
        </div>
      </Dropdown>
    </header>
  );
}

export default Header;
