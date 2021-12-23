export function xo(str: string): boolean {
    return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length;
}

// export function xo(str: string) {
//     return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
// }

import { assert } from "chai";

describe("xo", function () {
    it("Basic Tests", function () {
        assert.strictEqual(xo('xo'), true);
        assert.strictEqual(xo("xxOo"), true);
        assert.strictEqual(xo("xxxm"), false);
        assert.strictEqual(xo("Oo"), false);
        assert.strictEqual(xo("ooom"), false);
    });
});
