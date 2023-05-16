import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, RadioField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import React, { useState } from "react";

const NewCoupon = () => {
  const [couponType, setCouponType] = useState("");
  const handleRadio = (value) => {
    setCouponType(value);
  };
  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Marketing",
            path: "/admin/marketing/subscription-list",
          },
          {
            name: "New Coupon",
            path: "/admin/marketing/new-coupon",
          },
        ]}
        header="New Coupon"
      />
      <form
        className=" tw-mt-16 tw-font-poppins"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormHead>Basic Information</FormHead>
        <FormItems>
          <InputField label="Coupon Code" placeholder="e.g XXYYY376" />
          <div className=" tw-space-y-4">
            <label className=" tw-font-medium">Coupon Type</label>
            <RadioField
              label="Percentage"
              checked={couponType == "percentage"}
              onChange={() => handleRadio("percentage")}
            />
            <RadioField
              label="Free Shipping"
              checked={couponType == "free_shipping"}
              onChange={() => handleRadio("free_shipping")}
            />
            <RadioField
              label="Multibuys"
              checked={couponType == "multibuys"}
              onChange={() => handleRadio("multibuys")}
            />
          </div>
          <InputField
            label="Discount Value"
            placeholder="input the value of the discount given "
          />
          <InputField label="Usage Limit" placeholder="e.g 200" />
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
            <InputField type="date" label="Start Date" />
            <InputField type="date" label="End Date" />
          </div>
        </FormItems>

        <button
          className="  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14"
          type="submit"
        >
          Create Coupon
        </button>
      </form>
    </AdminLayout>
  );
};

export default NewCoupon;
