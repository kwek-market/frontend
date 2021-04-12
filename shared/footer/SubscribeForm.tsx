import React from 'react';
import styles from './Footer.module.scss'

const Component = () => {
  return (
    <form className={styles.form}>
      <input type="email" placeholder='Enter your email address...' className={styles.form_input} />
      <button className={`btn bg-primary ${styles.btn}`}>Subscribe</button>
    </form>
  )
}

export default Component