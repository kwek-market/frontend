import React, { useState } from 'react';
import Link from 'next/link';
import styles from './StoreOptions.module.scss'



const StoreOptions = function({children} :any) {
 

 
    return (
      <div className={styles.store_options}>
        <div className={styles.options}>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Home</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/seller/productsEmpty"><a className={styles.link}>Products</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Orders</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Reviews</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Promotions</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Settings</a></Link>
            </p>
            <p className={styles.list}>
              <Link href="/"><a className={styles.link}>Wallet</a></Link>
            </p>
        </div>
        <main className={styles.build}>{children}</main>
      </div>
    )
}

export default StoreOptions

