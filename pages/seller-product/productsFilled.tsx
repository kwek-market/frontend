import React from 'react';
import StoreOptions from '@/shared/StoreOptions/StoreOptions';
import ProductFilled from '@/components/productFilled/ProductFilled';
import StoreHeader from '@/shared/sellerHeader/Header';
import { Header } from "@/shared/shop";



const Filled = function () {
    return(
        <div>
            <Header />
            <StoreHeader />
            <StoreOptions>
            <ProductFilled />
            </StoreOptions>
        </div>
    )
}

export default Filled