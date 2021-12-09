export function findAverage(array: number[]): number {
    return array.length ? array.reduce((acc, curr) => acc + curr, 0) / array.length : 0;
}


import { assert } from "chai";

describe("solution", () => {
    it('should calculate avg of given numbers', () => {
        assert.strictEqual(findAverage([1, 1, 1]), 1);
    });
});