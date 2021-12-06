"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSpace = void 0;
function noSpace(x) {
    return x.replace(/\s/g, "");
}
exports.noSpace = noSpace;
const chai_1 = require("chai");
describe('noSpace', () => {
    it('basic tests', () => {
        chai_1.assert.equal(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
        chai_1.assert.equal(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
        chai_1.assert.equal(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
        chai_1.assert.equal(noSpace(''), '');
    });
});
