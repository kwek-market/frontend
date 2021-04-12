import React from "react";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card } from "../index";

const GridContainer = () => {
  return (
    <div id={styles.categoryGrid}>
      <TitleBlock />
      <div className={styles.mainContainer}></div>
      <aside className={styles.sidebarContainer}></aside>
    </div>
  );
};

export default GridContainer;
