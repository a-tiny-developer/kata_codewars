export function bmi(weight: number, height: number): string {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


import { assert } from "chai";

describe("Kata.bmi", function () {
    it("should pass a sample test according to the specifications provided", function () {
        assert.strictEqual(bmi(80, 1.80), "Normal");
    });
});