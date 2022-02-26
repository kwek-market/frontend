import React from "react";
import Card from "./Card";
import ProgressText from "./ProgressText";

export default function Home() {
  return (
    <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[5fr,2fr] tw-gap-3 tw-my-4">
      <section className="">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-3">
          <Card
            name="order sales"
            content="NGN 13,000"
            num={"NGN 100,000"}
            imgSrc={"/svg/bag.svg"}
            imgAlt={"order"}
          />
          <Card
            name="Days selling on Kwek"
            num={"1200"}
            content="NGN 13,000"
            imgSrc={"/svg/calendar.svg"}
            imgAlt={"days-selling"}
          />
          <Card
            name="products"
            content="30"
            num={"209"}
            imgSrc={"/svg/received.svg"}
            imgAlt={"products"}
          />
        </div>
        <section className="tw-p-2 tw-bg-white-100 tw-mt-3 tw-border tw-border-gray-kwek700 tw-rounded-md">
          <div className="tw-flex tw-justify-between tw-items-center tw-p-3">
            <p className="tw-uppercase tw-text-sm tw-text-gray-kwek900 tw-font-semibold tw-mb-0 tw-flex">
              revenue
              <img
                src="/svg/rise.svg"
                alt="vector"
                className="tw-w-5 tw-h-5 tw-ml-2"
              />
            </p>
            <select className="tw-border-0 tw-py-0 tw-outline-none">
              <option value="this year">This year</option>
            </select>
          </div>
        </section>
      </section>
      <aside>
        <div className="tw-mb-4">
          <ProgressText text={"product quality"} val="50" />
          <ProgressText text={"delivery rate"} val="50" />
          <ProgressText text={"response time"} val="50" />
        </div>
        <div className="tw-grid tw-grid-cols-1 tw-gap-3 tw-mt-4">
          <Card
            name="successful sales"
            content="29"
            num={"209"}
            imgSrc={"/svg/sale.svg"}
            imgAlt={"sales"}
          />
          <Card
            name="sales earnings"
            content="NGN 13,000"
            num={"NGN 100,000"}
            imgSrc={"/svg/profits.svg"}
            imgAlt={"earnings"}
          />
          <Card
            name="customers"
            content="30"
            num={"NGN 100,000"}
            imgSrc={"/svg/customer-review.svg"}
            imgAlt={"customers"}
          />
        </div>
      </aside>
    </section>
  );
}
