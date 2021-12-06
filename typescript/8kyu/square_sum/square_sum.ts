export function squareSum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}

// <reference path="/runner/typings/mocha/index.d.ts" />
// <reference path="/runner/typings/chai/index.d.ts" />
// import the type of assertion library you wish to use (Chai recommended)
import { assert } from "chai";

describe("Sample Test Cases", function () {
    it("Should return a number", function () {
        assert.equal(squareSum([1, 2]), 5);
        assert.equal(squareSum([0, 3, 4, 5]), 50);
    });
});