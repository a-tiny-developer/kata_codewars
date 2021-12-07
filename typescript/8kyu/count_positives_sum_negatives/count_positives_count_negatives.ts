export function countPositivesSumNegatives(input: number[] | null): number[] {
    if (input === null || input.length === 0) {
        return [];
    }
    return [input.filter(x => x > 0).length, input.reduce((pre, curr) => curr < 0 ? pre + curr : pre, 0)];
}


// export function countPositivesSumNegatives(input: any) {
//     if (!input || !input.length) {
//         return [];
//     }
//     return input.reduce((sums, val) => {
//         val > 0 ? sums[0] += 1 : sums[1] += val;
//         return sums;
//     }, [0, 0]);
// }

import { assert } from "chai";

describe('countPositivesSumNegatives', () => {
    it('basic tests', () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
        let actual = countPositivesSumNegatives(testData)
        let expected = [10, -65]
        assert.deepEqual(actual, expected)

        testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
        actual = countPositivesSumNegatives(testData)
        expected = [8, -50]
        assert.deepEqual(actual, expected)
    })
})