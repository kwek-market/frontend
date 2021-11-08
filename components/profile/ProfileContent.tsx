import React from "react";
import ClosedOrderDetails from "./ClosedOrderDetails";
import { Account, Addresses, Empty, Orders, Track } from "./content";
import OpenOrderDetails from "./OpenOrderDetails";

function ProfileContent({ activeBtn, setActiveBtn }) {

  return (
    <div className="tw-border tw-border-gray-500 tw-border-opacity-50 tw-rounded tw-p-2 md:tw-p-5 tw-relative">
      {/* <div className="tw-flex tw-justify-between"> */}
      {activeBtn === "Account" && <Account activeBtn={activeBtn} />}
      {activeBtn === "My Orders" && (
        <Orders activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      )}
      {activeBtn === "Track My Order" && <Track activeBtn={activeBtn} />}
      {activeBtn === "My Addresses" && <Addresses activeBtn={activeBtn} />}
      {activeBtn === "Open Order Details" && (
        <OpenOrderDetails setActiveBtn={setActiveBtn} />
      )}
      {activeBtn === "Closed Order Details" && (
        <ClosedOrderDetails setActiveBtn={setActiveBtn} />
      )}
    </div>
  );
}

export default ProfileContent;
