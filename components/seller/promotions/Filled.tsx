import React from "react";
import FilledCard from "./FilledCard";
import FilledContent from "./FilledContent";
import FilledHeader from "./FilledHeader";

export default function Filled() {
  return (
    <section className="tw-mt-4 tw-p-4 tw-bg-white-100 tw-shadow-md tw-border tw-border-gray-kwek700 tw-rounded-md">
      <FilledHeader />
      <FilledCard />
      <FilledContent />
    </section>
  );
}
