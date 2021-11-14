import React, { useState } from 'react';
import styles from './Footer.module.scss';

const Component = function () {
  const [email, setEmail] = useState<string>('');

  return (
    <form className={styles.form}>
      <input
        type="email"
        placeholder="Enter your email address..."
        className={styles.form_input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={`btn bg-primary ${styles.btn}`}>Subscribe</button>
    </form>
  );
};

export default Component;
