import { getPromotions, getQueriedProducts, getVendors } from "./backend.service";

export const CONST = {
    NO_SELECTION_VENDOR: 'ALL'
};

function transformPromos(promos){
    promos.forEach((prom, idx) => {
        prom.id = `promo-${idx}`;
        prom.isPromo = true;
    });
    return promos;
}

export function getProducts(name, vendor){
    return Promise.all([
        getQueriedProducts({ name, vendor }),
        getPromotions()
    ]).then(([products, promotions]) => {
        const treatedPromos = transformPromos(promotions);
        const productsAndPromos = products.concat(treatedPromos).sort((a, b) => a.order - b.order);

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