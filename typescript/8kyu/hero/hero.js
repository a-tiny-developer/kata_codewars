"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hero = void 0;
function hero(bullets, dragons) {
    return bullets >= 2 * dragons;
}
exports.hero = hero;
const chai_1 = require("chai");
describe("Tests:", function () {
    it("Basic tests:", function () {
        chai_1.assert.equal(hero(10, 5), true);
        chai_1.assert.equal(hero(7, 4), false);
        chai_1.assert.equal(hero(4, 5), false);
        chai_1.assert.equal(hero(100, 40), true);
        chai_1.assert.equal(hero(1500, 751), false);
        chai_1.assert.equal(hero(0, 1), false);
    });
});
