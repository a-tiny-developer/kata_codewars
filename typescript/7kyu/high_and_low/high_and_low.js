"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static highAndLow(numbers) {
        let intNumbers = numbers.split(" ").map(c => parseInt(c));
        return `${Math.max(...intNumbers)} ${Math.min(...intNumbers)}`;
    }
}
exports.Kata = Kata;
const chai_1 = require("chai");
describe("Example Tests", function () {
    it("Sample Test", function () {
        chai_1.assert.strictEqual(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
});
