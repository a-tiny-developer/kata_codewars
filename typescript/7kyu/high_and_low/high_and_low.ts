export class Kata {
    static highAndLow(numbers: string): string {
        let intNumbers = numbers.split(" ").map(c => parseInt(c));
        return `${Math.max(...intNumbers)} ${Math.min(...intNumbers)}`;
    }
}


import { assert } from "chai";

describe("Example Tests", function () {
    it("Sample Test", function () {
        assert.strictEqual(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
});