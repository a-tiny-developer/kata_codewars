"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = void 0;
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}
exports.DNAtoRNA = DNAtoRNA;
const chai_1 = require("chai");
describe("Sample Test Cases", function () {
    it("Should return a string", function () {
        chai_1.assert.equal(DNAtoRNA("TTTT"), "UUUU");
        chai_1.assert.equal(DNAtoRNA("GCAT"), "GCAU");
        chai_1.assert.equal(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
    });
});
