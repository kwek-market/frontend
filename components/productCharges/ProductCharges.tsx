import { Empty } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductCharge } from "../../hooks/admin/productCharges";
import { RootState } from "../../store/rootReducer";
import Load from "../Loader/Loader";
import { Naira } from "../UI/NairaSymbol";
import CreateProductCharge from "./CreateProductCharge";
import EditProductChargeModal from "./EcitProductCharge";

interface ProductCharge {
  id: string;
  hasFixedAmount: boolean;
  charge: number;
}
export const ProductCharges = ({ onEdit }: { onEdit?: () => void }) => {
  const [isCreateChargeModalOpen, setIsCreateChargeModalOpen] = useState(false);
  const [isEditChargeModalOpen, setIsEditChargeModalOpen] = useState(false);

  const token = useSelector((state: RootState) => state?.user?.token);

  const {
    data,
    isLoading: isLoadingCharge,
    isError: isChargeError,
    error,
  } = useGetProductCharge(token);

  const productCharge = data?.getProductCharge[0] as ProductCharge;

  return (
    <>
      <div className='tw-max-w-sm tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-m-4'>
        {!isLoadingCharge && productCharge ? (
          <div className='tw-px-6 tw-py-4'>
            <div className='tw-font-bold tw-text-xl tw-mb-2'>Product Charge</div>

            <p className='tw-text-gray-700 tw-text-base'>
              <strong>Charge Type</strong>{" "}
              {productCharge.hasFixedAmount ? "FIXED AMOUNT" : "DISCOUNT"}
            </p>
            <p className='tw-text-gray-700 tw-text-base'>
              <strong>Charge:</strong> {productCharge.hasFixedAmount ? <Naira /> : null}{" "}
              {productCharge.charge} {!productCharge.hasFixedAmount ? "%" : null}
            </p>
          </div>
        ) : null}

        {isLoadingCharge ? <Load /> : null}

        {isChargeError ? <Empty description={(error as any).message} /> : null}

        {!isLoadingCharge ? (
          <div className='tw-px-6 tw-py-4'>
            {!productCharge ? (
              <button
                onClick={() => setIsCreateChargeModalOpen(true)}
                className='tw-bg-green-500 tw-text-white-100 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline tw-mr-2'
              >
                Create
              </button>
            ) : null}

            <button
              onClick={() => setIsEditChargeModalOpen(true)}
              className='tw-bg-yellow-500 tw-text-white-100 tw-hover:bg-green-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline'
            >
              Edit Charges
            </button>
          </div>
        ) : null}
      </div>

      <CreateProductCharge
        isOpen={isCreateChargeModalOpen}
        onClose={() => setIsCreateChargeModalOpen(false)}
      />

      {productCharge ? (
        <EditProductChargeModal
          isOpen={productCharge && isEditChargeModalOpen}
          onClose={() => setIsEditChargeModalOpen(false)}
          charge={productCharge}
        />
      ) : null}
    </>
  );
};
