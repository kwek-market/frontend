import { Button, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateProductCharge } from "../../hooks/admin/productCharges";
import { RootState } from "../../store/rootReducer";
import {
  CreateProductChargeSchema,
  CreateProductChargeType,
} from "../../validations/productChargeSchema";
import { FormHead, FormItems } from "../admin/form";
import { InputField, RadioField } from "../input/textInput";

const CreateProductCharge = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [formData, setFormData] = useState<CreateProductChargeType>({
    charge: 0,
    hasFixedAmount: false,
  });
  const { mutate: createMut, isLoading } = useCreateProductCharge(token);

  const createProductCharge = async e => {
    e.preventDefault();

    const parsed = await CreateProductChargeSchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      createMut(
        { ...parsed.data, token },
        {
          onError: (err: Error) => {
            message.error(err.message);
          },
        }
      );
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className='tw-bg-white-100 tw-px-8 tw-mt-32 tw-rounded-2xl tw-pb-8 tw-pt-1 tw-w-full'>
      <form className='tw-bg-white-100 tw-mt-7 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Create Product Charge</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <InputField
              label='Charge'
              placeholder='Write the amount of charge that will be applied to a product'
              type='number'
              onChange={e => setFormData({ ...formData, charge: Number(e.target.value) })}
            />
          </div>

          <div className='tw-space-y-2'>
            <label>Choose Charges Type</label>

            <div className=''>
              <RadioField
                label='Discount'
                name='haxFixedAmount'
                checked={!formData.hasFixedAmount}
                onChange={e => setFormData({ ...formData, hasFixedAmount: e.target.checked })}
              />

              <RadioField
                label='Fixed Amount'
                name='haxFixedAmount'
                checked={formData.hasFixedAmount}
                onChange={e => setFormData({ ...formData, hasFixedAmount: e.target.checked })}
              />
            </div>
          </div>
        </FormItems>

        <Button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='primary'
          loading={isLoading}
          size='large'
          onClick={createProductCharge}
        >
          Create Charge
        </Button>
      </form>
    </div>
  );
};

export default CreateProductCharge;
