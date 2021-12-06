"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(str) {
    return str.split('').reverse().join('');
}
exports.solution = solution;
// import the type of assertion library you wish to use (Chai recommended)
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return a string", function () {
        chai_1.assert.equal(solution('world'), 'dlrow');
        chai_1.assert.equal(solution('hello'), 'olleh');
        chai_1.assert.equal(solution(''), '');
        chai_1.assert.equal(solution('h'), 'h');
    });
});
