import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss';
import Carousel from '@/components/Carousel/Carousel';

import { CategoryMenu } from '../index';
import { Topbar } from '@/shared';

const Hero = function () {
  const carouselEl = [
    {
      element: (
        <div className="">
          <img
            src="/images/banner.png"
            alt="banner"
            className="tw-rounded-lg"
            style={{ width: '1000px', height: '300px' }}
          />
        </div>
      ),
    },
    {
      element: (
        <div
          className="tw-bg-gray-kwek200 tw-text-center tw-py-7 tw-px-10 tw-rounded-lg tw-flex tw-justify-between tw-flex-col tw-items-center tw-h-full"
          style={{ height: '300px', width: '87vw' }}
        >
          <div>
            <h4 className="tw-text-white-100 tw-uppercase tw-text-2xl md:tw-text-4xl tw-font-bold">black friday.</h4>
          </div>
          <div>
            <h3 className="tw-text-red-kwek100 tw-font-bold tw-text-xl md:tw-text-3xl">Save up to 50%</h3>
          </div>
          <div>
            <h2 className="tw-capitalize tw-text-lg md:tw-text-2xl tw-text-white-100">deals ends:</h2>
            <div>
              <span className="sm:tw-border tw-border-white-100 tw-rounded-md sm:tw-mx-2 sm:tw-p-2 tw-mr-2">
                <span className="tw-text-white-100">81</span> <span className="tw-text-red-kwek100">D</span>
              </span>
              <span className="sm:tw-border tw-border-white-100 tw-rounded-md sm:tw-mx-2 sm:tw-p-2 tw-mr-2">
                <span className="tw-text-white-100">17</span> <span className="tw-text-red-kwek100">H</span>
              </span>
              <span className="sm:tw-border tw-border-white-100 tw-rounded-md sm:tw-mx-2 sm:tw-p-2 tw-mr-2">
                <span className="tw-text-white-100">26</span> <span className="tw-text-red-kwek100">M</span>
              </span>
              <span className="sm:tw-border tw-border-white-100 tw-rounded-md sm:tw-mx-2 sm:tw-p-2">
                <span className="tw-text-white-100">47</span> <span className="tw-text-red-kwek100">S</span>
              </span>
            </div>
          </div>
          <div>
            <Link href="/more">
              <a className="tw-text-brown-kwek200 tw-border tw-mt-3 tw-border-brown-kwek100 tw-p-3 tw-uppercase tw-rounded-md">
                learn more
              </a>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id={styles.hero}>
      <CategoryMenu />
      <Carousel slides={carouselEl} height="300px" />
      <div className={`${styles.banner} tw-hidden md:tw-flex tw-justify-between tw-items-stretch`}>
        <div className={`${styles.banner_section} ${styles.banner_section__one}`}>
          <div className={styles.banner_textContainer}>
            <p className={styles.banner_text}>BUY TWO, Get</p>
            <button className={`${styles.btn} btn`}>☆ 1 FREE ☆</button>
          </div>

          <div className={styles.banner_textContainer}>
            <h3 className={styles.banner_heading}>FOR WOMEN</h3>
            <p className={styles.banner_text}>
              <b>Get up to 30% Off</b> on all Products
            </p>
            <small className={styles.banner_subtext}>Get Free Shipping on all orders over $99.90</small>
          </div>

          <div className={styles.banner_textContainer}>
            <button className={`${styles.btn} btn`}>
              SHOP NOW <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>

        <div className={`${styles.banner_section} ${styles.banner_section__two}`}>
          <img src="/svg/hero-woman.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
