"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmi = void 0;
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        return "Underweight";
    }
    else if (bmi <= 25) {
        return "Normal";
    }
    else if (bmi <= 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
exports.bmi = bmi;
const chai_1 = require("chai");
describe("Kata.bmi", function () {
    it("should pass a sample test according to the specifications provided", function () {
        chai_1.assert.strictEqual(bmi(80, 1.80), "Normal");
    });
});
