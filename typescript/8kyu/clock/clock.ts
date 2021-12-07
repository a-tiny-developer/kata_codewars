export function past(h: number, m: number, s: number): number {
    return (h * 3600 + m * 60 + s) * 1000;
}


import { assert } from "chai";

describe("Fixed Tests", () => {
    it("Tests", () => {
        assert.equal(past(0, 1, 1), 61000);
        assert.equal(past(1, 1, 1), 3661000);
        assert.equal(past(0, 0, 0), 0);
        assert.equal(past(1, 0, 1), 3601000);
        assert.equal(past(1, 0, 0), 3600000);
    });
});