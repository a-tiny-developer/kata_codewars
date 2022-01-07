"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroFuel = void 0;
const zeroFuel = (distance, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distance;
};
exports.zeroFuel = zeroFuel;
const chai_1 = require("chai");
describe("zeroFill", function () {
    it("Sample Tests", function () {
        chai_1.assert.equal((0, exports.zeroFuel)(50, 25, 2), true);
        chai_1.assert.equal((0, exports.zeroFuel)(100, 50, 1), false);
    });
});
