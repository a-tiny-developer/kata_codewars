"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToNumber = void 0;
function stringToNumber(str) {
    return parseInt(str);
}
exports.stringToNumber = stringToNumber;
const chai_1 = require("chai");
describe("stringToNumber", function () {
    it("should work for the examples", function () {
        chai_1.assert.equal(stringToNumber("1234"), 1234);
        chai_1.assert.equal(stringToNumber("605"), 605);
        chai_1.assert.equal(stringToNumber("1405"), 1405);
        chai_1.assert.equal(stringToNumber("-7"), -7);
    });
});
