export function multiply(a: number, b: number): number {
    return a * b;
}

import { assert } from "chai";

describe("multiply", function () {
    it("should return the product", () => {
        assert.strictEqual(multiply(1, 1), 1);
        assert.strictEqual(multiply(1, 2), 2);
    });
});