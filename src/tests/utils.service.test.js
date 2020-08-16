import { randomInt, randomFromList } from '../services/utils.service';

describe('Utils Service', () => {
    describe('randomInt(limit: number)', () => {
        test('returns a random int, in the range from 0 to 9, when no limit provided', () => {
            for(let i = 0; i < 10; i++){
                const int = randomInt();
                expect(int).toBeGreaterThanOrEqual(0);
                expect(int).toBeLessThanOrEqual(9);
            }
        });

        test('returns a random int from 0 to provided limit', () => {
            const LIMIT = 50;
            for(let i = 0; i < 10; i++){
                const int = randomInt(LIMIT);
                expect(int).toBeGreaterThanOrEqual(0);
                expect(int).toBeLessThanOrEqual(LIMIT);
            }
        });
    });

    describe('randomFromList(list: [any])', () => {
        test('returns one of the values from a provided array', () => {
            const sampleArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

            for (let i = 0; i < 10; i++) {
                const item = randomFromList(sampleArr);
                expect(sampleArr).toContain(item);
            }
        });

        test(`returns 'undefined' when provided with no arguments`, () => {
            const nothing = randomFromList();
            expect(nothing).toBeUndefined();
        });
    })
});