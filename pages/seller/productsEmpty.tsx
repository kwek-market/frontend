import React from 'react';
import StoreOptions from '@/shared/StoreOptions/StoreOptions';
import ProductEmpty from '@/components/emptyProduct/EmptyProduct';
import StoreHeader from '@/shared/sellerHeader/Header';
import { Header } from "@/shared/shop";



const Filled = function () {
    return(
        <div>
            <Header />
            <StoreHeader />
            <StoreOptions>
            <ProductEmpty />
            </StoreOptions>
        </div>
    )
}

export default Filled