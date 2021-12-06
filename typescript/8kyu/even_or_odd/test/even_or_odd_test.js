"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../solution");
const chai_1 = require("chai");
describe("solution", function () {
    it("basicTests", function () {
        chai_1.assert.equal(solution.even_or_odd(2), "Even");
        chai_1.assert.equal(solution.even_or_odd(0), "Even");
        chai_1.assert.equal(solution.even_or_odd(7), "Odd");
        chai_1.assert.equal(solution.even_or_odd(1), "Odd");
    });
});
