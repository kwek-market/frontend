import React from "react";
import Card from "../home/Card";

export default function FilledCard() {
  return (
    <div className="tw-border tw-border-gray-kwek700 tw-rounded-sm tw-p-3 tw-mt-5">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-gray-kwek700 tw-pb-2 tw-bg-[#fcfafa]">
        <p className="tw-font-semibold tw-text-lg tw-text-gray-kwek900 tw-capitalize">
          Analytics
        </p>
        <label>
          {" "}
          showing{" "}
          <select
            placeholder="All time"
            className=""
            value=""
            onChange={() => null}
          >
            <option>all time</option>
          </select>
        </label>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        <Card
          name={"reach"}
          num={"48,890"}
          content="200"
          imgSrc="/svg/team.svg"
          imgAlt="team"
        />
        <Card
          name={"link clicks"}
          num={"102,890"}
          content="200"
          imgSrc="/svg/click.svg"
          imgAlt="clicks"
        />
        <Card
          name={"amount"}
          num={"890,890"}
          content="200"
          imgSrc="/svg/money-bag.svg"
          imgAlt="money-bag"
        />
      </div>
    </div>
  );
}
