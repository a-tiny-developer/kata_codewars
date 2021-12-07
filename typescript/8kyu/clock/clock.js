"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.past = void 0;
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}
exports.past = past;
const chai_1 = require("chai");
describe("Fixed Tests", () => {
    it("Tests", () => {
        chai_1.assert.equal(past(0, 1, 1), 61000);
        chai_1.assert.equal(past(1, 1, 1), 3661000);
        chai_1.assert.equal(past(0, 0, 0), 0);
        chai_1.assert.equal(past(1, 0, 1), 3601000);
        chai_1.assert.equal(past(1, 0, 0), 3600000);
    });
});
