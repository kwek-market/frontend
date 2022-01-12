import React from "react";
import Head from "next/head";

import { OrdersFilled } from "@/components/seller/orders";

import { MainLayout } from "@/layouts";

const Page = function () {
	return (
		<MainLayout title="Orders">
			<OrdersFilled />
		</MainLayout>
	);
};

export default Page;
