"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}
exports.reverseWords = reverseWords;
// import the type of assertion library you wish to use (Chai recommended)
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return a reversed string", function () {
        chai_1.assert.equal(reverseWords("hello world!"), "world! hello");
        chai_1.assert.equal(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
        chai_1.assert.equal(reverseWords("foobar"), "foobar");
        chai_1.assert.equal(reverseWords("kata editor"), "editor kata");
        chai_1.assert.equal(reverseWords("row row row your boat"), "boat your row row row");
    });
});
