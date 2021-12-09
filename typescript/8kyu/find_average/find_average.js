"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAverage = void 0;
function findAverage(array) {
    return array.length ? array.reduce((acc, curr) => acc + curr, 0) / array.length : 0;
}
exports.findAverage = findAverage;
const chai_1 = require("chai");
describe("solution", () => {
    it('should calculate avg of given numbers', () => {
        chai_1.assert.strictEqual(findAverage([1, 1, 1]), 1);
    });
});
