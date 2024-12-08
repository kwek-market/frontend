import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import { useSelector } from "react-redux";
import Logo from "../../components/UI/Logo";
import { RootState } from "../../store/rootReducer";
import Form from "./SubscribeForm";

const Component = function () {
  const user = useSelector((state: RootState) => state.user);
  const seller = useSelector((state: RootState) => state.seller);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_section} ${styles.footer_sectionOne}`}>
        <Logo src='/svg/kwek-logo-red.png' className={`tw-px-2 tw-h-14 tw-w-56 tw-relative`} />

        <div className={styles.cta_section}>
          <div className={styles.cta}>
            <h4 className={styles.cta_heading}>NEW TO KWEKMARKET?</h4>
            <p className={styles.cta_text}>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <Form />
        </div>
      </div>

      <div className={`${styles.footer_sectionTwo}`}>
        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>KWEK</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href='/aboutUs' className={styles.nav_link}>
                About Us
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href='/contact-us' className={styles.nav_link}>
                Contact Us
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href='/terms-of-service' className={styles.nav_link}>
                Terms of Service
              </Link>
            </li>

            {user?.user?.isAdmin ? (
              <li className={styles.nav_item}>
                <Link href='/admin/dashboard' className={styles.nav_link}>
                  Switch to Admin
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
        {/* 
        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Payment</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href='https://flutterwave.com/us/' className={styles.nav_link}>
                Flutterwave
              </Link>
            </li>
          </ul>
        </nav> */}

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Buying On kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href='/buyerPolicy' className={styles.nav_link}>
                Buyer Policy
              </Link>
            </li>

            {/* <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>FAQ</a>
              </Link>
            </li> */}

            {/* <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Delivery</a>
              </Link>
            </li> */}

            <li className={styles.nav_item}>
              <Link href='/returnPolicy' className={styles.nav_link}>
                Kwek Return Policy
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Make Money With Kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href='/seller/profile' className={styles.nav_link}>
                {user?.user?.isSeller ? "Enter Vendor profile" : "Sell on Kwek"}
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/sellerPolicy' className={styles.nav_link}>
                Seller Policy
              </Link>
            </li>
            {user?.user.isSeller && seller?.seller?.shopUrl ? (
              <Link href={`/store/${seller?.seller?.shopUrl}`} className={styles.nav_link}>
                View your shop
              </Link>
            ) : null}
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>More Info</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href='/privacyPolicy' className={styles.nav_link}>
                Privacy Policy
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href='/billingPolicy' className={styles.nav_link}>
                Billing Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${styles.footer_section} ${styles.footer_sectionThree}`}>
        <div className={styles.gateways}>
          <div className={styles.gateway}>
            <Image
              width='44'
              height='24'
              src='/images/visa.png'
              alt='visacard'
              className={styles.gateways_image}
            />
          </div>

          <div className={styles.gateway}>
            <Image
              width='44'
              height='24'
              src='/images/visa.png'
              alt='visacard'
              className={styles.gateways_image}
            />
          </div>

          <div className={styles.gateway}>
            <Image
              width='44'
              height='24'
              src='/images/visa.png'
              alt='visacard'
              className={styles.gateways_image}
            />
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyright_text}>
            Kwekmarket eCommerce <span className={styles.copyright_symbol}>&copy;</span> 2022 . All
            Rights Reserved
          </p>
        </div>

        <div className={styles.social}>
          <Link
            href='https://www.facebook.com/Kwekmarket/'
            className={styles.social_link}
            target='_blank noreferer noopener'
          >
            <Image
              width='28'
              height='28'
              src='/svg/facebook.svg'
              alt='visacard'
              className={styles.social_icon}
            />
          </Link>

          <Link
            href='https://www.instagram.com/invites/contact/?i=lthbstut4tp&utm_content=6szcidd'
            className={styles.social_link}
            target='_blank noreferer noopener'
          >
            <Image
              width='28'
              height='28'
              src='/svg/instagram.svg'
              alt='visacard'
              className={styles.social_icon}
            />
          </Link>

          <Link
            href='https://twitter.com/kwekmarket?t=gFj8_Lp-EA2gJEZ0QZkEFQ&s=09'
            className={styles.social_link}
            target='_blank noreferer noopener'
          >
            <Image
              width='28'
              height='28'
              src='/svg/twitter.svg'
              alt='visacard'
              className={styles.social_icon}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Component;
