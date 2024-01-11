import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, RadioField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { useRouter } from "next/router";
import useCategory from "@/hooks/useCategory";
import { UpdateCategorySchema } from "@/validations/createCategory";
import { message, MessageArgsProps } from "antd";
import { useUpdateCategory } from "@/hooks/admin/category";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import Load from "@/components/Loader/Loader";

const EditCategory = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { id } = router.query;
  const { data, isFetching } = useCategory({
    id: id as string,
  });
  console.log("data: ", data);
  const [name, setName] = useState(data?.category?.name);
  const [visibility, setVisibility] = useState(data?.category?.visibility);
  const [publishedDate, setPublishedDate] = useState(
    data?.category?.publishedDate,
  );
  const [parent, setParent] = useState(data?.category?.parent?.name);

  const { mutate: updateMut } = useUpdateCategory(token);

  async function publish(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) {
    e.preventDefault();

    console.log("form values: ", name, visibility, publishedDate, parent);
    // validate with zod
    const parsed = await UpdateCategorySchema.safeParseAsync({
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
      updateMut(
        { id, ...parsed.data },
        {
          onError: (err: { message: string }) => {
            message.error(err.message);
          },
        },
      );
    } catch (err) {
      message.error(err.message);
    }
  }

  if (isFetching)
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
              path: ("/admin/categories/edit-category/" +
                router.query?.id) as string,
            },
          ]}
          header="Edit Category"
        />
        <Load />
      </AdminLayout>
    );

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
            path: ("/admin/categories/edit-category/" +
              router.query?.id) as string,
          },
        ]}
        header="Edit Category"
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
          <InputField
            label="Parent"
            placeholder="Fashion"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          />
        </FormItems>

        <FormHead>Visibility</FormHead>
        <FormItems>
          <RadioField
            label="Published"
            checked={visibility == "published"}
            onChange={() => setVisibility(() => "published")}
          />
          <RadioField
            label="Scheduled"
            checked={visibility == "scheduled"}
            onChange={() => setVisibility(() => "scheduled")}
          />
          <RadioField
            label="Hidden"
            checked={visibility == "hidden"}
            onChange={() => setVisibility(() => "hidden")}
          />
          <InputField
            label="Publish Date"
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </FormItems>

        <button
          className="tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-[#1E944D] tw-border-[#1E944D] tw-mt-16"
          type="button"
          onClick={() => router.push("/admin/categories")}
        >
          Cancel
        </button>

        <button
          className="  tw-font-semibold tw-py-2 tw-px-6 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-16"
          type="submit"
          onClick={(e) => publish(e, id as string)}
        >
          save changes
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditCategory;
