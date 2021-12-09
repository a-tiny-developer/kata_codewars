"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseSeq = void 0;
const reverseSeq = (n) => {
    return [...Array(n).keys()].reverse().map(x => x + 1);
};
exports.reverseSeq = reverseSeq;
const chai_1 = require("chai");
describe("reverseSeq", function () {
    it("Sample Test", function () {
        chai_1.assert.deepEqual((0, exports.reverseSeq)(5), [5, 4, 3, 2, 1]);
    });
});
