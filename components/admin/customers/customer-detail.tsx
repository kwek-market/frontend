import { Divider } from "antd";
import Image from "next/legacy/image";
import React from "react";

interface CustomerDetailProps {
  image: string;
  name: string;
  email: string;
  phone: string;
}

const CustomerDetail = ({ image, name, email, phone }: CustomerDetailProps) => {
  return (
    <div className=" tw-flex tw-text-gray-kwek300a tw-gap-x-4 tw-items-center">
      <Image
        src={image}
        alt="pp"
        className="  tw-rounded-full tw-overflow-hidden"
        height={72}
        width={72}
      />
      <div className=" text-k">
        <h2 className="tw-mb-0 tw-font-medium tw-text-2xl">{name}</h2>
        <div className=" tw-flex tw-gap-x-[10px] tw-items-center">
          {email}
          <Divider type="vertical" />
          {phone}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
