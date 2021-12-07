"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invert = void 0;
function invert(array) {
    return array.map(x => -x);
}
exports.invert = invert;
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
// TODO Add your tests here
describe("Invert array values", function () {
    it("Basic Tests", function () {
        chai_1.assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
        chai_1.assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
        chai_1.assert.deepEqual(invert([]), []);
        chai_1.assert.deepEqual(invert([0]), [-0]);
    });
});
