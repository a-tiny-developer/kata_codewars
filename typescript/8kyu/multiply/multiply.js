"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
const chai_1 = require("chai");
describe("multiply", function () {
    it("should return the product", () => {
        chai_1.assert.strictEqual(multiply(1, 1), 1);
        chai_1.assert.strictEqual(multiply(1, 2), 2);
    });
});
