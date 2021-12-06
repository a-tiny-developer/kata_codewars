"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum = void 0;
function squareSum(numbers) {
    return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}
exports.squareSum = squareSum;
// <reference path="/runner/typings/mocha/index.d.ts" />
// <reference path="/runner/typings/chai/index.d.ts" />
// import the type of assertion library you wish to use (Chai recommended)
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return a number", function () {
        chai_1.assert.equal(squareSum([1, 2]), 5);
        chai_1.assert.equal(squareSum([0, 3, 4, 5]), 50);
    });
});
