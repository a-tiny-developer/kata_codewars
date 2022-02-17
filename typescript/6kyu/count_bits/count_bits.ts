function countBits(n: number): number {
    return n.toString(2).match(/1/g)?.length ?? 0;
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";


// TODO Add your tests here
describe("example", function () {
    it("test", function () {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(4), 1);
        assert.equal(countBits(7), 3);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(10), 2);
        assert.equal(countBits(1234), 5);
    });
});
