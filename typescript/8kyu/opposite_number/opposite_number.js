"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.opposite = function (n) {
        return -n;
    };
    return Kata;
}());
exports.Kata = Kata;
var chai_1 = require("chai");
describe("opposite", function () {
    it("Sample Test", function () {
        chai_1.assert.strictEqual(Kata.opposite(1), -1);
    });
});
