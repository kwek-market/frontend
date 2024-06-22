import { Button, Empty, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../../../components/Loader/Loader";
import BreadCrumbs from "../../../../components/admin/breadcrumbs";
import { FormHead, FormItems } from "../../../../components/admin/form";
import { CityDeliveryModal } from "../../../../components/admin/stateDelivery/addStateDeliveryModal";
import { InputField } from "../../../../components/input/textInput";
import { convertCitiesToJSON } from "../../../../helpers/helper";
import {
  useGetStateDeliveryFee,
  useUpdateStateDeliveryFee,
} from "../../../../hooks/admin/stateDeliveryFee";
import { AdminLayout } from "../../../../layouts";
import { RootState } from "../../../../store/rootReducer";
import { UpdateStateDeliveryFeeSchema } from "../../../../validations/updateStateDeliveryFee";

interface IFormData {
  state?: string;
  id?: string;
  city?: string;
  fee?: number;
}

interface IStateDelivery {
  state?: string;
  city?: { name: string; fee: number }[];
  fee?: number;
}

const UpdateDeliveryFee = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data, isLoading, error } = useGetStateDeliveryFee({ token });

  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  const states = data?.getStateDeliveryFee;

  const [selectedState, setSelectedState] = useState<IFormData>({});

  const [isEditCity, seIsEditCity] = useState(false);
  const [cityToBeEdited, setCityToBeEdited] = useState(null);

  const [formData, setFormData] = useState<IFormData>({});
  const { mutate: createMut } = useUpdateStateDeliveryFee(token);

  const handleStateChange = event => {
    if (event?.target?.value) {
      const state = states.find(s => s.state === event.target.value);
      setSelectedState(state);

      const fee = event.target.options[event.target.selectedIndex].dataset.fee;
      const id = event.target.options[event.target.selectedIndex].dataset.id;
      const cities =
        formData.city || event.target.options[event.target.selectedIndex].dataset.cities;

      console.log("🚀 ~~ handleStateChange ~~ cities:", cities);

      setFormData({
        ...formData,
        fee: Number(fee),
        state: event.target.value,
        id,
        city: cities,
      });
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
      <form className=' tw-mt-16 tw-font-poppins ' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <label className='tw-block tw-font-medium' htmlFor='state'>
              Select a State:
            </label>

            {isLoading ? <Load /> : null}
            {states ? (
              <select
                className='tw-block'
                id='state'
                value={selectedState.state}
                onChange={handleStateChange}
              >
                <option value=''>--Please choose an option--</option>
                {states.map(state => (
                  <option
                    data-id={state.id}
                    data-fee={state.fee}
                    data-cities={state.city}
                    key={state.state}
                    value={state.state}
                  >
                    {state?.state}: {state?.fee}
                  </option>
                ))}
              </select>
            ) : null}
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='Delivery Fee'
              placeholder='Write your the discount fee or charges'
              type='number'
              value={formData.fee}
              onChange={e => setFormData({ ...formData, fee: Number(e.target.value) })}
            />
          </div>

          <div className=''>
            <FormHead>Cities</FormHead>

            <div className='tw-mt-4 tw-flex tw-space-x-7'>
              {convertCitiesToJSON(formData.city).map(city => (
                <button
                  className='tw-flex tw-w-[fit-content] tw-items-center tw-border-2 tw-rounded-md tw-overflow-hidde tw-relative'
                  key={city.name}
                  onClick={() => {
                    setCityToBeEdited(city);
                    seIsEditCity(true);
                    setIsCityModalOpen(true);
                  }}
                >
                  <div className='tw-bg-gray-200 tw-py-3 tw-text-gray-700 tw-px-4'>{city.name}</div>
                  <div className='tw-px-4 tw-py-3 tw-border-l'>{city.fee}</div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      const cities = convertCitiesToJSON(formData.city);
                      const newCity = cities.filter(c => city.name !== c.name);
                      setFormData({ ...formData, city: JSON.stringify(newCity) });
                    }}
                    className='tw-absolute tw-right-[-10px] tw-z-20 tw-top-[-20px]'
                  >
                    <i className='fas fa-times-circle tw-text-red-600 tw-text-3xl'></i>
                  </button>
                </button>
              ))}

              {convertCitiesToJSON(formData.city).length === 0 ? (
                <Empty description='NO Cities Added' />
              ) : null}
            </div>

            <Button size="large" className='tw-my-6' onClick={() => setIsCityModalOpen(true)}>
              Add City to this state
            </Button>
          </div>
        </FormItems>

        {/* THE ADD CITY MODAL */}
        <CityDeliveryModal
          isOpen={isCityModalOpen}
          onClose={() => {
            setIsCityModalOpen(false);
            seIsEditCity(false);
            setCityToBeEdited(null);
          }}
          onSubmit={city => {
            const cities = convertCitiesToJSON(formData.city);

            cities.push(city);

            message.success("city added", 1);

            setFormData({ ...formData, city: JSON.stringify(cities) });
          }}
          isEdit={isEditCity}
          data={cityToBeEdited}
        />

        <button
          className='  tw-font-semibold tw-py-3 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={createFlashSale}
        >
          Update State Delivery
        </button>
      </form>
    </AdminLayout>
  );
};

export default UpdateDeliveryFee;
