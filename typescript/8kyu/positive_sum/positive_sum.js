"use strict";
exports.__esModule = true;
exports.positiveSum = void 0;
function positiveSum(arr) {
    return arr.filter(function (item) { return item > 0; }).reduce(function (a, b) { return a + b; }, 0);
}
exports.positiveSum = positiveSum;
var chai_1 = require("chai");
describe("solution", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
        chai_1.assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
        chai_1.assert.equal(positiveSum([]), 0);
        chai_1.assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
        chai_1.assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});
