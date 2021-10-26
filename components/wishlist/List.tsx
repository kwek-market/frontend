import React from "react";
import styles from "./list.module.scss";

import Link from "next/link";
import Image from "next/image";
import ListComponent from "./ListComponent";

const Component = () => {
  return (
    <div className={styles.list_content}>
      <ListComponent
        imgSrc={"/images/shoe2.png"}
        listStyle={styles.list_grid}
        altText={"shoes"}
        itemName={"Timberland MX-720-818"}
        itemPrice={"230.00"}
        itemDate={"January, 28, 2021"}
        inStock={true}
      />
      <ListComponent
        imgSrc={"/images/shoe2.png"}
        listStyle={styles.list_grid_out}
        altText={"shoes"}
        itemName={"Timberland MX-720-818"}
        itemPrice={"230.00"}
        itemDate={"January, 28, 2021"}
        inStock={false}
      />
    </div>
  );
};

export default Component;
