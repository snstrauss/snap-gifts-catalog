const ROOT_URL = process.env.REACT_APP_DEV_SERVER ? 'http://localhost:5000/' : 'https://snap-gifts-catalog.herokuapp.com/';

function serverRequest(request, data){
    return fetch(ROOT_URL + request).then(res => res.json());
}

export function getQueriedProducts(query){
    return serverRequest(`products?query=${query}`);
}

export function getPromotions(){
    return serverRequest('promotions');
}

export function getVendors(){
    return serverRequest('vendors');
}

export default {
    getQueriedProducts,
    getPromotions,
    getVendors
}