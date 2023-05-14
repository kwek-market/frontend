import AdminTable from "@/components/table";
import Image from "next/image";
import React from "react";

const OrderHistory = () => {
  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: ({ name, image }) => (
        <div className="tw-flex tw-gap-x-2">
          <Image
            src={image}
            alt="pp"
            className="  tw-rounded-full tw-overflow-hidden"
            height={24}
            width={24}
          />
          {name}
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total amount",
      dataIndex: "total_amount",
      key: "total_amount",
    },
    {
      title: "Delivery Location",
      key: "delivery_location",
      dataIndex: "delivery_location",
    },
    {
      title: "Date of Purchase",
      key: "date_of_purchase",
      dataIndex: "date_of_purchase",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: string) => (
        <span
          className={`${
            status.toLowerCase() === "delivered"
              ? "tw-bg-[#009D19]"
              : "tw-bg-[#FFC107]"
          } tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-px-3 tw-py-2`}
        >
          {status}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      customer: {
        image: "/images/pp.png",
        name: "Gbajabiamila Oluwatobiloba",
      },
      quantity: 12,
      total_amount: "N 12,000,000",
      delivery_location: "Oworonshoki, Lagos",
      date_of_purchase: "Nov 12, 2021 | 9:53 AM",
      status: "Delivered",
    },
    {
      key: "2",
      customer: {
        image: "/images/pp.png",
        name: "Gbajabiamila Oluwatobiloba",
      },
      quantity: 12,
      total_amount: "N 12,000,000",
      delivery_location: "Oworonshoki, Lagos",
      date_of_purchase: "Nov 12, 2021 | 9:53 AM",
      status: "Delivered",
    },
    {
      key: "3",
      customer: {
        image: "/images/pp.png",
        name: "Gbajabiamila Oluwatobiloba",
      },
      quantity: 12,
      total_amount: "N 12,000,000",
      delivery_location: "Oworonshoki, Lagos",
      date_of_purchase: "Nov 12, 2021 | 9:53 AM",
      status: "Delivered",
    },
    {
      key: "4",
      customer: {
        image: "/images/pp.png",
        name: "Gbajabiamila Oluwatobiloba",
      },
      quantity: 12,
      total_amount: "N 12,000,000",
      delivery_location: "Oworonshoki, Lagos",
      date_of_purchase: "Nov 12, 2021 | 9:53 AM",
      status: "Pending",
    },
    {
      key: "5",
      customer: {
        image: "/images/pp.png",
        name: "Gbajabiamila Oluwatobiloba",
      },
      quantity: 12,
      total_amount: "N 12,000,000",
      delivery_location: "Oworonshoki, Lagos",
      date_of_purchase: "Nov 12, 2021 | 9:53 AM",
      status: "Delivered",
    },
  ];
  return (
    <div>
      <AdminTable data={data} columns={columns} />
    </div>
  );
};

export default OrderHistory;
