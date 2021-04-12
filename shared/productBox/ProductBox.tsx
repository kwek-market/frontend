import React from 'react'
import styles from './ProductBox.module.scss'
import Image from 'next/image'

const ProductBox = () => {
  return (
    <div className={styles.box} >
      <div className={styles.box_imageContainer}>
        <Image src="/images/.product.png" width="329" height="284" alt="product" />
      </div>
    </div>
  )
}

export default ProductBox
