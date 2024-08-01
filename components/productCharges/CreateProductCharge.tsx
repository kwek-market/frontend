import { Modal, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateProductCharge } from "../../hooks/admin/productCharges";
import { RootState } from "../../store/rootReducer";
import {
  CreateProductChargeSchema,
  CreateProductChargeType,
} from "../../validations/productChargeSchema";
import { FormItems } from "../admin/form";
import { InputField, RadioField } from "../input/textInput";

const CreateProductCharge = ({ isOpen, onClose }: { isOpen?: boolean; onClose: any }) => {
  const token = useSelector((state: RootState) => state.user?.token);

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
    <Modal
      title='Create Product Charge'
      open={isOpen}
      onOk={createProductCharge}
      confirmLoading={isLoading}
      okButtonProps={{
        className: "tw-font-semibold tw-py-2 tw-rounded tw-text-white-100 tw-bg-[#1E944D]",
        type: "primary",
        size: "large",
      }}
      okText='Create Charge'
      onCancel={onClose}
    >
      <div className='tw-bg-white-100 tw-rounded-2xl tw-pt-1 tw-w-full'>
        <form className='tw-bg-white-100 tw-font-poppins' onSubmit={e => e.preventDefault()}>
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
                  label='Commission'
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
        </form>
      </div>
    </Modal>
  );
};

export default CreateProductCharge;
