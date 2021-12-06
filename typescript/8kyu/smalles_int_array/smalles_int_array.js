"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSmallestInt = void 0;
function findSmallestInt(args) {
    return Math.min(...args);
}
exports.findSmallestInt = findSmallestInt;
const chai_1 = require("chai");
describe("Smallest Integer Tests", function () {
    it("Fixed Tests", function () {
        chai_1.assert.strictEqual(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
        chai_1.assert.strictEqual(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
        chai_1.assert.strictEqual(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
        chai_1.assert.strictEqual(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
        chai_1.assert.strictEqual(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
    });
});
