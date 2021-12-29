import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./list.module.scss";
import ListComponent from "./ListComponent";

const Component = function () {
	return (
		<div className={styles.list_content}>
			<ListComponent
				imgSrc="/images/shoe2.png"
				listStyle={styles.list_grid}
				altText="shoes"
				itemName="Timberland MX-720-818"
				itemPrice="230.00"
				itemDate="January, 28, 2021"
				inStock
			/>
			<ListComponent
				imgSrc="/images/shoe2.png"
				listStyle={styles.list_grid_out}
				altText="shoes"
				itemName="Timberland MX-720-818"
				itemPrice="230.00"
				itemDate="January, 28, 2021"
				inStock={false}
			/>
		</div>
	);
};

export default Component;
