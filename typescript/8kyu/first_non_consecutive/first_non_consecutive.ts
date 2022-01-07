export function firstNonConsecutive(arr: number[]): null | number {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}


import { assert } from "chai";


describe('a positive example', function () {
    it('returns 6', function () {
        const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
        assert.equal(first, 6);
    })
})
