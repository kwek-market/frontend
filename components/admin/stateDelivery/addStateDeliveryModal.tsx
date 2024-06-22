import { Modal } from "antd";
import { useEffect, useState } from "react";
import { InputField } from "../../input/textInput";

export const CityDeliveryModal = ({ isOpen, onClose, onSubmit, isEdit, data }) => {
  const [cityFormData, setCityFormData] = useState<{ name: string; fee: number }>({
    name: data?.name,
    fee: data?.fee,
  });

  useEffect(() => {
    if (isEdit) {
      setCityFormData(data);
    } else {
      setCityFormData({ name: "", fee: 0 });
    }
  }, [data]);

  return (
    <Modal
      title={isEdit ? "Edit City" : "Add City"}
      visible={isOpen}
      okText={isEdit ? "Update City" : "Add City"}
      onOk={() => {
        onSubmit(cityFormData);

        setCityFormData({ name: "", fee: 0 });
      }}
      onCancel={onClose}
    >
      <div className='tw-space-y-2'>
        <InputField
          label='City name'
          placeholder='Write the city name'
          type='text'
          value={cityFormData.name}
          onChange={e => setCityFormData({ ...cityFormData, name: e.target.value })}
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
