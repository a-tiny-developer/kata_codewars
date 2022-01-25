"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = void 0;
function updateLight(current) {
    switch (current) {
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        case "red":
            return "green";
        default:
            throw new Error("Invalid");
    }
}
exports.updateLight = updateLight;
const chai_1 = require("chai");
describe("Thinkful - Logic Drills: Traffic light", () => {
    it("Testing for fixed tests", () => {
        chai_1.assert.strictEqual(updateLight("green"), "yellow");
        chai_1.assert.strictEqual(updateLight("yellow"), "red");
        chai_1.assert.strictEqual(updateLight("red"), "green");
    });
});
