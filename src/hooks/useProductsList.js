import { useState, useEffect } from "react";
import { getProducts, getProductVendors } from '../services/products.service';

export default function useProductsList(name, vendor){

    const [products, setProducts] = useState();
    const [vendors, setVendors] = useState();

    useEffect(() => {
        getProducts(name, vendor).then((products) => {
            setProducts(products)
        });
    }, [name, vendor]);

    useEffect(() => {
        getProductVendors().then((vendors) => {
            setVendors(vendors);
        });
    }, []);

    return [products, vendors];
}