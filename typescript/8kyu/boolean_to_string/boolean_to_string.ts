export const booleanToString = String


import { assert } from "chai";

describe("solution", function () {
    it('When we pass in true, we want the string "true" as output', function () {
        assert.equal(booleanToString(true), "true");
    });
    it('When we pass in false, we want the string "false" as output', function () {
        assert.equal(booleanToString(false), "false");
    });
});
