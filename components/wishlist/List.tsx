import React from 'react'
import styles from "./list.module.scss";

import Link from "next/link";
import Image from 'next/image'

const Component = () => {
    return (
        <div className={styles.list_content}>
            <div className={styles.list_grid}>
                <div className={styles.first_grid}>
                    <Image src="/images/shoe2.png" width="100" height="80" className={styles.img} />
                </div>
                <div className={styles.second_grid}>
                    <p className={styles.item_name}>Timberland MX-720-818</p>
                    <p className={styles.item_price}>$230.00</p>
                    <p className={styles.date}>January, 28, 2021</p>
                </div>
                <div className={styles.third_grid}>
                    <p className={styles.stock}>In Stock</p>
                    <a className={styles.buy}>Buy Product</a>
                </div>
            </div>
            <div className={styles.list_grid}>
                <div className={styles.first_grid_second}>
                    <Image src="/images/shoe2.png" width="100" height="80" className={styles.img} />
                </div>
                <div className={styles.second_grid_second}>
                    <p className={styles.item_name}>Timberland MX-720-818</p>
                    <p className={styles.item_price}>$230.00</p>
                    <p className={styles.date}>January, 28, 2021</p>
                </div>
                <div className={styles.third_grid_second}>
                    <p className={styles.stock_out}>Out Of Stock</p>
                    <a className={styles.buy}>Buy Product</a>
                </div>
            </div>
        </div>
    )
}

export default Component;