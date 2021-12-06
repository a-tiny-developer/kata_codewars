"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static opposite(n) {
        return -n;
    }
}
exports.Kata = Kata;
const chai_1 = require("chai");
describe("opposite", function () {
    it("Sample Test", function () {
        chai_1.assert.strictEqual(Kata.opposite(1), -1);
    });
});
