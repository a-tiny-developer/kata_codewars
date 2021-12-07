export function reverseWords(str: string): string {
    return str.split(" ").reverse().join(" ");
}

// import the type of assertion library you wish to use (Chai recommended)
import { assert } from "chai";

describe("Sample Test Cases", function () {
    it("Should return a reversed string", function () {
        assert.equal(reverseWords("hello world!"), "world! hello");
        assert.equal(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
        assert.equal(reverseWords("foobar"), "foobar");
        assert.equal(reverseWords("kata editor"), "editor kata");
        assert.equal(reverseWords("row row row your boat"), "boat your row row row");
    });
});