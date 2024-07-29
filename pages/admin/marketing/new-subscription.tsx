import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, SelectField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import React from "react";

const NewSubscription = () => {
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
            name: "New Subscription",
            path: "/admin/marketing/new-subscription",
          },
        ]}
        header="New Subscription"
      />
      <form
        className=" tw-mt-16 tw-font-poppins"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormHead>Subscription Information</FormHead>
        <FormItems>
          <InputField
            label="Product"
            placeholder="Nestle Milo CRUNCHY CEREALS 320g"
          />

          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
            <SelectField
              label="Category"
              placeholder="Select a Category from the Dropdown"
            >
              <option value="">Select a Category from the Dropdown</option>
            </SelectField>
            <InputField label="Vendor" placeholder="Enter the Vendor Name" />

            <InputField type="date" label="Start Date" />
            <InputField type="date" label="End Date" />
          </div>
        </FormItems>

        <button
          className="  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14"
          type="submit"
        >
          Publish Subscription
        </button>
      </form>
    </AdminLayout>
  );
};

export default NewSubscription;
