import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import UploadToCloud from "@/components/icons/admin/upload-to-cloud";
import {
  InputField,
  RadioField,
  TextField,
} from "@/components/input/textInput";
import { useCreateCategory } from "@/hooks/admin/category";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { CreateCategorySchema } from "@/validations/createCategory";
import { message } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddCategory = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const [visibility, setVisibility] = useState("");
  const handleRadio = (value: React.SetStateAction<string>) => {
    setVisibility(value);
  };

  const [name, setName] = useState("");
  const [visibilityCat, setVisibilityCat] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [parent, setParent] = useState("");

  const { mutate: createMut } = useCreateCategory(token);

  async function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    console.log("form values: ", name, visibilityCat, publishedDate, parent);

    const parsed = await CreateCategorySchema.safeParseAsync({
      name,
      visibility: visibilityCat,
      publishedDate,
      parent,
    });

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      createMut(parsed.data, {
        onError: (err: Error) => {
          message.error(err.message);
        },
      });
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Manage Categories",
            path: "/admin/categories/category-list",
          },
          { name: "Add new Category", path: "/admin/categories/add-category" },
        ]}
        header="New Category"
      />

      <form className=" tw-pt-2 tw-font-poppins">
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
          onClick={(e) => publish(e)}
        >
          Publish Category
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddCategory;
