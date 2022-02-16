export class Kata {
    static getCount(str: string): number {
        return str.split('').filter(c => "aeiou".includes(c)).length
    }
}

import { assert } from "chai";

describe("getCount", function () {
    it("should pass a sample test", function () {
        assert.strictEqual(Kata.getCount("abracadabra"), 5)
    });
});
