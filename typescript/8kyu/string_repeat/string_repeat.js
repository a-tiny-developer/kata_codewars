"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatStr = void 0;
function repeatStr(n, s) {
    return s.repeat(n);
}
exports.repeatStr = repeatStr;
const chai_1 = require("chai");
describe("solution", function () {
    it("Tests", function () {
        chai_1.assert.equal(repeatStr(3, "*"), "***");
    });
});
