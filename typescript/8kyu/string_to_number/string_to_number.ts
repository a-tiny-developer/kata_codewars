export function stringToNumber(str: string): number {
    return parseInt(str);
}


import { assert } from "chai";

describe("stringToNumber", function () {
    it("should work for the examples", function () {
        assert.equal(stringToNumber("1234"), 1234);
        assert.equal(stringToNumber("605"), 605);
        assert.equal(stringToNumber("1405"), 1405);
        assert.equal(stringToNumber("-7"), -7);
    });
});