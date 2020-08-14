const ROOT_URL = process.env.REACT_APP_LOCAL_IP
                    ? `http://${process.env.REACT_APP_LOCAL_IP}:5000/`
                    : 'https://snap-gifts-catalog.herokuapp.com/';

function serverRequest(request){
    return fetch(ROOT_URL + request).then(res => res.json());
}

function cleanEmptyValues(obj){
    for (let key in obj){
        if(!obj[key] || !obj[key].length){
            delete obj[key];
        }
    }
}

export function getQueriedProducts(queryParams){
    cleanEmptyValues(queryParams);

    const queryString = new URLSearchParams(queryParams).toString();
    const requestString = `products${queryString.length ? '?' + queryString : ''}`;

    return serverRequest(requestString);
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