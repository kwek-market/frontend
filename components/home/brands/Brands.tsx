import React from 'react'
import styles from './Brands.module.scss'

import Image from 'next/image'

const Brands = () => {
  return (
    <div className={styles.brands}>
      <h3 className={styles.header}>Best Seller Brands</h3>

      <div className={styles.imageContainer}>
        <Image src="/images/brands.png" width="1900" height="161"  />
      </div>
    </div>
  )
}

export default Brands
