"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areYouPlayingBanjo = void 0;
function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}
exports.areYouPlayingBanjo = areYouPlayingBanjo;
// best practice
// export function areYouPlayingBanjo(name: string): string {
//     return name.charAt(0).toUpperCase() === "R"
//         ? `${name} plays banjo`
//         : `${name} does not play banjo`;
// }
const chai_1 = require("chai");
describe("Are you playing banjo?", () => {
    it("Fixed test", () => {
        chai_1.assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
        chai_1.assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
        chai_1.assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
        chai_1.assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
        chai_1.assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    });
});
