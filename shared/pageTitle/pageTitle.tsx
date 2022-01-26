import React from "react";

import styles from "./pageTitle.module.scss";

const Component = function ({ title }: { title: string }) {
  return (
    <div className={styles.first_banner}>
      <div className={styles.sublink}>
        <p>Home</p>
        <i className="fas fa-angle-right" />
        <p>{title}</p>
      </div>
      <p className={styles.category_title}>{title}</p>
    </div>
  );
};

export default Component;
