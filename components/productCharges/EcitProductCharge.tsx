import { Modal, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IUpdateProductCharge, useUpdateProductCharge } from "../../hooks/admin/productCharges";
import { RootState } from "../../store/rootReducer";
import {
  UpdateProductChargeSchema,
  UpdateProductChargeType,
} from "../../validations/productChargeSchema";
import { FormItems } from "../admin/form";
import { InputField, RadioField } from "../input/textInput";

const EditProductChargeModal = ({
  charge,
  isOpen,
  onClose,
}: {
  charge: IUpdateProductCharge;
  isOpen?: boolean;
  onClose: any;
}) => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [formData, setFormData] = useState<UpdateProductChargeType>({
    charge: charge.charge,
    hasFixedAmount: charge.hasFixedAmount,
    id: charge.id,
  });
  const { mutate: updateMut, isLoading } = useUpdateProductCharge(token);

  const updateProductCharge = async e => {
    e.preventDefault();

    const parsed = await UpdateProductChargeSchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      updateMut(
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
    (<Modal
      title='Edit Product Charge'
      open={isOpen}
      onOk={updateProductCharge}
      confirmLoading={isLoading}
      okButtonProps={{
        className: "tw-font-semibold tw-py-2 tw-rounded tw-text-white-100 tw-bg-[#af1328]",
        type: "primary",
        size: "large",
      }}
      okText='Update Charge'
      onCancel={onClose}
    >
      <div className='tw-bg-white-100 tw-rounded-2xl tw-w-full'>
        <form className='tw-bg-white-100 tw-font-poppins' onSubmit={e => e.preventDefault()}>
          <FormItems>
            <div className='tw-space-y-2'>
              <InputField
                label='Charge'
                placeholder='Write the amount of charge that will be applied to a product'
                type='number'
                value={formData.charge}
                onChange={e => setFormData({ ...formData, charge: Number(e.target.value) })}
              />
            </div>

            <div className='tw-space-y-2'>
              <label className='tw-font-semibold'>Choose Charges Type</label>

              <div className=''>
                <RadioField
                  label='Commission'
                  name='haxFixedAmount'
                  checked={!formData.hasFixedAmount}
                  onChange={e => setFormData({ ...formData, hasFixedAmount: !e.target.checked })}
                />

                <RadioField
                  label='Fixed Amount'
                  name='haxFixedAmount'
                  checked={formData.hasFixedAmount}
                  onChange={e => {
                    setFormData({ ...formData, hasFixedAmount: e.target.checked });
                  }}
                />
              </div>
            </div>
          </FormItems>
        </form>
      </div>
    </Modal>)
  );
};

export default EditProductChargeModal;
