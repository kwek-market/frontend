import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/buttons/Button";
import buttonStyle from "@/styles/buttons.module.scss";
import menuStyle from "./menu.module.scss";
import MenuBox from "@/components/menu/MenuBox";
import CategoryBox from "@/components/menu/CategoryBox";
import { RootState } from "@/store/rootReducer";
import { getInitials2 } from "@/helpers";
import { logout } from "@/store/user/user.actions";
import { clearAccount } from "@/store/account/account.actions";
import { clearSubs } from "@/store/newsletter/newsletter.actions";
import { clearSeller } from "@/store/seller/seller.action";
import { clearCart } from "@/store/cart/cart.actions";
import { clearCategories } from "@/store/category/categories.actions";
import { clearProduct } from "@/store/product/product.action";
import { clearWishlist } from "@/store/wishlist/wishlist.actions";
import Link from "next/link";
import { v4 } from "uuid";

const Menu = function ({}) {
  const dispatch = useDispatch();
  const {
    user,
    cart: { cart },
    categories: { categories },
    wishlist: { wishlists },
  } = useSelector((state: RootState) => state);
  const router = useRouter();

  console.log(categories);

  function handleLogout() {
    dispatch(logout());
    dispatch(clearSubs());
    dispatch(clearAccount());
    dispatch(clearSeller());
    dispatch(clearCategories());
    dispatch(clearProduct());
    dispatch(clearWishlist());
    dispatch(clearCart());
    router.push("/login");
  }

  const menuBoxItems = {
    myCart: {
      icon: "fa-shopping-cart",
      title: "My Cart",
      description:
        cart?.length < 0
          ? "No items in the cart"
          : `${cart.length} items in the cart`,
      link: "/cart",
    },
    trackOrder: {
      icon: "fa-map-marker-alt",
      title: "Track Order",
      description: "View order status",
      link: "/profile/account",
    },
    myOrders: {
      icon: "fa-shopping-bag",
      title: "My Orders",
      description: user.user?.order?.length
        ? `${user.user.order.length} items ordered`
        : "No item ordered",
      link: "/profile/account",
    },
    savedItems: {
      icon: "fa-heart",
      title: "Saved Items",
      description: "View saved items",
      link: "/wishlist",
    },
    sell: {
      icon: "fa-shopping-cart",
      title: "Sell on Kwek",
      description: "Join other merchants",
      link: "/sell",
    },
    address: {
      icon: "fa-home",
      title: "My Addresses",
      description: "View saved addresses",
      link: "/profile/account",
    },
  };

  return (
    <div className={`${menuStyle.menu} md:tw-hidden tw-block`}>
      {user.id === null ? (
        <div className={menuStyle.authDiv}>
          <Button
            buttonStyle={buttonStyle.red_border_button}
            text="Sign up"
            cmd={() => {
              router.push("/create-account");
            }}
          />
          <Button
            buttonStyle={buttonStyle.red_filled_button}
            text="Sign in"
            cmd={() => {
              router.push("/login");
            }}
          />
        </div>
      ) : (
        <div className={menuStyle.userDiv}>
          <div className={menuStyle.userInitials}>
            {user.id !== null && getInitials2(user.user.fullName)}
          </div>
          <div className={menuStyle.user}>
            <span>{user.user.fullName}</span>
            <span>{user.user.username}</span>
          </div>
          <button onClick={() => router.push("/profile/account")}>
            <i className="fas fa-cog fa-2x" />
          </button>
        </div>
      )}
      <div className={menuStyle.menuItems}>
        {Object.entries(menuBoxItems).map((key, val) => (
          <MenuBox
            key={key[1].title}
            icon={key[1].icon}
            title={key[1].title}
            description={key[1].description}
            link={key[1].link}
          />
        ))}
      </div>
      <div className={menuStyle.categories}>
        <p>Categories</p>
        <div>
          {categories.slice(0, 7).map((category, index) => (
            <Link key={index} href={`/category/${category.name}`}>
              <a>
                <CategoryBox
                  key={category.id}
                  name={category.name}
                  icon="/svg/cat-icon-electronics.svg"
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ margin: "15px 0" }}>
        <hr />
      </div>
      <div>
        <Button
          buttonStyle={buttonStyle.btn_block}
          text="Contact Us"
          cmd={() => router.push("/contact-us")}
          icon="fa-phone"
        />
        {user.id && (
          <Button
            buttonStyle={buttonStyle.btn_block_red}
            text="Log out"
            cmd={() => handleLogout()}
            icon="fa-sign-out-alt"
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
