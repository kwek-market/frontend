import React from "react";
import Button from "@/components/buttons/Button";
import buttonStyle from "@/styles/buttons.module.scss";
import menuStyle from "./menu.module.scss";
import MenuBox from "@/components/menu/MenuBox";
import CategoryBox from "@/components/menu/CategoryBox";

function Menu({ user, logout, setShowNavBar, setUserNav, userNav }) {
  const menuBoxItems = {
    myCart: {
      icon: "fa-shopping-cart",
      title: "My Cart",
      description: "No items in the cart",
    },
    trackOrder: {
      icon: "fa-map-marker-alt",
      title: "Track Order",
      description: "View order status",
    },
    myOrders: {
      icon: "fa-shopping-bag",
      title: "My Orders",
      description: "No item ordered",
    },
    savedItems: {
      icon: "fa-heart",
      title: "Saved Items",
      description: "View saved items",
    },
    sell: {
      icon: "fa-shopping-cart",
      title: "Sell on Kwek",
      description: "Join other merchants",
    },
    address: {
      icon: "fa-home",
      title: "My Addresses",
      description: "View saved addresses",
    },
  };

  const categories: any[] = [
    { name: "Electronics", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Beauty & Health", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Toy & Kids", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Fashion", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Home & Garden", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Sporting Goods", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Automobile", icon: "/svg/cat-icon-electronics.svg" },
    { name: "Others", icon: "/svg/cat-icon-electronics.svg" },
  ];

  return (
    <div className={menuStyle.menu}>
      <div className={menuStyle.authDiv}>
        <Button
          buttonStyle={buttonStyle.red_border_button}
          text={"Sign up"}
          cmd={() => {
            history.pushState(history.state, "", "/create-account");
          }}
        />
        <Button
          buttonStyle={buttonStyle.red_filled_button}
          text={"Sign in"}
          cmd={() => {
            history.pushState(history.state, "", "/create-account");
          }}
        />
      </div>
      {/* <div className={menuStyle.userDiv}>
        <div className={menuStyle.userInitials}>AE</div>
        <div className={menuStyle.user}>
          <span>Alison Eyo</span>
          <span>alisoneyo@example.com</span>
        </div>
        <div>
          <i className="fas fa-cog fa-2x" />
        </div>
      </div> */}
      <div className={menuStyle.menuItems}>
        {Object.entries(menuBoxItems).map((key, val) => (
          <MenuBox
            key={key[1].title}
            icon={key[1].icon}
            title={key[1].title}
            description={key[1].description}
          />
        ))}
      </div>
      <div className={menuStyle.categories}>
        <p>Categories</p>
        <div>
          {categories.map((category) => (
            <CategoryBox
              key={category.name}
              name={category.name}
              icon={category.icon}
            />
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
          cmd={() => null}
          icon="fa-phone"
        />
        <Button
          buttonStyle={buttonStyle.btn_block_red}
          text="Log out"
          cmd={() => null}
          icon="fa-sign-out-alt"
        />
      </div>
    </div>
  );
}

export default Menu;
