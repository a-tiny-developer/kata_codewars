"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = void 0;
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((x) => x).length;
}
exports.countSheeps = countSheeps;
const chai_1 = require("chai");
var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];
describe('countSheeps', function () {
    it("should work correctly", () => {
        const result1 = countSheeps(array1);
        (0, chai_1.expect)(result1).to.equal(17, "There are 17 sheeps in total, not " + result1);
    });
});
