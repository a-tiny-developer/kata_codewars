export function areYouPlayingBanjo(name: string): string {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

// best practice
// export function areYouPlayingBanjo(name: string): string {
//     return name.charAt(0).toUpperCase() === "R"
//         ? `${name} plays banjo`
//         : `${name} does not play banjo`;
// }

import { assert } from "chai";


describe("Are you playing banjo?", () => {
    it("Fixed test", () => {
        assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
        assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
});
