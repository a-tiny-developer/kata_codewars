export const reverseSeq = (n: number): number[] => {
    return [...Array(n).keys()].reverse().map(x => x + 1);
};

import { assert } from "chai";

describe("reverseSeq", function () {
    it("Sample Test", function () {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});