"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonConsecutive = void 0;
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}
exports.firstNonConsecutive = firstNonConsecutive;
const chai_1 = require("chai");
describe('a positive example', function () {
    it('returns 6', function () {
        const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
        chai_1.assert.equal(first, 6);
    });
});
