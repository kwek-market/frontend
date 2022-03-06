import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import Form from "./SubscribeForm";

const Component = function () {
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

        <div className={styles.cta_section}>
          <div className={styles.cta}>
            <h4 className={styles.cta_heading}>NEW TO KWEKMARTKET?</h4>
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
              <Link href="/aboutUs">
                <a className={styles.nav_link}>About Us</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/contact-us">
                <a className={styles.nav_link}>Contact Us</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/terms-of-service">
                <a className={styles.nav_link}>Terms of Service</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Payment</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="https://flutterwave.com/us/">
                <a className={styles.nav_link}>Flutterwave</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Buying On kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/buyerPolicy">
                <a className={styles.nav_link}>Buyer Policy</a>
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
              <Link href="/returnpolicy">
                <a className={styles.nav_link}>Kwek Return Policy</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>Make Money With Kwek</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/sell">
                <a className={styles.nav_link}>Sell On Kwek</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/sellerPolicy">
                <a className={styles.nav_link}>Seller Policy</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h4 className={styles.nav_header}>More Info</h4>

          <ul className={styles.nav_menu}>
            <li className={styles.nav_item}>
              <Link href="/sitemap.xml">
                <a className={styles.nav_link}>Site Map</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/privacyPolicy">
                <a className={styles.nav_link}>Privacy Policy</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/billingPolicy">
                <a className={styles.nav_link}>Billing Policy</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${styles.footer_section} ${styles.footer_sectionThree}`}>
        <div className={styles.gateways}>
          <div className={styles.gateway}>
            <Image
              width="44"
              height="24"
              src="/images/visa.png"
              alt="visacard"
              className={styles.gateways_image}
            />
          </div>

          <div className={styles.gateway}>
            <Image
              width="44"
              height="24"
              src="/images/visa.png"
              alt="visacard"
              className={styles.gateways_image}
            />
          </div>

          <div className={styles.gateway}>
            <Image
              width="44"
              height="24"
              src="/images/visa.png"
              alt="visacard"
              className={styles.gateways_image}
            />
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyright_text}>
            Kwekmarket eCommerce{" "}
            <span className={styles.copyright_symbol}>&copy;</span> 2022 . All
            Rights Reserved
          </p>
        </div>

        <div className={styles.social}>
          <Link href="https://www.facebook.com/Kwekmarket/">
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

          <Link href="https://www.instagram.com/invites/contact/?i=lthbstut4tp&utm_content=6szcidd">
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

          <Link href="https://twitter.com/kwekmarket?t=gFj8_Lp-EA2gJEZ0QZkEFQ&s=09">
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
