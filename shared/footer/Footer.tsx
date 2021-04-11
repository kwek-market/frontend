import React from "react";
import Image from "next/image";
import Link from "next/link";

import Form from "./SubscribeForm";

const Component = () => {
  return (
    <footer className="footer">
      <div className="footer__section footer__section-one">
        <div className="logo">
          <Image
            width="180"
            height="30"
            src="/svg/kwek-logo-white.svg"
            alt="Kwek logo"
            className="logo__image"
          />
        </div>

        <div className="cta">
          <h4 className="cta__heading">NEW TO KWEKMARTKET?</h4>
          <p className="cta__text">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>

        <Form />
      </div>

      <div className="footer__section footer__section-two">
        <nav className="nav">
          <h4 className="nav__header">KWEK</h4>

          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">About Us</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Contact Us</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Career</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Blog</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Terms and condition</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <h4 className="nav__header">Payment</h4>

          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Wallet</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Mastercard</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Paystack</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Visa</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <h4 className="nav__header">Buying On kwek</h4>

          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Buyer Safety Center</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">FAQ</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Delivery</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Kwek Return Policy</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Digital Services</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Bulk Purchase</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <h4 className="nav__header">Make Money With Kwek</h4>

          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Sell On Kwek</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Become A Kwek Affiliate</a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <h4 className="nav__header">More Info</h4>

          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Site Map</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Track My Order</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Privacy Policy</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Authentic Items Policy</a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Billing Policy</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__section footer__section-three">
        <div className="gateways">
          <Image
            width="48"
            height="48"
            src="/svg/visacard.svg"
            alt="visacard"
            className="gateways__image"
          />
        </div>

        <div className="copyright">
          <p className="copyright__text">
            Kwekmarket eCommerce{" "}
            <span className="copyright__symbol">&copy;</span> 2020 . All Rights
            Reserved
          </p>
        </div>

        <div className="social">
          <Link href="/">
            <a className="social__link">
              <Image
                width="28"
                height="28"
                src="/svg/facebook.svg"
                alt="visacard"
                className="social__icon"
              />
            </a>
          </Link>

          <Link href="/">
            <a className="social__link">
              <Image
                width="28"
                height="28"
                src="/svg/instagram.svg"
                alt="visacard"
                className="social__icon"
              />
            </a>
          </Link>

          <Link href="/">
            <a className="social__link">
              <Image
                width="28"
                height="28"
                src="/svg/twitter.svg"
                alt="visacard"
                className="social__icon"
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Component;
