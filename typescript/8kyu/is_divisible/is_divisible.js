"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDivisible = void 0;
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
exports.isDivisible = isDivisible;
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
describe("example", function () {
    it("tests", function () {
        chai_1.assert.equal(isDivisible(3, 3, 4), false);
        chai_1.assert.equal(isDivisible(12, 3, 4), true);
        chai_1.assert.equal(isDivisible(8, 3, 4), false);
        chai_1.assert.equal(isDivisible(48, 3, 4), true);
    });
});
