"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maps = void 0;
function maps(x) {
    return x.map(v => v * 2);
}
exports.maps = maps;
const chai_1 = require("chai");
describe("Beginner - Lost Without a Map", () => {
    it("Fixed tests", () => {
        chai_1.assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        chai_1.assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
        chai_1.assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
    });
});
