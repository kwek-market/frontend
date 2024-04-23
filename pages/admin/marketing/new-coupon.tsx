import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { message } from "antd";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import DateInput from "../../../components/input/DateInput";
import { SearchSelectInput } from "../../../components/input/SelectSearchInput";
import { userFetcherWithAuth } from "../../../helpers";
import { useAdminCreateCoupon } from "../../../hooks/admin/coupon";
import { GET_SELLERS } from "../../../store/admin/admin.queries";
import { RootState } from "../../../store/rootReducer";
import { CreateCouponSchema } from "../../../validations/createCoupon";

interface IFormData {
  userList?: string[];
  value?: number;
  validUntil?: string;
}

const NewCoupon = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [formData, setFormData] = useState<IFormData>({ userList: [] });
  const { mutate: createMut } = useAdminCreateCoupon(token);

  const createCoupon = async e => {
    e.preventDefault();

    const parsed = await CreateCouponSchema.safeParseAsync(formData);

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
            name: "New Coupon",
            path: "/admin/marketing/new-coupon",
          },
        ]}
        header='New Coupon'
      />
      <form className=' tw-mt-16 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <InputField
              label='Discount Value'
              placeholder='input the value of the discount given'
              type='number'
              onChange={e => setFormData({ ...formData, value: Number(e.target.value) })}
            />
          </div>

          <div className='tw-space-y-2'>
            <label className=' tw-font-medium'>Valid until</label>
            <DateInput
              style={{ width: "100%" }}
              disabledDate={date => date && date < moment().endOf("day")}
              onChange={(date, dateString) =>
                setFormData({ ...formData, validUntil: date.toISOString() })
              }
            />
          </div>

          <div className='tw-space-y-2'>
            <label className=' tw-font-medium'>Select Users (Optional)</label>
            <SearchSelectInput
              fetchOptions={search => fetchUserList(search, token)}
              placeholder='Search the user and select'
              onChange={values => {
                setFormData({ ...formData, userList: values.map(value => value.value) });
              }}
            />
          </div>
        </FormItems>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={createCoupon}
        >
          Create Coupon
        </button>
      </form>
    </AdminLayout>
  );
};

async function fetchUserList(username: string, token?: string): Promise<any[]> {
  try {
    const result = await userFetcherWithAuth(GET_SELLERS, { search: username, token }, token);

    return result?.getUserType?.objects?.map(user => ({
      label: `${user.fullName}`,
      value: user.id,
    }));
  } catch (error) {
    console.error(error);
  }
}

export default NewCoupon;
