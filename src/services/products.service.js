import { getPromotions, getQueriedProducts, getVendors } from "./backend.service";

export function getProducts(query){

    return Promise.all([
        getQueriedProducts(query),
        getPromotions()
    ]).then(([products, promotions]) => {

        const productsAndPromos = products.sort((a, b) => a.order - b.order);

        promotions.forEach((promo) => {
            productsAndPromos.splice(promo.order, 0, promo);
        });

        return productsAndPromos;
    })
}

export function getProductVendors(){
    return getVendors();
}

export default {
    getProducts,
    getProductVendors
}