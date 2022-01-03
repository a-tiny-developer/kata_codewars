"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    switch (a.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${a[0]} likes this`;
        case 2:
            return `${a[0]} and ${a[1]} like this`;
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
};
exports.likes = likes;
const chai_1 = require("chai");
describe('static tests', function () {
    it('should return correct text', function () {
        chai_1.assert.equal((0, exports.likes)([]), 'no one likes this');
        chai_1.assert.equal((0, exports.likes)(['Peter']), 'Peter likes this');
        chai_1.assert.equal((0, exports.likes)(['Jacob', 'Alex']), 'Jacob and Alex like this');
        chai_1.assert.equal((0, exports.likes)(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        chai_1.assert.equal((0, exports.likes)(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
