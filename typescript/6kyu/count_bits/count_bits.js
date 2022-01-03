"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits = void 0;
function countBits(n) {
    return n.toString(2).match(/1/g)?.length ?? 0;
}
exports.countBits = countBits;
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
// TODO Add your tests here
describe("example", function () {
    it("test", function () {
        chai_1.assert.equal(countBits(0), 0);
        chai_1.assert.equal(countBits(4), 1);
        chai_1.assert.equal(countBits(7), 3);
        chai_1.assert.equal(countBits(9), 2);
        chai_1.assert.equal(countBits(10), 2);
        chai_1.assert.equal(countBits(1234), 5);
    });
});
