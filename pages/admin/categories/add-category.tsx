import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, RadioField } from "@/components/input/textInput";
import {
  CreateCategoryPayload,
  useCreateCategory,
  useGetAdminCategories,
} from "@/hooks/admin/category";
import { AdminLayout } from "@/layouts";
import { CreateCategorySchema } from "@/validations/createCategory";
import { message } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FileInputLarge } from "../../../components/input/FileInputLarge";
import { ProductCategory } from "../../../components/new-product";
import { RootState } from "../../../store/rootReducer";

// once a category is selected,
// fetch the subcategories
//  update the category array according to the number

const AddCategory = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [formData, setFormDta] = useState<CreateCategoryPayload>({
    name: "",
    visibility: "published",
    children: [],
    category: "",
    subcategory: "",
  });

  const { data: categories, isLoading: isLoadingCategories } = useGetAdminCategories({
    token,
    search: "",
  });

  console.log(categories);

  const handleRadio = (value: string) => {
    setFormDta({ ...formData, visibility: value });
  };

  const { mutate: createMut } = useCreateCategory(token);

  async function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const formalPublishDate = formData.publishDate;
    if (formalPublishDate) {
      formData.publishDate = new Date(formalPublishDate) as any;
    }

    const parsed = await CreateCategorySchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      if (parsed.data.publishDate) {
        parsed.data.publishDate = formalPublishDate as any;
      }

      createMut(parsed?.data, {
        onError: (err: Error) => {
          message.error(err.message);
        },
      });
    } catch (error) {
      message.error(error.message);
    }
  }

  const todayDate = dayjs().format("YYYY-MM-DD");

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

          {categories?.categories ? (
            <ProductCategory
              submitDetails={formData as any}
              setSubmitDetails={(data: any) => {
                console.log("🚀 ~~ AddCategory ~~ data:", data);

                if (data.subcategory) {
                  setFormDta({ ...formData, parent: data.subcategory });
                  return;
                }

                if (data.category) setFormDta({ ...formData, parent: data.category });
              }}
              doNotUseLocal={true}
              categoriesFromParent={categories}
              useNameAsValue
              useAsSubCategory
            />
          ) : null}

          {/* {selectedCategories?.child ? (
            <SelectField
              id='parent'
              label='select a sub category'
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
              {selectedCategories?.child?.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </SelectField>
          ) : null} */}
        </FormItems>

        <FormHead>Visibility</FormHead>
        <FormItems>
          <RadioField
            label='Published'
            checked={formData.visibility == "published"}
            onChange={() => handleRadio("published")}
            name='visibility'
          />
          <RadioField
            label='Scheduled'
            checked={formData.visibility == "scheduled"}
            onChange={() => handleRadio("scheduled")}
            name='visibility'
          />
          <RadioField
            label='Hidden'
            checked={formData.visibility == "hidden"}
            onChange={() => handleRadio("hidden")}
            name='visibility'
          />

          <InputField
            label='Publish Date'
            type='date'
            value={formData?.publishDate || todayDate}
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
