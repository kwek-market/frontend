import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/buttons/Button';
import buttonStyle from '@/styles/buttons.module.scss';
import menuStyle from './menu.module.scss';
import MenuBox from '@/components/menu/MenuBox';
import CategoryBox from '@/components/menu/CategoryBox';
import { RootState } from '@/store/rootReducer';
import { getInitials2 } from '@/helpers';
import { logout } from '@/store/user/user.actions';
import { clearAccount } from '@/store/account/account.actions';
import { clearSubs } from '@/store/newsletter/newsletter.actions';
import { clearSeller } from '@/store/seller/seller.action';

const Menu = function ({}) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  function handleLogout() {
    dispatch(logout());
    dispatch(clearSubs());
    dispatch(clearAccount());
    dispatch(clearSeller());
    router.push('/login');
  }
  const menuBoxItems = {
    myCart: {
      icon: 'fa-shopping-cart',
      title: 'My Cart',
      description: 'No items in the cart',
      link: '/profile/account',
    },
    trackOrder: {
      icon: 'fa-map-marker-alt',
      title: 'Track Order',
      description: 'View order status',
      link: '/profile/account',
    },
    myOrders: {
      icon: 'fa-shopping-bag',
      title: 'My Orders',
      description: 'No item ordered',
      link: '/profile/account',
    },
    savedItems: {
      icon: 'fa-heart',
      title: 'Saved Items',
      description: 'View saved items',
      link: '/wishlist',
    },
    sell: {
      icon: 'fa-shopping-cart',
      title: 'Sell on Kwek',
      description: 'Join other merchants',
      link: '/sell',
    },
    address: {
      icon: 'fa-home',
      title: 'My Addresses',
      description: 'View saved addresses',
      link: '/profile/account',
    },
  };

  const categories: any[] = [
    { name: 'Electronics', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Beauty & Health', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Toy & Kids', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Fashion', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Home & Garden', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Sporting Goods', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Automobile', icon: '/svg/cat-icon-electronics.svg' },
    { name: 'Others', icon: '/svg/cat-icon-electronics.svg' },
  ];

  return (
    <div className={`${menuStyle.menu} md:tw-hidden tw-block`}>
      {user.id === null ? (
        <div className={menuStyle.authDiv}>
          <Button
            buttonStyle={buttonStyle.red_border_button}
            text="Sign up"
            cmd={() => {
              router.push('/create-account');
            }}
          />
          <Button
            buttonStyle={buttonStyle.red_filled_button}
            text="Sign in"
            cmd={() => {
              router.push('/login');
            }}
          />
        </div>
      ) : (
        <div className={menuStyle.userDiv}>
          <div className={menuStyle.userInitials}>{user.id !== null && getInitials2(user.user.fullName)}</div>
          <div className={menuStyle.user}>
            <span>{user.user.fullName}</span>
            <span>{user.user.username}</span>
          </div>
          <div>
            <i className="fas fa-cog fa-2x" />
          </div>
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
          {categories.map((category) => (
            <CategoryBox key={category.name} name={category.name} icon={category.icon} />
          ))}
        </div>
      </div>
      <div style={{ margin: '15px 0' }}>
        <hr />
      </div>
      <div>
        <Button
          buttonStyle={buttonStyle.btn_block}
          text="Contact Us"
          cmd={() => router.push('/contact-us')}
          icon="fa-phone"
        />
        <Button
          buttonStyle={buttonStyle.btn_block_red}
          text="Log out"
          cmd={() => handleLogout()}
          icon="fa-sign-out-alt"
        />
      </div>
    </div>
  );
};

export default Menu;
