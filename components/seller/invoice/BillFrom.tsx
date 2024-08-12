import { RootState } from "@/store/rootReducer";
import Image from "next/legacy/image";
import { useSelector } from "react-redux";
import Logo from "../../UI/Logo";

export default function BillFrom({ data }) {
  const seller = useSelector((state: RootState) => state.seller?.seller);

  const address = `${seller.shopAddress} ${seller.city}  ${seller.state}`;
  return (
    <div className='tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center tw-border-b w-border-gray-kwek700 tw-pb-3 '>
      <article className='tw-w-full'>
        <h2 className='tw-font-semibold tw-uppercase tw-text-gray-kwek200 md:tw-text-2xl tw-text-lg tw-mb-0'>
          bill from:
        </h2>
        <p className='tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0'>
          {data.store.storeName}
        </p>
        <p className='tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0'>
          {data.store.address}
        </p>
        <p className='tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0 tw-break-words'>
          {data.store.email}
        </p>
      </article>
      <Logo />
    </div>
  );
}
