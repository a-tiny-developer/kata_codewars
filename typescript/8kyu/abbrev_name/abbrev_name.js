"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abbrevName = void 0;
function abbrevName(name) {
    return name.split(" ").map(word => word.charAt(0).toUpperCase()).join(".");
}
exports.abbrevName = abbrevName;
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    const SamHarris = abbrevName("Sam Harris");
    const PatrickFeenan = abbrevName("Patrick Feenan");
    const RFavuzzi = abbrevName("R Favuzzi");
    it("Should return a proper abbreviate", function () {
        chai_1.assert.strictEqual(SamHarris, "S.H", "Should return S.H");
        chai_1.assert.strictEqual(PatrickFeenan, "P.F", "Should return P.F");
        chai_1.assert.strictEqual(RFavuzzi, "R.F", "Should return R.F");
    });
});
