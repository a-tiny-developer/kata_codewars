"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanToString = void 0;
exports.booleanToString = String;
const chai_1 = require("chai");
describe("solution", function () {
    it('When we pass in true, we want the string "true" as output', function () {
        chai_1.assert.equal((0, exports.booleanToString)(true), "true");
    });
    it('When we pass in false, we want the string "false" as output', function () {
        chai_1.assert.equal((0, exports.booleanToString)(false), "false");
    });
});
