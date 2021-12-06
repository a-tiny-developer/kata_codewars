export function isDivisible(n: number, x: number, y: number): boolean {
    return n % x === 0 && n % y === 0;
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";


describe("example", function () {
    it("tests", function () {
        assert.equal(isDivisible(3, 3, 4), false);
        assert.equal(isDivisible(12, 3, 4), true);
        assert.equal(isDivisible(8, 3, 4), false);
        assert.equal(isDivisible(48, 3, 4), true);
    });
});