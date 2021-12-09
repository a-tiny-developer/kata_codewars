export function getAverage(marks: number[]): number {
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}

import { assert } from "chai";

describe("solution", function () {
    it("Basic Tests", function () {
        assert.equal(getAverage([2, 2, 2, 2]), 2);
        assert.equal(getAverage([1, 2, 3, 4, 5,]), 3);
        assert.equal(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
    });
});