"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static bonusTime(salary, bonus) {
        return `£${bonus ? salary * 10 : salary}`;
    }
}
exports.Kata = Kata;
// import the type of assertion library you wish to use (Chai recommended)
const chai_1 = require("chai");
describe("Fixed Tests", function () {
    it("Basic tests", function () {
        chai_1.assert.equal(Kata.bonusTime(10000, true), '£100000');
        chai_1.assert.equal(Kata.bonusTime(10000, false), '£10000');
        chai_1.assert.equal(Kata.bonusTime(25000, true), '£250000');
        chai_1.assert.equal(Kata.bonusTime(60000, false), '£60000');
        chai_1.assert.equal(Kata.bonusTime(2, true), '£20');
        chai_1.assert.equal(Kata.bonusTime(78, false), '£78');
        chai_1.assert.equal(Kata.bonusTime(67890, true), '£678900');
    });
});
