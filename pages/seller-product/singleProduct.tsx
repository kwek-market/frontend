import React from 'react';
import StoreOptions from '@/shared/StoreOptions/StoreOptions';
import SingleProduct from '@/components/singleProduct/SingleProduct';
import StoreHeader from '@/shared/sellerHeader/Header';
import { Header } from "@/shared/shop";



const Filled = function () {
    return(
        <div>
            <Header />
            <StoreHeader />
            <StoreOptions>
            <SingleProduct />
            </StoreOptions>
        </div>
    )
}

export default Filled