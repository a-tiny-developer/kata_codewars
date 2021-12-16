"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    return Number(n.toString().split("").sort((a, b) => b.localeCompare(a)).join(""));
}
exports.descendingOrder = descendingOrder;
const chai_1 = require("chai");
describe("descendingOrder", function () {
    it("should return some sample numbers in descending order", function () {
        chai_1.assert.strictEqual(descendingOrder(0), 0);
        chai_1.assert.strictEqual(descendingOrder(1), 1);
        chai_1.assert.strictEqual(descendingOrder(123456789), 987654321);
    });
});
