export function repeatStr(n: number, s: string): string {
    return s.repeat(n);
}

import { assert } from "chai";

describe("solution", function () {
    it("Tests", function () {
        assert.equal(repeatStr(3, "*"), "***");
    });
});