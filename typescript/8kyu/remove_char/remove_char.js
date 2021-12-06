"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChar = void 0;
function removeChar(str) {
    return str.substring(1, str.length - 1);
}
exports.removeChar = removeChar;
// export function removeChar(str: string): string {
//     return str.slice(1, -1);
// }
const chai_1 = require("chai");
describe('removeChar', () => {
    it('basic tests', () => {
        chai_1.assert.equal(removeChar('eloquent'), 'loquen');
        chai_1.assert.equal(removeChar('country'), 'ountr');
        chai_1.assert.equal(removeChar('person'), 'erso');
        chai_1.assert.equal(removeChar('place'), 'lac');
    });
});
