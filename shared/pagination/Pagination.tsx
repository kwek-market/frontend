import React from 'react';
import Link from 'next/link';
import styles from './pagination.module.scss';

const Pagination = function () {
  return (
    <div className={styles.pag_container}>
      <div className={styles.pag_button}>
        <a>
          <i className="fas fa-angle-left" />
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
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
