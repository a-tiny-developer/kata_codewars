"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
const digitize = (n) => {
    let reverse = [];
    while (true) {
        reverse.push(n % 10);
        n = Math.floor(n / 10);
        if (n <= 0) {
            break;
        }
    }
    return reverse;
};
exports.digitize = digitize;
const chai = require("chai");
const chai_1 = require("chai");
chai.config.truncateThreshold = 0;
describe("digitize", function () {
    it("Sample test", function () {
        chai_1.assert.deepEqual((0, exports.digitize)(35231), [1, 3, 2, 5, 3]);
    });
});
