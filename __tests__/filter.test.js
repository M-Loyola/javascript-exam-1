import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('filter: should return array of even numbers', () => {
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        expect(filterEvenNumbers(numbers)).toEqual([2,4,6,8,10]);
    });

    test('filter: should return array with words length with 4', () => {
        const words = ['car','bike','plane','boat','ship'];
        expect(filterLengthWith4(words)).toEqual(['bike','boat','ship']);
    });

    test('filter: should return array with words starting with a', () => {
        const words = ['almond','cherry','apricot'];
        expect(filterStartWithA(words)).toEqual(['almond','apricot']);
    });
});