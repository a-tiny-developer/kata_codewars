"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToString = void 0;
function numberToString(num) {
    return num.toString();
}
exports.numberToString = numberToString;
const chai_1 = require("chai");
describe("numberToString", function () {
    it("should work correctly", () => {
        (0, chai_1.expect)(numberToString(67)).to.equal('67');
    });
});
