export function updateLight(current: string): string {
    switch (current) {
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        case "red":
            return "green";
        default:
            throw new Error("Invalid");
    }
}


import { assert } from "chai";

describe("Thinkful - Logic Drills: Traffic light", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(updateLight("green"), "yellow");
        assert.strictEqual(updateLight("yellow"), "red");
        assert.strictEqual(updateLight("red"), "green");
    });
});
