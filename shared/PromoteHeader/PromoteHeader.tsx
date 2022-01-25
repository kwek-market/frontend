import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './PromoteHeader.module.scss'



const PromoteHeader = function({children} :any) {
 
    return (
      <div className={styles.store_option}>
        <div className={styles.option}>
        <div>
            <Image src="/images/keyboard.png" width="30" height="20" className={styles.img} />
         </div>
           <p className={styles.this}>Promote this product</p>
        </div>
        <main className={styles.build}>{children}</main>
        <div className={styles.click}>
              <p className={styles.by}>By clicking the button, you agree to Kwek’s <span>Terms & Conditions</span></p>
            <div className={styles.buttong}>
              <Image src="/images/buttong.png" width="222" height="39" className={styles.img} />
            </div>
          </div>
      </div>
    )
}

export default PromoteHeader

