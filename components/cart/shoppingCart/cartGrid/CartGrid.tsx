import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./cartGrid.module.scss";
import CartTab from "../cartTab/CartTab";
import CartGridComponent from "./cartGridComponent";
import Button from "@/components/buttons/Button";

const CartGrid = function () {
	return (
		<div>
			<CartTab />
			<div className={`${styles.items_container}`}>
				<div className={`${styles.items_content} ${styles.hideShow}`}>
					<div className={styles.grid}>
						<div className={styles.firstBox}>
							<p className={styles.title}>PRODUCT</p>
						</div>
						<div className={styles.secondBox}>
							<p className={styles.title}>PRICE</p>
						</div>
						<div className={styles.thirdBox}>
							<p className={styles.title}>QUANTITY</p>
						</div>
						<div className={styles.forthBox}>
							<p className={styles.title}>SUBTOTAL</p>
						</div>
					</div>
				</div>
				<CartGridComponent />
				{/* <CartGridComponent /> */}
				<div className={styles.bottom_part}>
					<div className={styles.content}>
						<form className={styles.coupon_box}>
							<input type="text" name="Coupon Code" placeholder="Coupon Code" />
							<button type="submit">Apply Coupon</button>
						</form>
						<p>
							Total: <span>$129999.99</span>
						</p>
					</div>
					<p>Delivery Fee is not included yet</p>
					<Link href="/cart/checkout">
						<a>
							<button className={styles.checkout_btn}>
								Proceed to Checkout
							</button>
						</a>
					</Link>
				</div>
			</div>
			<div className="tw-flex tw-flex-row tw-shadow-md tw-bg-white-100 tw-fixed tw-w-full tw-z-10 tw-bottom-0 tw-left-0 tw-right-0 tw-justify-between tw-items-center tw-p-3 md:tw-hidden">
				<div>
					<i className="fas fa-angle-up tw-text-green-success tw-text-base" />
				</div>
				<div className="tw-flex tw-flex-col">
					<span className="tw-text-sm tw-text-black-stock">Total</span>
					<span className="tw-text-gray-kwek200 tw-text-lg tw-font-medium">
						$256
					</span>
					<span className="tw-text-error tw-text-xs">
						* Delivery fee is not included
					</span>
				</div>
				<Button
					buttonStyle="tw-bg-green-success tw-text-white-100 tw-py-5 tw-px-10 tw-rounded"
					text="checkout"
					cmd={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</div>
		</div>
	);
};

export default CartGrid;
