import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./ordersEmpty.module.scss";

const OrdersEmpty = function () {
	return (
		<div className={styles.empty_container}>
			<h3 className={styles.title}>Orders</h3>

			<div className={styles.empty_content}>
				<div className={styles.img}>
					{/* <Image src="/svg/cartempty.svg" width="150" height="150" /> */}
					<Image src="/svg/orderEmpty.svg" width="200" height="200" />
					{/* <img src="/svg/order-empty.png" alt="" /> */}
				</div>
				<p className={styles.head}>You currently have no orders</p>
				<p className={styles.sub}>Start selling now on Kwekmarketplace</p>

				<a href="#!" className={styles.setShopBtn}>
					Set up your shop
				</a>
			</div>
		</div>
	);
};

export default OrdersEmpty;
