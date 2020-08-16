import React, { useState } from 'react';
import S from './product-list.module.scss';
import useProductsList from '../../hooks/useProductsList';

import Header from '../../components/header/header';
import ItemsList from '../../components/items-list/items-list';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../App';
import Empty from '../../components/empty/empty';

export default function ProductList(){

    const history = useHistory();

    const [productName, setProductName] = useState();
    const [selectedVendor, setSelectedVendor] = useState();

    const [productsList, productVendors] = useProductsList({
        name: productName,
        vendor: selectedVendor
    });

    function clickedOnProduct(item){
        history.push(`${ROUTES.DETAILS}/${item.id}`, { item });
    }

    return (
        <div className={S.container}>
            <Header searchChange={setProductName} vendorChange={setSelectedVendor} vendors={productVendors}/>
            <main>
                {
                    productsList &&
                    <ItemsList items={productsList} itemClick={clickedOnProduct} ident="id"/>
                }
                {
                    productsList && !productsList.length &&
                    <Empty/>
                }
            </main>
        </div>
    )
}