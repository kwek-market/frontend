import React from "react";
import Head from "next/head";
import { FiChevronDown } from "react-icons/fi";

import ReviewList from "../components/seller/reviews/ReviewList";
import { MainLayout } from "@/layouts";
import styles from "../components/seller/reviews/reviews.module.scss";
import ReviewItem from "@/components/seller/reviews/ReviewItem";

// import reviewer from "../public/images/bag.png";
// import seller from "../public/images/seller.png";

const Page = () => {
	return (
		<MainLayout title="Reviews">
			<div>
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
					<p className={styles.description}>product reviews</p>
					<div className={styles.flex}>
						Sort by:{" "}
						<div className={styles.recent}>
							Recent{" "}
							{/* <span className={`material-icons ${styles.star_filled}`}>
								star
							</span> */}
							<FiChevronDown className={styles.dropdownIcon} />
						</div>
					</div>
				</div>
				<hr />
				<div>
					<div className={styles.emptyReviews}>
						<p>You currently have no reviews</p>
					</div>
					{/* <ReviewItem
						name="James Afuye"
						date="Yesterday at 3:20pm"
						reviewBody="Coco Store has one of the best products I have interacted with online.
					Quality shoes, my go-to for boots and sneakers anyday. The Leather
					Winter Ladys Gire is still a brain burster."
						reviewerPic="/images/reviewer.png"
						sellerPic="/images/seller.png"
					/>
					<hr />
					<ReviewItem
						name="Adeleke Funbi"
						date="Yesterday at 3:40 pm"
						reviewBody="Quality product, just needs work on the delivery time. Took too long to get my sister’s prom dress."
						reviewerPic="/images/reviewer1.png"
						sellerPic="/images/seller.png"
					/> */}
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
