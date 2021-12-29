"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
    static solution(number) {
        let sum = 0;
        for (let i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}
exports.Challenge = Challenge;
const chai_1 = require("chai");
function test(num, expected) {
    chai_1.assert.strictEqual(Challenge.solution(num), expected);
}
describe("solution", function () {
    it("should handle basic tests", function () {
        test(10, 23);
    });
});
