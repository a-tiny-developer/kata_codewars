"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = void 0;
const makeNegative = (num) => {
    return num < 0 ? num : -num;
};
exports.makeNegative = makeNegative;
const chai_1 = require("chai");
describe("makeNegative", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, exports.makeNegative)(42), -42);
    });
});
