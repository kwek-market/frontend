import { Modal, message } from "antd";
import { useEffect, useState } from "react";
import {
  useCreateStateDeliveryFee,
  useUpdateStateDeliveryFee,
} from "../../../hooks/admin/stateDeliveryFee";
import {
  CreateStateDeliveryFeeSchema,
  UpdateStateDeliveryFeeSchema,
} from "../../../validations/stateDeliveryFee";
import { InputField } from "../../input/textInput";

export const CityDeliveryModal = ({
  isOpen,
  onClose,
  onSubmit,
  isEdit,
  data,
  selectedState,
  token,
}) => {
  const { mutate: updateStateDeliveryMut, isLoading: isUpdateLoading } =
    useUpdateStateDeliveryFee(token);
  const { mutate: createStateDeliveryMut, isLoading: isCreateLoading } =
    useCreateStateDeliveryFee(token);

  const [cityFormData, setCityFormData] = useState<{
    city: string;
    fee: number;
    id?: string;
    state?: string;
  }>({
    state: selectedState?.state,
    city: data?.city,
    fee: data?.fee,
    id: data?.id,
  });

  useEffect(() => {
    if (isEdit) {
      setCityFormData({ ...data, state: selectedState?.state });
    } else {
      setCityFormData({ city: "", fee: 0, state: selectedState?.state });
    }
  }, [data, selectedState]);

  return (
    <Modal
      title={isEdit ? "Edit City" : "Add City"}
      open={isOpen}
      okText={isEdit ? "Update City" : "Add City"}
      okButtonProps={{ size: "large" }}
      cancelButtonProps={{ size: "large" }}
      onCancel={onClose}
      confirmLoading={isUpdateLoading || isCreateLoading}
      onOk={async e => {
        e.preventDefault();
        console.log(cityFormData);

        try {
          if (isEdit) {
            const parsed = await UpdateStateDeliveryFeeSchema.safeParseAsync(cityFormData);

            if (parsed.success !== true) {
              message.error(parsed.error.errors[0].message);
              return;
            }

            updateStateDeliveryMut(parsed.data, {
              onError: (err: Error) => {
                message.error(err.message);
              },
              onSettled(data) {
                if (!isEdit) {
                  setCityFormData({ city: "", fee: 0, id: undefined });
                }
              },
            });
          } else {
            const parsed = await CreateStateDeliveryFeeSchema.safeParseAsync(cityFormData);

            if (parsed.success !== true) {
              message.error(parsed.error.errors[0].message);
              return;
            }

            createStateDeliveryMut(parsed.data, {
              onError: (err: Error) => {
                message.error(err.message);
              },
              onSettled(data) {
                if (!isEdit) {
                  setCityFormData({ city: "", fee: 0, id: undefined });
                }
              },
            });
          }
        } catch (error) {
          message.error(error.message);
        }
      }}
    >
      <div className='tw-space-y-2'>
        <InputField
          label='City name'
          placeholder='Write the city name'
          type='text'
          value={cityFormData.city}
          onChange={e => setCityFormData({ ...cityFormData, city: e.target.value })}
        />

        <InputField
          label='Fee'
          placeholder='Write the fee for this city'
          type='number'
          value={cityFormData.fee}
          onChange={e => setCityFormData({ ...cityFormData, fee: Number(e.target.value) })}
        />
      </div>
    </Modal>
  );
};
