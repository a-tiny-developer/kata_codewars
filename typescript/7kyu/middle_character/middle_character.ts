export class Challenge {
    static getMiddle(s: string) {
        return s.substring((s.length - 1) / 2, s.length / 2 + 1);
    }
}

import { assert } from "chai";

function test(string, expected) {
    assert.strictEqual(Challenge.getMiddle(string), expected)
}

describe("solution", function () {
    it("should handle basic tests", function () {
        test("test", "es");
        test("testing", "t");
    });
});
