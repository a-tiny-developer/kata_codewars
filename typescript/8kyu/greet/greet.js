"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}
exports.greet = greet;
const chai_1 = require("chai");
describe("Basic tests", () => {
    it("Should pass basic tests", () => {
        chai_1.assert.equal(greet("Ryan"), "Hello, Ryan how are you doing today?");
        chai_1.assert.equal(greet("Shingles"), "Hello, Shingles how are you doing today?");
    });
});
