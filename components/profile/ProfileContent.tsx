import React from "react";
import { Account, Addresses, Empty, Orders, Track } from "./content";

function ProfileContent({ activeBtn }) {
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="tw-border tw-border-gray-500 tw-border-opacity-50 tw-rounded tw-p-2 md:tw-p-5 tw-relative">
      {/* <div className="tw-flex tw-justify-between"> */}
        {activeBtn === "Account" && <Account activeBtn={activeBtn} />}
        {activeBtn === "My Orders" && <Orders activeBtn={activeBtn} />}
        {activeBtn === "Track My Order" && <Track activeBtn={activeBtn} />}
        {/* {activeBtn === "Sell On Kwek" && <Account activeBtn={activeBtn} />} */}
        {activeBtn === "My Addresses" && <Addresses activeBtn={activeBtn} />}
      {/* </div> */}
    </div>
  );
}

export default ProfileContent;
