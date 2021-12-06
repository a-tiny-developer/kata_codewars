"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolToWord = void 0;
const boolToWord = (bool) => {
    return bool ? "Yes" : "No";
};
exports.boolToWord = boolToWord;
const chai_1 = require("chai");
describe("boolToWord", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, exports.boolToWord)(true), "Yes");
        chai_1.assert.equal((0, exports.boolToWord)(false), "No");
    });
});
