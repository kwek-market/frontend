import React, { useState } from 'react';

import { AuthLayout } from '@/layouts';
import { AuthForm } from '@/shared';

const Page = function () {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sendResetRequest = (formData: any) => {
    console.log(formData);
  };

  const form = {
    title: 'Forgot Password?',
    isLoading,
    subtitle: 'Don’t worry, resetting your password is easy. Just enter the email address you used to sign up to Kwek.',
    fields: [
      {
        name: 'email',
        placeholder: 'Email Address',
        type: 'email',
      },
    ],
    submit: {
      text: 'Request Reset Link',
      action: sendResetRequest,
    },
    extra: {
      text: 'Do you remember your password?',
      linkText: 'Try Logging In',
      linkUrl: '/login',
    },
  };

  return (
    <AuthLayout id="forgotPassword" withBanner={false}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
