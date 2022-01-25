"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dutyFree = void 0;
function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol * 100 / (normPrice * discount));
}
exports.dutyFree = dutyFree;
const chai_1 = require("chai");
describe("Holiday VIII - Duty Free", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual(dutyFree(12, 50, 1000), 166);
        chai_1.assert.strictEqual(dutyFree(17, 10, 500), 294);
        chai_1.assert.strictEqual(dutyFree(24, 35, 3000), 357);
        chai_1.assert.strictEqual(dutyFree(1400, 35, 10000), 20);
        chai_1.assert.strictEqual(dutyFree(700, 26, 7000), 38);
    });
});
