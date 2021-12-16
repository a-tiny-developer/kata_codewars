export function descendingOrder(n: number): number {
    return Number(n.toString().split("").sort((a, b) => b.localeCompare(a)).join(""));
}


import { assert } from "chai";

describe("descendingOrder", function () {
    it("should return some sample numbers in descending order", function () {
        assert.strictEqual(descendingOrder(0), 0);
        assert.strictEqual(descendingOrder(1), 1);
        assert.strictEqual(descendingOrder(123456789), 987654321);
    });
});