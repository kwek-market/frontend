import React from "react";

import styles from "./pageTitle.module.scss";
import Link from "next/link";

const Component = function ({ title }: { title: string }) {
  return (
    <div className={styles.first_banner}>
      <div className={styles.sublink}>
        <Link href="/">
          <a className=" tw-cursor-pointer tw-text-white-100">Home</a>
        </Link>
        <i className="fas fa-angle-right" />
        <p>{title}</p>
      </div>
      <p className={styles.category_title}>{title}</p>
    </div>
  );
};

export default Component;
