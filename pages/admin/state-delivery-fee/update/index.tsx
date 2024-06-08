import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../../../../components/admin/breadcrumbs";
import { FormHead, FormItems } from "../../../../components/admin/form";
import { InputField } from "../../../../components/input/textInput";
import { statesInNigeria } from "../../../../data/nigeriaStateData";
import { useUpdateStateDeliveryFee } from "../../../../hooks/admin/stateDeliveryFee";
import { AdminLayout } from "../../../../layouts";
import { RootState } from "../../../../store/rootReducer";
import { UpdateStateDeliveryFeeSchema } from "../../../../validations/updateStateDeliveryFee";

interface IFormData {
  state?: string;
  fee?: number;
}

const NewFlashSales = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [formData, setFormData] = useState<IFormData>({});
  const { mutate: createMut } = useUpdateStateDeliveryFee(token);

  const handleStateChange = event => {
    if (event?.target?.value) {
      setSelectedState(event.target.value);

      setFormData({ ...formData, state: event.target.value });
    }
  };

  const createFlashSale = async e => {
    e.preventDefault();

    const parsed = await UpdateStateDeliveryFeeSchema.safeParseAsync(formData);

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
          { name: "State Delivery Fee", path: "/admin/dashboard/state-delivery-fee" },
          {
            name: "Update State Delivery",
            path: "/admin/marketing/state-delivery-fee/update",
          },
        ]}
        header='Update State Delivery '
      />
      <form className=' tw-mt-16 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <label className='tw-block tw-font-medium' htmlFor='state'>
              Select a State:
            </label>
            <select
              className='tw-block'
              id='state'
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value=''>--Please choose an option--</option>
              {statesInNigeria.map(state => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='Delivery Fee'
              placeholder='Write your the discount fee or charges'
              type='number'
              onChange={e => setFormData({ ...formData, fee: Number(e.target.value) })}
            />
          </div>
        </FormItems>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={createFlashSale}
        >
          Update State Delivery
        </button>
      </form>
    </AdminLayout>
  );
};

export default NewFlashSales;
