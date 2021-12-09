"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = void 0;
function getAverage(marks) {
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}
exports.getAverage = getAverage;
const chai_1 = require("chai");
describe("solution", function () {
    it("Basic Tests", function () {
        chai_1.assert.equal(getAverage([2, 2, 2, 2]), 2);
        chai_1.assert.equal(getAverage([1, 2, 3, 4, 5,]), 3);
        chai_1.assert.equal(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
    });
});
