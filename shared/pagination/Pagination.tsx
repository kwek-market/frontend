import styles from "./pagination.module.scss";

const Pagination = function () {
  return (
    <div className={styles.pag_container}>
      <div className={styles.pag_button}>
        <span>
          <i className='fas fa-angle-left' />
          <p>Previous</p>
        </span>
      </div>
      <div className={styles.pag_sub}>
        <span>1</span>
        <a className={styles.pag_active}>2</a>
        <span>3</span>
        <p>...</p>
        <span>23</span>
      </div>
      <div className={styles.pag_button}>
        <span>
          <p>Next</p>
          <i className='fas fa-angle-right' />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
