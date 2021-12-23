"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = void 0;
function xo(str) {
    return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length;
}
exports.xo = xo;
// export function xo(str: string) {
//     return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
// }
const chai_1 = require("chai");
describe("xo", function () {
    it("Basic Tests", function () {
        chai_1.assert.strictEqual(xo('xo'), true);
        chai_1.assert.strictEqual(xo("xxOo"), true);
        chai_1.assert.strictEqual(xo("xxxm"), false);
        chai_1.assert.strictEqual(xo("Oo"), false);
        chai_1.assert.strictEqual(xo("ooom"), false);
    });
});
