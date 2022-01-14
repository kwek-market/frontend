import React from "react";

import ReviewList from "../components/seller/reviews/ReviewList";
import { MainLayout } from "@/layouts";
import styles from "../components/seller/reviews/reviews.module.scss";
import { FaChevronDown } from "react-icons/fa";

const Page = function () {
	return (
		<MainLayout title="Reviews">
			<h2 className={styles.heading}>Reviews</h2>

			<p className={styles.description}>store performance</p>

			<hr />

			<div className={styles.container}>
				<ReviewList
					reviewHeading="successful sales"
					salesNumber="0"
					salesAmount="This month - NGN 0"
				/>
				<ReviewList
					reviewHeading="product quality"
					salesNumber="0%"
					salesAmount="This month - NGN 0%"
				/>
				<ReviewList
					reviewHeading="delivery rate"
					salesNumber="0%"
					salesAmount="This month - NGN 0%"
				/>
				<ReviewList
					reviewHeading="communication"
					salesNumber="0%"
					salesAmount="This month - NGN 0%"
				/>
			</div>

			<div className={styles.flex1}>
				<p className={styles.description}>product review</p>

				<div className={styles.flex}>
					Sort by:{" "}
					<div className={styles.recent}>
						recent{" "}
						<span style={{ color: "#1D1616" }}>
							<FaChevronDown />
						</span>
					</div>
				</div>
			</div>

			<hr />
			<div className={styles.emptyReviews}>
				<p>You currently have no reviews</p>
			</div>
		</MainLayout>
	);
};

export default Page;
