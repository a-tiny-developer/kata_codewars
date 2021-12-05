import solution = require('../solution');
import { assert } from "chai";

describe("solution", function () {
    it("basicTests", function () {
        assert.equal(solution.even_or_odd(2), "Even");
        assert.equal(solution.even_or_odd(0), "Even");
        assert.equal(solution.even_or_odd(7), "Odd");
        assert.equal(solution.even_or_odd(1), "Odd");
    });
});