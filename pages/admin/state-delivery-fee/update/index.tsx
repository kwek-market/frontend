import { Button, Empty, message } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../../../components/Loader/Loader";
import BreadCrumbs from "../../../../components/admin/breadcrumbs";
import { FormHead, FormItems } from "../../../../components/admin/form";
import { CityDeliveryModal } from "../../../../components/admin/stateDelivery/addStateDeliveryModal";
import { convertCitiesToJSON } from "../../../../helpers/helper";
import {
  useDeleteStateDeliveryFee,
  useGetStateDeliveryFee,
} from "../../../../hooks/admin/stateDeliveryFee";
import { AdminLayout } from "../../../../layouts";
import { RootState } from "../../../../store/rootReducer";

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
  const token = useSelector((state: RootState) => state.user?.token);

  const { data, isLoading, error } = useGetStateDeliveryFee({ token });
  const { mutate: deleteMut, isLoading: isDeleteLoading } = useDeleteStateDeliveryFee(token);

  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  const states = data?.stateDeliveryFees;

  const [selectedState, setSelectedState] = useState<IFormData>({});
  const [cities, setCities] = useState([]);

  const [isEditCity, seIsEditCity] = useState(false);
  const [cityToBeEdited, setCityToBeEdited] = useState(null);

  const [formData, setFormData] = useState<IFormData>({});

  useEffect(() => {
    if (Object.keys(selectedState)?.length > 0) {
      const state = states?.find(s => s.state === selectedState.state);
      setSelectedState(state);

      setCities(state?.deliveryFees);
    }
  }, [states]);

  const handleStateChange = event => {
    if (event?.target?.value) {
      const state = states.find(s => s.state === event.target.value);
      setSelectedState(state);

      setCities(state?.deliveryFees);
    }
  };

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "State Delivery Fee", path: "/admin/state-delivery-fee" },
          {
            name: "Update State Delivery",
            path: "/admin/state-delivery-fee/update",
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
                value={selectedState?.state}
                onChange={handleStateChange}
              >
                <option value={null}>--Please choose an option--</option>
                {states.map(state => (
                  <option
                    data-id={state.id}
                    data-fee={state.fee}
                    data-cities={state.city}
                    key={state.state}
                    value={state.state}
                  >
                    {state?.state}
                  </option>
                ))}
              </select>
            ) : null}
          </div>

          {/* <div className='tw-space-y-2'>
            <InputField
              label='Delivery Fee'
              placeholder='Write your the discount fee or charges'
              type='number'
              value={formData.fee}
              onChange={e => setFormData({ ...formData, fee: Number(e.target.value) })}
            />
          </div> */}

          <div className=''>
            <FormHead>Cities</FormHead>

            <div className='tw-mt-4 tw-flex tw-space-x-7'>
              {cities?.map(fee => (
                <button
                  className='tw-flex tw-w-[fit-content] tw-items-center tw-border-2 tw-rounded-md tw-overflow-hidde tw-relative'
                  key={fee.city}
                  onClick={() => {
                    setCityToBeEdited(fee);
                    seIsEditCity(true);
                    setIsCityModalOpen(true);
                  }}
                >
                  <div className='tw-bg-gray-200 tw-py-3 tw-text-gray-700 tw-px-4'>{fee.city}</div>
                  <div className='tw-px-4 tw-py-3 tw-border-l'>{fee.fee}</div>

                  <button
                    onClick={e => {
                      e.stopPropagation();

                      deleteMut(
                        { id: fee.id },
                        {
                          onError: (err: Error) => {
                            message.error(err.message);
                          },
                        }
                      );
                    }}
                    className='tw-absolute tw-right-[-10px] tw-z-20 tw-top-[-20px]'
                  >
                    {isDeleteLoading ? (
                      <i className='fas fa-spinner fa-spin tw-text-blue-500 tw-text-3xl'></i>
                    ) : (
                      <i className='fas fa-times-circle tw-text-red-600 tw-text-3xl'></i>
                    )}
                  </button>
                </button>
              ))}

              {cities?.length === 0 ? <Empty description='NO Cities Added' /> : null}
            </div>

            <Button
              size='large'
              className='tw-my-6'
              type='primary'
              onClick={() => setIsCityModalOpen(true)}
            >
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
          selectedState={selectedState}
          token={token}
          onSubmit={city => {
            const cities = convertCitiesToJSON(formData.city);

            cities.push(city);

            message.success("city added", 1);

            setFormData({ ...formData, city: JSON.stringify(cities) });
          }}
          isEdit={isEditCity}
          data={cityToBeEdited}
        />
      </form>
    </AdminLayout>
  );
};

export default UpdateDeliveryFee;
