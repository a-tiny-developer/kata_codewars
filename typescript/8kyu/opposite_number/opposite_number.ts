export class Kata {
    static opposite(n: number): number {
        return -n
    }
}

import { assert } from "chai";

describe("opposite", function () {
    it("Sample Test", function () {
        assert.strictEqual(Kata.opposite(1), -1)
    });
});