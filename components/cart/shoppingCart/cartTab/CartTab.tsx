import React from 'react'
import styles from "./cartTab.module.scss";

import Link from "next/link";
import Image from 'next/image'

const CartTab = () => {
    return (
        <div className={styles.tab_container}>
            <div className={styles.tab_content}>
                <a className={styles.active}>1. Shopping Cart</a>
                <i className="fas fa-angle-right"></i>
                <a>2. Checkout</a>
                <i className="fas fa-angle-right"></i>
                <a>3. Order Complete</a>
            </div>
        </div>
    )
}

export default CartTab