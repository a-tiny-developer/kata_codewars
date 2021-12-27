"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grow = void 0;
function grow(arr) {
    return arr.reduce((prev, curr) => prev * curr);
}
exports.grow = grow;
const chai_1 = require("chai");
describe("Basic tests", function () {
    it("Testing for [1, 2, 3]", () => chai_1.assert.strictEqual(grow([1, 2, 3]), 6));
    it("Testing for [4, 1, 1, 1, 4]", () => chai_1.assert.strictEqual(grow([4, 1, 1, 1, 4]), 16));
    it("Testing for [2, 2, 2, 2, 2, 2]", () => chai_1.assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64));
});
