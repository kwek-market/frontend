import React from "react";
import styles from "./AuthLayout.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Topbar } from "@/shared";

const AuthLayout = ({ children, id, withBanner, bannerText }: any) => {
  return (
    <div id={styles[id]} className={styles.authPage}>
      <Topbar withLogo={true} />

      <div className={styles.mainWrapper}>
        {withBanner && (
          <div className={styles.banner}>
            <h1 className={styles.banner_text}>
              {bannerText.lineOne} <br /> {bannerText.lineTwo} <br /> {bannerText.lineThree}
            </h1>
            <Link href="#0">
              <a className={styles.banner_link}>
                <button className={`btn ${styles.btn}`}>
                  <div className={styles.btn_text}>Shop with Kwek</div>
                  <Image
                    className={styles.btn_icon}
                    src="/svg/arrow-right-red.svg"
                    width="24"
                    height="11.6"
                  />
                </button>
              </a>
            </Link>
          </div>
        )}

        <div className={withBanner ? styles.formContainer : styles.formContainer__full}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
