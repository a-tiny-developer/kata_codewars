export const digitize = (n: number): number[] => {
    let reverse: number[] = [];
    while (true) {
        reverse.push(n % 10);
        n = Math.floor(n / 10);
        if (n <= 0) {
            break;
        }
    }
    return reverse;
};

import * as chai from 'chai'
import { assert, } from "chai";
chai.config.truncateThreshold = 0;

describe("digitize", function () {
    it("Sample test", function () {
        assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
    });
});