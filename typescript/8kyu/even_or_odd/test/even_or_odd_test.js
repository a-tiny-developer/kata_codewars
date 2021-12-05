"use strict";
exports.__esModule = true;
var solution = require("../solution");
var chai_1 = require("chai");
describe("solution", function () {
    it("basicTests", function () {
        chai_1.assert.equal(solution.even_or_odd(2), "Even");
        chai_1.assert.equal(solution.even_or_odd(0), "Even");
        chai_1.assert.equal(solution.even_or_odd(7), "Odd");
        chai_1.assert.equal(solution.even_or_odd(1), "Odd");
    });
});
