import React from 'react';
import S from './product-list.module.scss';
import useProductsList from '../../hooks/useProductsList';

export default function ProductList(){

    const [productsList, productVendors] = useProductsList('quureyyy');

    debugger;

    return (
        <h3 className={S.container}>i am product list</h3>
    )
}