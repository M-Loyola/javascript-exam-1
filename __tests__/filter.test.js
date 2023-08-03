import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('filter: should return array of even numbers', () => {
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        const result = filterEvenNumbers(numbers);
        expect(result).toEqual([2,4,6,8,10]);
    });

    test('filter: should return array with words length with 4', () => {
        const words = ['car','bike','plane','boat','ship'];
        const result = filterLengthWith4(words);
        expect(result).toEqual(['bike','boat','ship']);
    });

    test('filter: should return array with words starting with a', () => {
        const words = ['almond','cherry','apricot'];
        const result = filterStartWithA(words);
        expect(result).toEqual(['almond','apricot']);
    });
});