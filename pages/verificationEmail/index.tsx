import React from "react";
import Head from "next/head";

import Email  from'@/components/verificationEmail/VerificationEmail'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <Email /> 
    );
};

export default Page;