import React from "react";
import Head from "next/head";

import { OrdersEmpty } from "@/components/seller/orders";
import { MainLayout } from "@/layouts";

const Page = function () {
	return (
		<MainLayout title="Orders">
			<OrdersEmpty />
		</MainLayout>
	);
};

export default Page;
