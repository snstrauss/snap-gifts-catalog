import { useState, useEffect } from "react";
import { getProducts } from '../services/products.service';
import { getVendors } from "../services/backend.service";

export default function useProductsList(query){

    const [products, setProducts] = useState();
    const [vendors, setVendors] = useState();

    useEffect(() => {
        getProducts(query).then(setProducts);
    }, [query]);

    useEffect(() => {
        getVendors().then(setVendors);
    }, []);

    return [products, vendors];
}