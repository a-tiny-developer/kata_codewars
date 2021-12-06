"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveSum = void 0;
function positiveSum(arr) {
    return arr.filter(item => item > 0).reduce((a, b) => a + b, 0);
}
exports.positiveSum = positiveSum;
// export function positiveSum(arr: number[]): number {
//     return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
// }
const chai_1 = require("chai");
describe("solution", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
        chai_1.assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
        chai_1.assert.equal(positiveSum([]), 0);
        chai_1.assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
        chai_1.assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
    });
});
