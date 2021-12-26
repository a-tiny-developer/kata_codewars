export const makeNegative = (num: number): number => {
    return num < 0 ? num : -num;
};

import { assert } from "chai";

describe("makeNegative", function () {
    it("Sample tests", function () {
        assert.equal(makeNegative(42), -42);
    });
});
