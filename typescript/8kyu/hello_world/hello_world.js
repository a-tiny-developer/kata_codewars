"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
// Export a function "greet" that returns "hello world!"
function greet() {
    return "hello world!";
}
exports.greet = greet;
const chai_1 = require("chai");
describe("hello world", () => it("greeting", () => chai_1.assert.equal(greet(), "hello world!")));
