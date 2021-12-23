import React from "react";
import styles from "./Reviews.module.scss";

const ReviewList = function ({ reviewHeading, salesNumber, salesAmount }) {
	return (
		<div className={styles.review}>
			<p className={styles.sales}>{reviewHeading}</p>
			<p className={styles.salesNumber}>{salesNumber}</p>
			<p className={styles.salesAmount}>{salesAmount}</p>
		</div>
	);
};

export default ReviewList;
