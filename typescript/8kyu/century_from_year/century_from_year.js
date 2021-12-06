"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
const centuryFromYear = (year) => {
    return Math.floor((year + 99) / 100);
};
exports.centuryFromYear = centuryFromYear;
const chai_1 = require("chai");
describe("centuryFromYear", () => {
    it("should return 18 when input is 1705", () => {
        const expected = 18;
        const actual = (0, exports.centuryFromYear)(1705);
        (0, chai_1.expect)(actual).to.eql(expected);
    });
    it("should return 19 when input is 1900", () => {
        const expected = 19;
        const actual = (0, exports.centuryFromYear)(1900);
        (0, chai_1.expect)(actual).to.eql(expected);
    });
    it("should return 17 when input is 1601", () => {
        const expected = 17;
        const actual = (0, exports.centuryFromYear)(1601);
        (0, chai_1.expect)(actual).to.eql(expected);
    });
    it("should return 20 when input is 2000", () => {
        const expected = 20;
        const actual = (0, exports.centuryFromYear)(2000);
        (0, chai_1.expect)(actual).to.eql(expected);
    });
});
