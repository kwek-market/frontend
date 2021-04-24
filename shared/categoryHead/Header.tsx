import React from 'react'
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from 'next/image'

import CategoryDesc from '../categoryDesc/CategoryDesc'

const Component = () => {
    return (
        <div>
            <CategoryDesc title="Fashion" />
            <div className={styles.second_banner}>
                <div className={styles.discountDesc}>
                    <span>THRIFT THURSDAY</span>
                    <p>20%  OFF LEATHER BAGS</p>
                    <Link href="/">
                        <a className={styles.shopButton}>
                            SHOP NOW
                        </a>
                    </Link>
                </div>
                <div className={styles.discountImg}>
                    <div>
                        <Image
                            width="764"
                            height="512"
                            src="/images/bag.png"
                            alt="bag"
                            className={styles.bag_image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component;