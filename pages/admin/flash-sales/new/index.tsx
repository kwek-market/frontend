import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchSelectInput } from "../../../../components/input/SelectSearchInput";
import { userFetcherWithAuth } from "../../../../helpers";
import { useAdminCreateFlashSales } from "../../../../hooks/admin/flash-sales";
import { GET_PRODUCTS } from "../../../../store/admin/admin.queries";
import { RootState } from "../../../../store/rootReducer";
import { CreateNewFlashSaleSchema } from "../../../../validations/createFlashSale";

interface IFormData {
  discountPercent?: number;
  days?: number;
  productOptionId?: string;
}

const NewFlashSales = () => {
  const token = useSelector((state: RootState) => state.user?.token);

  const [formData, setFormData] = useState<IFormData>({});
  const { mutate: createMut } = useAdminCreateFlashSales(token);

  const createFlashSale = async e => {
    e.preventDefault();

    const parsed = await CreateNewFlashSaleSchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      console.log("🚀 ~~ createFlashSale ~~ parsed.data:", parsed.data);
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
            name: "New Flash sale",
            path: "/admin/marketing/flash-sales/new",
          },
        ]}
        header='New Flash Sale'
      />
      <form className=' tw-mt-16 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <label className=' tw-font-medium'>Select Product</label>
            <SearchSelectInput
              fetchOptions={search => fetchProductsList(search, token)}
              placeholder='Search the user and select'
              onChange={value => {
                setFormData({ ...formData, productOptionId: value?.value });
              }}
              maxTagCount={"responsive"}
            />
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='Discount Percent'
              placeholder='Write your the discount percent'
              type='number'
              onChange={e => setFormData({ ...formData, discountPercent: Number(e.target.value) })}
              step={"0.01"}
            />
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='No of Days active'
              placeholder='Number of days the sales will be active'
              type='number'
              onChange={e => setFormData({ ...formData, days: Number(e.target.value) })}
            />
          </div>
        </FormItems>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={createFlashSale}
        >
          Create Flash Sale
        </button>
      </form>
    </AdminLayout>
  );
};

async function fetchProductsList(search: string, token?: string): Promise<any[]> {
  try {
    const result = await userFetcherWithAuth(GET_PRODUCTS, { search, token, page: 1 }, token);

    return result?.products?.objects?.map(product => ({
      label: `${product.productTitle}`,
      value: product.options[0].id,
    }));
  } catch (error) {
    console.error(error);
  }
}

export default NewFlashSales;
