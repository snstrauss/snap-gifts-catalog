import { getPromotions, getQueriedProducts, getVendors } from "./backend.service";

export const CONST = {
    NO_SELECTION_VENDOR: 'ALL'
};

export function getProducts(name, vendor){
    return Promise.all([
        getQueriedProducts({ name, vendor }),
        getPromotions()
    ]).then(([products, promotions]) => {
        const productsAndPromos = products.concat(promotions).sort((a, b) => a.order - b.order);
        return productsAndPromos;
    });
}

export function getProductVendors(){
    return getVendors().then((vendors) => {
        vendors.unshift(CONST.NO_SELECTION_VENDOR);
        return vendors;
    })
}

export default {
    CONST,
    getProducts,
    getProductVendors,
}