import React from 'react'
import styles from "./pagination.module.scss";

import Link from "next/link";

const Pagination = () => {
    return (
        <div className={styles.pag_container}>
            <div className={styles.pag_button}>
                <a>
                    <i className="fas fa-angle-left"></i>
                    <p>Previous</p>
                </a>
            </div>
            <div className={styles.pag_sub}>
                <a>1</a>
                <a className={styles.pag_active}>2</a>
                <a>3</a>
                <p>...</p>
                <a>23</a>
            </div>
            <div className={styles.pag_button}>
                <a>
                    <p>Next</p>
                    <i className="fas fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}

export default Pagination