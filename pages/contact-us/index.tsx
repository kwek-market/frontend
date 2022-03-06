import React from "react";

import ContactUs from "@/components/contactUs/ContactUs";

import { MainLayout } from "@/layouts";

const Page = function () {
  return (
    <MainLayout title="Contact Us">
      <ContactUs />
    </MainLayout>
  );
};

export default Page;
