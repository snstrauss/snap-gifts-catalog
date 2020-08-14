import React from 'react';
import S from './product-list.module.scss';
import useProductsList from '../../hooks/useProductsList';
import { useState } from 'react';
import Header from '../../components/header/header';

export default function ProductList(){

    const [productName, setProductName] = useState();
    const [selectedVendor, setSelectedVendor] = useState();

    const [productsList, productVendors] = useProductsList(productName || '', selectedVendor || '');

    return (
        <div className={S.container}>
            <Header searchChange={setProductName} vendorChange={setSelectedVendor} vendors={productVendors}/>
            <main>
                {
                    productsList &&
                    productsList.map((productItem, idx) => (
                        <div className={S.item} key={`${idx}-${productItem.id}`}>
                            {productItem.name}
                        </div>
                    ))
                }
            </main>
        </div>
    )
}