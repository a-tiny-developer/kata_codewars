export function positiveSum(arr: number[]): number {
    return arr.filter(item => item > 0).reduce((a, b) => a + b, 0)
}

// export function positiveSum(arr: number[]): number {
//     return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
// }

import { assert } from "chai";

describe("solution", function () {
    it("Basic Tests", function () {
        assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
        assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
        assert.equal(positiveSum([]), 0);
        assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
        assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});