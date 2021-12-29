export function spinWords(words: string): string {
    return words.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ');
}

import { assert } from "chai";

describe("spinWords", () => {
    it("should pass some fixed tests", () => {
        assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    });
});
