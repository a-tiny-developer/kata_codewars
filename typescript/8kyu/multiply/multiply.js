"use strict";
exports.__esModule = true;
exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
var chai_1 = require("chai");
describe("multiply", function () {
    it("should return the product", function () {
        chai_1.assert.strictEqual(multiply(1, 1), 1);
        chai_1.assert.strictEqual(multiply(1, 2), 2);
    });
});
