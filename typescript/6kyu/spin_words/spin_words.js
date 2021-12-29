"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = void 0;
function spinWords(words) {
    return words.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ');
}
exports.spinWords = spinWords;
const chai_1 = require("chai");
describe("spinWords", () => {
    it("should pass some fixed tests", () => {
        chai_1.assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    });
});
