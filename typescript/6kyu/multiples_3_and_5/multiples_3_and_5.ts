export class Challenge {
    static solution(number: number): number {
        let sum = 0;
        for (let i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}

import { assert } from "chai";

function test(num: number, expected: number) {
    assert.strictEqual(Challenge.solution(num), expected)
}

describe("solution", function () {
    it("should handle basic tests", function () {
        test(10, 23);
    });
});
