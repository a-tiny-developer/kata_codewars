"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monkeyCount = void 0;
function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}
exports.monkeyCount = monkeyCount;
const chai_1 = require("chai");
describe("Fixed tests", () => {
    it("Testing for 5", () => {
        chai_1.assert.deepEqual(monkeyCount(5), [1, 2, 3, 4, 5]);
    });
    it("Testing for 3", () => {
        chai_1.assert.deepEqual(monkeyCount(3), [1, 2, 3]);
    });
    it("Testing for 9", () => {
        chai_1.assert.deepEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("Testing for 10", () => {
        chai_1.assert.deepEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("Testing for 20", () => {
        chai_1.assert.deepEqual(monkeyCount(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
