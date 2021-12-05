export const boolToWord = (bool: boolean): string => {
    return bool ? "Yes" : "No";
};

import { assert } from "chai";

describe("boolToWord", function () {
    it("Sample tests", function () {
        assert.equal(boolToWord(true), "Yes");
        assert.equal(boolToWord(false), "No");
    });
});