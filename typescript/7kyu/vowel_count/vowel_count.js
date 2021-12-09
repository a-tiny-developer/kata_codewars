"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static getCount(str) {
        return str.split('').filter(c => "aeiou".includes(c)).length;
    }
}
exports.Kata = Kata;
const chai_1 = require("chai");
describe("getCount", function () {
    it("should pass a sample test", function () {
        chai_1.assert.strictEqual(Kata.getCount("abracadabra"), 5);
    });
});
