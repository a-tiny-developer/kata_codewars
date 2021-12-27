"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpperCase = void 0;
function makeUpperCase(str) {
    return str.toUpperCase();
}
exports.makeUpperCase = makeUpperCase;
// export const makeUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
const chai_1 = require("chai");
describe("MakeUpperCase", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual(makeUpperCase("hello"), "HELLO");
        chai_1.assert.strictEqual(makeUpperCase("hello world"), "HELLO WORLD");
        chai_1.assert.strictEqual(makeUpperCase("hello world !"), "HELLO WORLD !");
        chai_1.assert.strictEqual(makeUpperCase("heLlO wORLd !"), "HELLO WORLD !");
        chai_1.assert.strictEqual(makeUpperCase("1,2,3 hello world!"), "1,2,3 HELLO WORLD!");
    });
});
