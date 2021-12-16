"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
    static getMiddle(s) {
        return s.substring((s.length - 1) / 2, s.length / 2 + 1);
    }
}
exports.Challenge = Challenge;
const chai_1 = require("chai");
function test(string, expected) {
    chai_1.assert.strictEqual(Challenge.getMiddle(string), expected);
}
describe("solution", function () {
    it("should handle basic tests", function () {
        test("test", "es");
        test("testing", "t");
    });
});
