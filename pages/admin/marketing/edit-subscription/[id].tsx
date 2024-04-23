import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, SelectField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { useRouter } from "next/router";
import React from "react";

const EditSubscription = () => {
  const router = useRouter();
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
            name: "Subscription",
            path: "/admin/marketing/subscription-list",
          },
          {
            name: "Edit Subscription - " + router.query?.id,
            path: "/admin/marketing/edit-subscription/" + router.query?.id,
          },
        ]}
        header="Edit Subscription"
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
            <SelectField label="Category">
              <option value="">Select a Category from the Dropdown</option>
            </SelectField>
            <InputField label="Vendor" placeholder="Enter the Vendor Name" />

            <InputField type="date" label="Start Date" />
            <InputField type="date" label="End Date" />
          </div>
        </FormItems>
        <div className=" tw-flex tw-gap-x-4 tw-mt-14">
          <button className="tw-text-[#1E944D] tw-border tw-border-[#1E944D] tw-rounded tw-py-2 tw-px-6">
            Cancel
          </button>
          <button
            className="  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] "
            type="submit"
          >
            Publish Subscription
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditSubscription;
