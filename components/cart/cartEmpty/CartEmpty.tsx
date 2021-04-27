import React from 'react'
import styles from "./cartEmpty.module.scss";

import Link from "next/link";
import Image from 'next/image'

const CartEmpty = () => {
    return (
        <div className={styles.empty_container}>
            <div className={styles.empty_content}>
                <div className={styles.img}>
                    <Image src='/svg/cartempty.svg' width='150' height='150' />
                </div>
                <p className={styles.head}>Your cart is empty</p>
                <p className={styles.sub}>You have not added any item to your cart.</p>
            </div>
        </div>
    )
}

export default CartEmpty