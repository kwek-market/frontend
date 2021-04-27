import React from 'react'
import styles from "./categoryDesc.module.scss";

import Link from "next/link";
import Image from 'next/image'

const Component = ({ title }: any) => {
    return (
        <div>
            <div className={styles.first_banner}>
                <div className={styles.sublink}>
                    <p>Home</p>
                    <i className="fas fa-angle-right"></i>
                    <p>{ title }</p>
                </div>
                <p className={styles.category_title}>{ title }</p>
            </div>
        </div>
    )
}

export default Component;