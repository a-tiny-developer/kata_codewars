"use strict";
exports.__esModule = true;
exports.removeChar = void 0;
function removeChar(str) {
    return str.substring(1, str.length - 1);
}
exports.removeChar = removeChar;
var chai_1 = require("chai");
describe('removeChar', function () {
    it('basic tests', function () {
        chai_1.assert.equal(removeChar('eloquent'), 'loquen');
        chai_1.assert.equal(removeChar('country'), 'ountr');
        chai_1.assert.equal(removeChar('person'), 'erso');
        chai_1.assert.equal(removeChar('place'), 'lac');
    });
});
