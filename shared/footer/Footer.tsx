import React from "react";
import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";

import Form from "./SubscribeForm";

const Component = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_section} ${styles.footer_sectionOne}`}>
        <div className={styles.logo}>
          <Image
            width="180"
            height="30"
            src="/svg/kwek-logo-white.svg"
            alt="Kwek logo"
            className={styles.logo_image}
          />
        </div>

        <div className={styles.cta}>
          <h4 className={styles.cta_heading}>NEW TO KWEKMARTKET?</h4>
          <p className={styles.cta_text}>
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>

        <Form />
      </div>

      <div className={`${styles.footer_section} ${styles.footer_sectionTwo}`}>
        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>KWEK</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>About Us</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Contact Us</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Career</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Blog</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Terms and condition</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Payment</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Wallet</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Mastercard</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Paystack</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Visa</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Buying On kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Buyer Safety Center</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>FAQ</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Delivery</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Kwek Return Policy</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Digital Services</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Bulk Purchase</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Make Money With Kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Sell On Kwek</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Become A Kwek Affiliate</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>More Info</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Site Map</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Track My Order</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Privacy Policy</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Authentic Items Policy</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>Billing Policy</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__section footer__section-three">
        <div className={styles.gateways}>
          <Image
            width="48"
            height="48"
            src="/svg/visacard.svg"
            alt="visacard"
            className={styles.gateways_image}
          />
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyright_text}>
            Kwekmarket eCommerce{" "}
            <span className={styles.copyright_symbol}>&copy;</span> 2020 . All Rights
            Reserved
          </p>
        </div>

        <div className={styles.social}>
          <Link href="/">
            <a className={styles.social_link}>
              <Image
                width="28"
                height="28"
                src="/svg/facebook.svg"
                alt="visacard"
                className={styles.social_icon}
              />
            </a>
          </Link>

          <Link href="/">
            <a className={styles.social_link}>
              <Image
                width="28"
                height="28"
                src="/svg/instagram.svg"
                alt="visacard"
                className={styles.social_icon}
              />
            </a>
          </Link>

          <Link href="/">
            <a className={styles.social_link}>
              <Image
                width="28"
                height="28"
                src="/svg/twitter.svg"
                alt="visacard"
                className={styles.social_icon}
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Component;
