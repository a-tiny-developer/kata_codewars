export function grow(arr: number[]): number {
    return arr.reduce((prev, curr) => prev * curr);
}


import { assert } from "chai";

describe("Basic tests", function () {
    it("Testing for [1, 2, 3]", () => assert.strictEqual(grow([1, 2, 3]), 6));
    it("Testing for [4, 1, 1, 1, 4]", () => assert.strictEqual(grow([4, 1, 1, 1, 4]), 16));
    it("Testing for [2, 2, 2, 2, 2, 2]", () => assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64));
});
