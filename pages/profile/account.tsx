import React, { useState } from "react";

import Header from "@/shared/header/Header";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";

import { MainLayout } from "@/layouts";

import { useRouter } from "next/router";
import { Menu, ProfileContent } from "@/components/profile/";

function account() {
  const [activeBtn, setActiveBtn] = useState("Account");

  return (
    <MainLayout title={"Profile"}>
      <div className="tw-grid md:tw-grid-cols-kwek-3 tw-gap-5">
        <Menu activeBtn={activeBtn} setActiveBtn={setActiveBtn}  />
        <ProfileContent activeBtn={activeBtn} />
      </div>
      <ExtraInfo />
    </MainLayout>
  );
}

export default account;
