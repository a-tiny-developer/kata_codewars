"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShort = void 0;
function findShort(s) {
    return Math.min(...s.split(' ').map(x => x.length));
}
exports.findShort = findShort;
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return the length of the shortest word(s)", function () {
        chai_1.assert.equal(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
        chai_1.assert.equal(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        chai_1.assert.equal(findShort("lets talk about javascript the best language"), 3);
        chai_1.assert.equal(findShort("i want to travel the world writing code one day"), 1);
        chai_1.assert.equal(findShort("Lets all go on holiday somewhere very cold"), 2);
        chai_1.assert.equal(findShort("Let's travel abroad shall we"), 2);
    });
});
