import { parse } from 'url';

import { getVendors, getPromotions, getQueriedProducts } from '../services/backend.service';
import DATA from './data.mock.json';

import {getVendors as serverGetVendors, getPromotions as serverGetPromotions, getProductsFromCache} from '../../../snap-gifts-catalog-backend/services/product.service';

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

beforeEach(() => {
    fetch.mockClear();
})

describe('Backend Service', () => {
    describe('getVendors()', () => {
        test('returns an array of vendor names', (done) => {
            const local = DATA.vendors;
            getVendors().then(vendors => {
                expect(local).toEqual(vendors);
                done();
            });
        });
    });

    describe('getPromotions()', () => {
        test('returns an ARRAY of promotions', (done) => {
            const local = DATA.promotion;
            getPromotions().then(promotions => {
                expect([local]).toEqual(promotions);
                done();
            });
        });
    });

    describe('getQueriedProducts(query: {})', () => {
        test('returns a list of all products when not provided with arguments', (done) => {
            getProductsFromCache().then(local => {
                getQueriedProducts().then(products => {
                    expect(products).toEqual(local);
                    done();
                });
            });
        });

        test('returns a list of filtered products when provided with arguments', (done) => {
            getProductsFromCache('name=coffee').then(local => {
                getQueriedProducts({
                    name: 'coffee'
                }).then(products => {
                    expect(products).toEqual(local);
                    done();
                });
            });
        });
    });
});