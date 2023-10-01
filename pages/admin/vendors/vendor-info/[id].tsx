import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Divider, Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormHead } from "@/components/admin/form";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";

const Customer = () => {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");
  const cardData = [
    {
      title: "Total No of Orders",
      content: "17",
    },
    {
      title: "Average Order Value",
      content: "N14,500",
    },
    {
      title: "Total Spent",
      content: "N359,634",
    },
  ];

  const columns = [
    {
      title: "Order Number",
      dataIndex: "order_number",
      key: "order_number",
      render: (order_number) => (
        <Link
          href={
            "/admin/customers/" +
            router.query?.id +
            "/order-detail/" +
            "order-" +
            order_number
          }
        >
          <a className=" tw-text-black-kwek100">{order_number}</a>
        </Link>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "order_date",
      key: "order_date",
    },
    {
      title: "No of Items",
      dataIndex: "no_of_items",
      key: "no_of_items",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
    },
  ];

  const data = [
    {
      key: "1",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "2",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "3",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
    {
      key: "4",
      order_number: "#37812",
      order_date: "13/03/2023",
      no_of_items: "14",
      status: "Shipped",
      amount: "N13,849",
      payment: "Paid",
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Vendors", path: "/admin/vendors/vendor-list" },

          {
            name: router.query?.id as string,
            path: "/admin/vendors/vendor-info/" + router.query?.id,
          },
        ]}
        header="Vendor Info"
        buttonPath=""
        buttonText="Send Email"
      />

      <div className=" tw-mt-12 tw-font-poppins">
        <CustomerDetail
          image="/images/pp.png"
          name="Akomolafe Akadri"
          email="theakomolafeakadri@email.com"
          phone="0812 345 6789"
        />
        <div className=" tw-pt-6  tw-w-[50vw] tw-grid tw-grid-cols-3 tw-gap-x-4">
          {cardData.map((item, index) => (
            <div
              key={index}
              className=" tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans"
            >
              <p className=" tw-mb-0 tw-text-sm tw-text-[#3A434B]">
                {item.title}
              </p>
              <p className="tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div className=" tw-mt-10">
          <div className=" tw-flex tw-justify-between tw-items-center ">
            <h1 className="tw-mb-0 tw-text-2xl tw-font-medium">
              All Products - 32
            </h1>
            <div className=" tw-flex tw-gap-x-2  tw-items-center ">
              <span className=" tw-opacity-70">Sort By:</span>
              <select
                value="all"
                className=" tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="fashion">Fashion</option>
                <option value="auto">Automobiles</option>
              </select>
            </div>
          </div>

          <div className=" tw-grid tw-grid-cols-3 tw-gap-x-4 tw-pt-6">
            {Array(3)
              .fill(null)
              .map((item, index) => (
                <div key={index} className="tw-p-6 tw-shadow-cardShadow">
                  <div className=" tw-relative tw-h-56">
                    <Image
                      layout="fill"
                      src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg"
                      className=" tw-object-cover"
                    />
                  </div>

                  <div className=" tw-pt-6 tw-flex tw-justify-between tw-gap-x-10 tw-items-center">
                    <span className=" tw-font-light tw-text-sm">
                      Women's fashion Shiny High Heels
                    </span>
                    <div className=" tw-text-right">
                      <p className=" tw-mb-0 tw-text-xl tw-font-semibold">
                        $25.00
                      </p>
                      <p className=" tw-mb-0 tw-text-[#C7C0BF] tw-text-xs tw-font-medium tw-line-through">
                        $35.00
                      </p>
                    </div>
                  </div>

                  <div className=" tw-flex tw-justify-between tw-pt-5 tw-items-center">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={5}
                      editing={false}
                      emptyStarColor="#c4c4c4"
                      starColor="#FFC107"
                    />
                    <span className="tw-text-[#BFA5A3] tw-text-xs">
                      (6 Reviews)
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="tw-pt-4">
            <Link href={"#"}>
              <a className=" tw-underline tw-text-[#009D19] ">
                View All Products
              </a>
            </Link>
          </div>
        </div>
        <div className=" tw-py-4">
          <Tabs
            animated
            tabBarStyle={{ borderColor: "red" }}
            className="adminTab"
            activeKey={activeKey}
            onTabClick={(key) => setActiveKey(key)}
          >
            <TabPane tab="Order History" key="1">
              <AdminTable
                data={data.slice(0, 4)}
                columns={columns}
                noPagination
              />
            </TabPane>
          </Tabs>
        </div>

        <Link href={"#"}>
          <a className=" tw-underline tw-text-[#009D19] ">View All 17 Orders</a>
        </Link>

        <FormHead>Address</FormHead>
        <div className=" tw-pt-6 tw-space-y-6">
          {Array(2)
            .fill(null)
            .map((item, index) => (
              <div key={index}>
                <p className="tw-mb-0 tw-font-medium">Maryjane Egbu</p>
                <p className="tw-mb-0 tw-font-light tw-pt-4 tw-text-[#3A434B]">
                  Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178
                </p>
              </div>
            ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customer;

const Card = () => {
  return <div></div>;
};
