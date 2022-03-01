import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Dropdown, Menu, Drawer, message } from "antd";
import useNotifications from "@/hooks/useNotifications";
import Load from "@/components/Loader/Loader";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import {
  ReadNotificationType,
  UserNotificationType,
} from "@/interfaces/commonTypes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useReadNotifications from "@/hooks/useReadNotifications";
import { QueryClient } from "react-query";
import { clearCart } from "@/store/cart/cart.actions";
import { clearWishlist } from "@/store/wishlist/wishlist.actions";
import { logout } from "@/store/user/user.actions";

dayjs.extend(relativeTime);

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { seller, user } = useSelector((state: RootState) => state);
  const [visible, setVisible] = useState(false);
  const { data, status, error } = useNotifications(user.token);
  const { mutate, isLoading } = useReadNotifications();
  const queryClient = new QueryClient();

  const border =
    router.pathname === "/seller/profile"
      ? "tw-text-yellow-filled tw-border-b-2 tw-border-yellow-filled tw-pb-2"
      : "tw-text-white-100";

  function logOut() {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearWishlist());
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/seller/profile/#settings">
          <a>account</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <button onClick={() => logOut()}>logout</button>
      </Menu.Item>
    </Menu>
  );

  function readNotifications(payload: ReadNotificationType) {
    mutate(payload, {
      onSuccess: (data) => {
        message.success(data.readNotifications.message);
        queryClient.invalidateQueries(["notifications"]);
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    });
  }

  return (
    <Fragment>
      <Drawer
        title="Notifications"
        placement={"right"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"right"}
      >
        {status === "loading" && <Load />}
        {status === "error" && (
          <ErrorInfo error={(error as { message: string }).message} />
        )}
        {status === "success" &&
          data.userNotifications !== undefined &&
          data.userNotifications.length > 0 &&
          data.userNotifications.map((notification: UserNotificationType) => (
            <div
              key={notification.id}
              className="tw-mb-2 hover:tw-bg-yellow-200 tw-cursor-pointer tw-p-2"
              onClick={() =>
                readNotifications({
                  messageId: notification.id,
                  notificationId: notification.notification.id,
                  token: user.token,
                })
              }
            >
              <p className="tw-mb-0 tw-font-semibold tw-text-gray-kwek200">
                {notification.message}
              </p>
              <p className="tw-mb-0 tw-text-brown-kwek200 tw-text-sm">
                about {dayjs(notification.createdAt).fromNow()}
              </p>
            </div>
          ))}
      </Drawer>
      <header className="tw-bg-red-kwek100 tw-py-4 tw-px-8 tw-flex tw-justify-between">
        <nav className="md:tw-flex-[3] lg:tw-flex-[5]">
          <Link href="/">
            <a>
              <img src="/svg/kwek-logo-white.svg" alt="logo" />
            </a>
          </Link>
        </nav>
        <nav className="md:tw-flex tw-justify-between tw-flex-[4] tw-hidden">
          <nav>
            <Link href="/seller/profile">
              <a className={`tw-mr-5 ${border}  tw-capitalize `}>your store</a>
            </Link>
            <Link href="/sell/pricing">
              <a className="tw-mr-5 tw-text-white-100 tw-capitalize tw-pb-2">
                pricing
              </a>
            </Link>
            <Link href="/">
              <a className="tw-mr-5  tw-text-white-100 tw-capitalize  tw-pb-2">
                buy on kwek
              </a>
            </Link>
          </nav>
          <nav className="tw-flex ">
            <div
              className="tw-relative tw-mr-5"
              onClick={() => setVisible(true)}
            >
              <i className="fas fa-bell fa-lg tw-text-yellow-kwek100" />
              <span className="tw-absolute tw--top-1 tw-left-2 tw-text-white-100 tw-h-[0.15rem] tw-w-[0.15rem] tw-p-1.5 tw-z-20 tw-bg-red-notif tw-rounded-full tw-text-[10px] tw-flex tw-justify-center tw-items-center">
                {data !== undefined && data.userNotifications.length}
              </span>
            </div>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <div className="tw-text-white-100 tw-bg-none">
                <i className="fas fa-user tw-mr-2" /> Hi{" "}
                {seller.seller.firstname} <i className="fas fa-caret-down" />
              </div>
            </Dropdown>
          </nav>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
