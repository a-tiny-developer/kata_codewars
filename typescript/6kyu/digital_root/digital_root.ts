export const digitalRoot = (n: number): number => {
    return (n - 1) % 9 + 1;
};

// python module
// n == 0 ? 0 : (n - 1) % 9 + 1;
// javascript remainder
// (n - 1) % 9 + 1;



import { assert } from "chai";

describe("solution", () => {
    it('should work for fixed tests', () => {
        assert.equal(digitalRoot(16), 7);
        assert.equal(digitalRoot(456), 6);
    });
});
