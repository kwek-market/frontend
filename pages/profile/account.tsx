import React, { useState } from 'react';

import ExtraInfo from '@/shared/extraInfo/ExtraInfo';

import { MainLayout } from '@/layouts';

import { Menu, ProfileContent } from '@/components/profile/';
import withAuth from '@/hooks/withAuth';

function account() {
  const [activeBtn, setActiveBtn] = useState('Account');

  return (
    <MainLayout title="Profile">
      <div className="tw-grid md:tw-grid-cols-kwek-3 tw-gap-5">
        <Menu activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <ProfileContent activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
      <ExtraInfo />
    </MainLayout>
  );
}

export default withAuth(account);
