import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, RadioField, SelectField } from "@/components/input/textInput";
import { CreateCategoryPayload, useCreateCategory } from "@/hooks/admin/category";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { CreateCategorySchema } from "@/validations/createCategory";
import { message } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FileInputLarge } from "../../../components/input/FileInputLarge";

const AddCategory = () => {
  const {
    user: { token },
    categories,
  } = useSelector((state: RootState) => state);



  const [formData, setFormDta] = useState<CreateCategoryPayload>({ name: "", visibility: "" });

  const handleRadio = (value: string) => {
    setFormDta({ ...formData, visibility: value });
  };

  const { mutate: createMut } = useCreateCategory(token);

  async function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    console.log("form values: ", formData);

    const formalPublishDate = formData.publishDate;
    if (formalPublishDate) {
      formData.publishDate = new Date(formalPublishDate) as any;
    }

    console.log("🚀 ~~ publish ~~ formData:", formData);

    const parsed = await CreateCategorySchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      if (parsed.data.publishDate) {
        parsed.data.publishDate = formalPublishDate as any;
      }

      createMut(parsed.data, {
        onError: (err: Error) => {
          message.error(err.message);
        },
      });
      console.log("🚀 ~~ publish ~~ parsed.data:", parsed.data);
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
        header='New Category'
      />

      <form className=' tw-pt-2 tw-font-poppins'>
        <FormHead>Basic Information</FormHead>
        <FormItems>
          <InputField
            label='Name'
            placeholder='e.g Fashion'
            value={formData.name}
            onChange={e => setFormDta({ ...formData, name: e.target.value })}
          />
          <SelectField
            id='parent'
            label='Parent Category'
            value={formData.parent}
            onChange={e => {
              if (e.target.value !== "select") {
                setFormDta({ ...formData, parent: e.target.value });
              } else {
                delete formData.parent;
                setFormDta(formData);
              }
            }}
          >
            <option defaultChecked value={"select"}>
              Select..
            </option>
            {categories.categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </SelectField>
        </FormItems>

        <FormHead>Visibility</FormHead>
        <FormItems>
          <RadioField
            label='Published'
            checked={formData.visibility == "published"}
            onChange={() => handleRadio("published")}
          />
          <RadioField
            label='Scheduled'
            checked={formData.visibility == "scheduled"}
            onChange={() => handleRadio("scheduled")}
          />
          <RadioField
            label='Hidden'
            checked={formData.visibility == "hidden"}
            onChange={() => handleRadio("hidden")}
          />

          <InputField
            label='Publish Date'
            type='date'
            value={formData?.publishDate}
            onChange={e => {
              setFormDta({ ...formData, publishDate: e.target.value });
            }}
          />
        </FormItems>

        <FormHead>Image</FormHead>
        <div className='tw-border mt-1'>
          <FileInputLarge
            className='tw-border mt-1'
            onChange={info => {
              const { status } = info.file;

              if (status === "done") {
                setFormDta({ ...formData, icon: JSON.parse(info.file.xhr.response).secure_url });
              }
            }}
          />
        </div>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-16'
          type='submit'
          onClick={e => publish(e)}
        >
          Publish Category
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddCategory;
