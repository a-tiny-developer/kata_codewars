"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summation = void 0;
const summation = (num) => {
    return num * (num + 1) / 2;
};
exports.summation = summation;
const chai_1 = require("chai");
describe('summation', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, exports.summation)(1), 1);
        chai_1.assert.equal((0, exports.summation)(8), 36);
    });
});
