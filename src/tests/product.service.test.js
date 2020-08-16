import {getVendors as serverGetVendors, getPromotions as serverGetPromotions, getProductsFromCache} from '../../../snap-gifts-catalog-backend/services/product.service';
import { getProducts, getProductVendors } from '../services/products.service';
import DATA from './data.mock.json';
import { parse } from 'url';

const BACKEND = {
    vendors: serverGetVendors,
    promotions: serverGetPromotions,
    products: getProductsFromCache
}

global.fetch = jest.fn((request) => {
    return Promise.resolve({
        json: () => {
            const parsed = parse(request);
            let cleanReq = parsed.pathname.replace('/', '');
            return BACKEND[cleanReq](parsed.query);
        }
    })
});

describe('Product Service', () => {
    describe('getProductVendors()', () => {
        test('returns a list of all vendors, with "ALL" prepended to it', (done) => {
            const local = ['ALL'].concat(DATA.vendors);
            getProductVendors().then(vendors => {
                expect(vendors).toEqual(local);
                done();
            });
        });
    })
});