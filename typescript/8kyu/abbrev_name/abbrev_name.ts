export function abbrevName(name: string): string {
    return name.split(" ").map(word => word.charAt(0).toUpperCase()).join(".");
}

import { assert } from "chai";

describe("Sample Test Cases", function () {
    const SamHarris = abbrevName("Sam Harris");
    const PatrickFeenan = abbrevName("Patrick Feenan");
    const RFavuzzi = abbrevName("R Favuzzi");
    it("Should return a proper abbreviate", function () {
        assert.strictEqual(SamHarris, "S.H", "Should return S.H");
        assert.strictEqual(PatrickFeenan, "P.F", "Should return P.F");
        assert.strictEqual(RFavuzzi, "R.F", "Should return R.F");
    });
});