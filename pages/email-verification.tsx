import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '@/layouts';
import Button from '@/components/buttons/Button';
import { RootState } from '@/store/rootReducer';
import { clearAccount } from '@/store/account/account.actions';

const Emailverification = function () {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.account);
  const router = useRouter();

  useEffect(() => {
    if (account.email === '') {
      import('antd').then(({ message }) => {
        message.error('Email is not set');
      });
      router.push('/create-account');
    }
  }, []);

  return (
    <AuthLayout id="emailVerification" withBanner={false}>
      <div className="tw-flex tw-h-[80vh] tw-flex-col tw-justify-center tw-items-center tw-p-2 md:tw-p-0">
        <h3 className="tw-text-red-kwek100 tw-font-bold tw-text-base md:tw-text-xl lg:tw-text-3xl tw-text-center">
          Verify your email to finish signing up to Kwek
        </h3>
        <p className="tw-text-black-stock tw-text-sm md:tw-text-base">Thank you for choosing Kwek</p>
        <p className="tw-text-black-stock tw-text-sm md:tw-text-base">
          Please confirm that <strong>{account.email} </strong>is your email address by clicking on the link sent to
          your email within the next 24 hours
        </p>
        <Button
          buttonStyle="tw-py-2 tw-px-4 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-capitalize"
          text="sign in"
          cmd={() => {
            router.push('/login');
            dispatch(clearAccount());
          }}
        />
      </div>
    </AuthLayout>
  );
};

export default Emailverification;
