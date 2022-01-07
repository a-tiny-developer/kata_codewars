"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = void 0;
function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
exports.countSheep = countSheep;
// * Clever
// export function countSheep(num: number): string {
//     return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
// }
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return a string", function () {
        chai_1.assert.equal(countSheep(0), '');
        chai_1.assert.equal(countSheep(1), '1 sheep...');
        chai_1.assert.equal(countSheep(2), '1 sheep...2 sheep...');
        chai_1.assert.equal(countSheep(3), '1 sheep...2 sheep...3 sheep...');
    });
});
