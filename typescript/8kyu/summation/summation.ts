export const summation = (num: number) => {
    return num * (num + 1) / 2;
}

import { assert } from "chai";

describe('summation', () => {
    it('basic tests', () => {
        assert.equal(summation(1), 1)
        assert.equal(summation(8), 36)
    })
})