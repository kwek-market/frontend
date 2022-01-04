import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./cartEmpty.module.scss";

const CartEmpty = function () {
	return (
		<div className={styles.empty_container}>
			<div className={styles.empty_content}>
				<div className={styles.img}>
					<Image src="/svg/cartempty.svg" width="150" height="150" />
				</div>
				<p className={styles.head}>Your cart is empty</p>
				<p className={styles.sub}>You have not added any item to your cart.</p>

				<a href="#!" className={styles.shoppingBtn}>
					Continue Shopping
				</a>
			</div>
		</div>
	);
};

export default CartEmpty;
