import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, RadioField, SelectField } from "@/components/input/textInput";
import { CreateCategoryPayload, useUpdateCategory } from "@/hooks/admin/category";
import useCategory from "@/hooks/useCategory";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { UpdateCategorySchema } from "@/validations/createCategory";
import { message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ErrorInfo from "../../../../components/Loader/ErrorInfo";
import { FileInputLarge } from "../../../../components/input/FileInputLarge";
import { deletePropertyNullUndefined } from "../../../../helpers/helper";

const EditCategory = () => {
  const token = useSelector((state: RootState) => state.user?.token);
  const categories = useSelector((state: RootState) => state.categories);

  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useCategory({
    id: id as string,
  });

  const [formData, setFormData] = useState<CreateCategoryPayload>(data?.category);

  const { mutate: updateMut } = useUpdateCategory(token);

  const handleRadio = (value: string) => {
    setFormData({ ...formData, visibility: value });
  };

  async function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) {
    e.preventDefault();

    const formalPublishDate = formData.publishDate;
    if (formalPublishDate) {
      formData.publishDate = new Date(formalPublishDate) as any;
    }

    console.log("form values: ", formData);
    // validate with zod

    deletePropertyNullUndefined(formData);

    const parsed = await UpdateCategorySchema.safeParseAsync({ ...formData, id });
    console.log("🚀 ~~ publish ~~ parsed:", parsed);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      if (parsed.data.publishDate) {
        parsed.data.publishDate = formalPublishDate as any;
      }

      updateMut(
        { id, ...parsed.data },
        {
          onError: (err: { message: string }) => {
            message.error(err.message);
          },
        }
      );
    } catch (err) {
      message.error(err.message);
    }
  }

  useEffect(() => {
    const todayDate = dayjs().format("YYYY-MM-DD");
    if (data)
      setFormData({
        name: data.category.name,
        visibility: data.category.visibility,
        icon: data.category.icon,
        parent: data.category?.parent?.name,
        publishDate: data.category.publishDate || todayDate,
      });
  }, [data]);

  console.log("formdata", formData, data);

  if (isLoading && !data)
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
            {
              name: ("Edit category - " + router.query?.id) as string,
              path: ("/admin/categories/edit-category/" + router.query?.id) as string,
            },
          ]}
          header='Edit Category'
        />
        <Load />
      </AdminLayout>
    );

  if (error) {
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
            {
              name: ("Edit category - " + router.query?.id) as string,
              path: ("/admin/categories/edit-category/" + router.query?.id) as string,
            },
          ]}
          header='Edit Category'
        />
        <ErrorInfo error={(error as any).message} />
      </AdminLayout>
    );
  }

  if (data) {
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
            {
              name: ("Edit category - " + router.query?.id) as string,
              path: ("/admin/categories/edit-category/" + router.query?.id) as string,
            },
          ]}
          header='Edit Category'
        />

        <form className=' tw-pt-2 tw-font-poppins'>
          <FormHead>Basic Information</FormHead>
          <FormItems>
            <InputField
              label='Name'
              placeholder='e.g Fashion'
              value={formData?.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <SelectField
              id='parent'
              label='Parent Category'
              value={formData?.parent}
              onChange={e => {
                if (e.target.value !== "select") {
                  setFormData({ ...formData, parent: e.target.value });
                } else {
                  delete formData?.parent;
                  setFormData(formData);
                }
              }}
            >
              <option value={"select"}>Select..</option>
              {categories.categories.map(category => (
                <option
                  defaultChecked={formData?.name == category.name}
                  key={category.id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </SelectField>
          </FormItems>

          <FormHead>Visibility</FormHead>
          <FormItems>
            <RadioField
              label='Published'
              checked={formData?.visibility?.toLowerCase() == "published"}
              onChange={() => handleRadio("published")}
            />
            <RadioField
              label='Scheduled'
              checked={formData?.visibility?.toLowerCase() == "scheduled"}
              onChange={() => handleRadio("scheduled")}
            />
            <RadioField
              label='Hidden'
              checked={formData?.visibility?.toLowerCase() == "hidden"}
              onChange={() => handleRadio("hidden")}
            />
            <InputField
              label='Publish Date'
              type='date'
              value={formData?.publishDate}
              onChange={e => {
                setFormData({ ...formData, publishDate: e.target.value });
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
                  setFormData({ ...formData, icon: JSON.parse(info.file.xhr.response).secure_url });
                }
              }}
              defaultFileList={[
                {
                  name: "category-image",
                  uid: data.category?.id,
                  status: "done",
                  url: data.category?.icon,
                  type: "image",
                  size: 900,
                  originFileObj: null,
                },
              ]}
            />
          </div>

          <button
            className='tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-[#1E944D] tw-border-[#1E944D] tw-mt-16'
            type='button'
            onClick={() => router.push("/admin/categories")}
          >
            Cancel
          </button>

          <button
            className='  tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-16'
            type='submit'
            onClick={e => publish(e, id as string)}
          >
            save changes
          </button>
        </form>
      </AdminLayout>
    );
  }

  return null;
};

export default EditCategory;
