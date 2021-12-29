"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    return (n - 1) % 9 + 1;
};
exports.digitalRoot = digitalRoot;
// python module
// n == 0 ? 0 : (n - 1) % 9 + 1;
// javascript remainder
// (n - 1) % 9 + 1;
const chai_1 = require("chai");
describe("solution", () => {
    it('should work for fixed tests', () => {
        chai_1.assert.equal((0, exports.digitalRoot)(16), 7);
        chai_1.assert.equal((0, exports.digitalRoot)(456), 6);
    });
});
