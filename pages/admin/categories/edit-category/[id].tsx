import React, { useState } from "react";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import UploadToCloud from "@/components/icons/admin/upload-to-cloud";
import {
  InputField,
  RadioField,
  TextField,
} from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { useRouter } from "next/router";

const EditCategory = () => {
  const [visibility, setVisibility] = useState("");
  const handleRadio = (value) => {
    setVisibility(value);
  };
  const router = useRouter();
  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Manage Categories",
            path: "/admin/categories/category-list",
          },
          {
            name: "Category List",
            path: "/admin/categories/category-list",
          },
          { name: "Edit category", path: "/admin/categories/edit-category" },
          {
            name: router.query?.id as string,
            path: ("/admin/categories/edit-category/" +
              router.query?.id) as string,
          },
        ]}
        header="Edit Category"
      />

      <form
        className=" tw-pt-2 tw-font-poppins"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormHead>Basic Information</FormHead>
        <FormItems>
          <InputField label="Name" placeholder="e.g Fashion" />
          <div>
            <label className=" tw-font-medium ">Slug</label>
            <div className="tw-flex tw-mt-1">
              <div className=" tw-bg-[#F2F5F9] tw-p-4 tw-text-[#81909D]">
                https://kwekmarket.com/catalog/
              </div>
              <input className=" tw-w-full tw-border tw-border-l-0 tw-border-[#D7DCE0] tw-rounded-r tw-p-4 tw-outline-none" />
            </div>
          </div>
          <TextField
            label="Description"
            placeholder="Type description here..."
          />
        </FormItems>

        <FormHead>SubCategory</FormHead>
        <button className=" tw-py-[10px] tw-px-[14px] tw-rounded-[20px] tw-border tw-border-gray-kwek300a tw-w-max tw-mt-6">
          + Add Sub-Category
        </button>

        <FormHead>Search Engine Optimization</FormHead>
        <FormItems>
          <InputField label="Page Title" />
          <TextField
            label="Meta Descripiton"
            placeholder="Type description here..."
          />
        </FormItems>

        <FormHead>Visibility</FormHead>
        <FormItems>
          <RadioField
            label="Published"
            checked={visibility == "published"}
            onChange={() => handleRadio("published")}
          />
          <RadioField
            label="Scheduled"
            checked={visibility == "scheduled"}
            onChange={() => handleRadio("scheduled")}
          />
          <RadioField
            label="Hidden"
            checked={visibility == "hidden"}
            onChange={() => handleRadio("hidden")}
          />
          <InputField label="Publish Date" type="date" />
        </FormItems>

        <FormHead>Image</FormHead>
        <div className="tw-bg-[#FFFBEF] tw-py-4 tw-mt-10 tw-w-[60vw]  lg:tw-w-[35vw]">
          <div className=" tw-mx-auto tw-w-max tw-text-center">
            <div className=" tw-flex tw-justify-center">
              <UploadToCloud />
            </div>
            <p className="tw-mb-0">Click here to upload image</p>
          </div>
        </div>

        <button
          className="  tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-16"
          type="submit"
        >
          Publish Category
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditCategory;
