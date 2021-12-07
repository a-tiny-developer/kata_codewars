export function invert(array: number[]): number[] {
    return array.map(x => -x);
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

// TODO Add your tests here
describe("Invert array values", function () {
    it("Basic Tests", function () {
        assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
        assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
        assert.deepEqual(invert([]), []);
        assert.deepEqual(invert([0]), [-0]);
    });
});