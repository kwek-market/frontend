import React from 'react';
import styles from './TitleBlock.module.scss';

const TitleBlock = function ({ title }) {
  return (
    <div className={styles.title}>
      <h3 className={styles.title_heading__noBorder}>{title}</h3>
    </div>
  );
};

export default TitleBlock;
