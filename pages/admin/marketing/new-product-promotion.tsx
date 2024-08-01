import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchSelectInput } from "../../../components/input/SelectSearchInput";
import { userFetcherWithAuth } from "../../../helpers";

import { GET_PRODUCTS } from "../../../store/admin/admin.queries";
import { RootState } from "../../../store/rootReducer";

import { useAdminPromoteProduct } from "../../../hooks/admin/promotedProducts";
import { PromoteProductSchema } from "../../../validations/promoteProduct";

interface IFormData {
  amount?: number;
  days?: number;
  productId?: string;
}

const NewProductPromotion = () => {
  const token = useSelector((state: RootState) => state.user?.token);

  const [formData, setFormData] = useState<IFormData>({});
  const { mutate: createMut } = useAdminPromoteProduct(token);

  const promoteProduct = async e => {
    e.preventDefault();

    const parsed = await PromoteProductSchema.safeParseAsync(formData);

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
            name: "New Product Promotion",
            path: "/admin/marketing/new-product-promotion",
          },
        ]}
        header='New Product Promotion'
      />
      <form className=' tw-mt-16 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <InputField
              label='Amount for the promotion'
              placeholder='Write your Amount'
              type='number'
              onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })}
              step={"0.01"}
            />
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='No of Days active'
              placeholder='Number of days the promotion will be valid'
              type='number'
              onChange={e => setFormData({ ...formData, days: Number(e.target.value) })}
            />
          </div>

          <div className='tw-space-y-2'>
            <label className=' tw-font-medium'>Select Product</label>
            <SearchSelectInput
              fetchOptions={search => fetchProductsList(search, token)}
              placeholder='Search the user and select'
              onChange={value => {
                setFormData({ ...formData, productId: value?.value });
              }}
              maxTagCount={"responsive"}
            />
          </div>
        </FormItems>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={promoteProduct}
        >
          Promote Product
        </button>
      </form>
    </AdminLayout>
  );
};

async function fetchProductsList(search: string, token?: string): Promise<any[]> {
  try {
    const result = await userFetcherWithAuth(GET_PRODUCTS, { search, token, page: 1 }, token);
    console.log("🚀 ~~ fetchProductsList ~~ result:", result);

    return result?.products?.objects?.map(product => ({
      label: `${product.productTitle}`,
      value: product.id,
    }));
  } catch (error) {
    console.error(error);
  }
}

export default NewProductPromotion;
