import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import {
  InputField,
  RadioField,
  SelectField,
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

  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [parent, setParent] = useState("");
  const [visibility, setVisibility] = useState("");

  const handleRadio = (value: React.SetStateAction<string>) => {
    setVisibility(value);
  };

  const { mutate: createMut } = useCreateCategory(token);

  async function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    console.log("form values: ", name, visibility, publishedDate, parent);

    const parsed = await CreateCategorySchema.safeParseAsync({
      icon,
      name,
      visibility,
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
          <InputField
            label="Name"
            placeholder="e.g Fashion"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SelectField
            id="parent"
            label="Parent"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          >
            <option></option>
          </SelectField>
        </FormItems>

        <FormHead>SubCategory</FormHead>
        <button className=" tw-py-[10px] tw-px-[14px] tw-rounded-[20px] tw-border tw-border-gray-kwek300a tw-w-max tw-mt-6">
          + Add Sub-Category
        </button>

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
          <InputField
            label="Publish Date"
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </FormItems>

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
