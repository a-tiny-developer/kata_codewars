"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.litres = void 0;
function litres(time) {
    return Math.floor(time / 2);
}
exports.litres = litres;
const chai_1 = require("chai");
describe('Cycling', () => {
    it('Some basic tests', () => {
        chai_1.assert.equal(litres(2), 1);
        chai_1.assert.equal(litres(1.4), 0);
        chai_1.assert.equal(litres(12.3), 6);
        chai_1.assert.equal(litres(0.82), 0);
        chai_1.assert.equal(litres(11.8), 5);
        chai_1.assert.equal(litres(1787), 893);
        chai_1.assert.equal(litres(0), 0);
    });
});
