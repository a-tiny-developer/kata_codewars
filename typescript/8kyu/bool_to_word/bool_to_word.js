"use strict";
exports.__esModule = true;
exports.boolToWord = void 0;
var boolToWord = function (bool) {
    return bool ? "Yes" : "No";
};
exports.boolToWord = boolToWord;
var chai_1 = require("chai");
describe("boolToWord", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, exports.boolToWord)(true), "Yes");
        chai_1.assert.equal((0, exports.boolToWord)(false), "No");
    });
});
