export function DNAtoRNA(dna: string): string {
    return dna.replace(/T/g, 'U');
}


import { assert } from "chai";

describe("Sample Test Cases", function () {
    it("Should return a string", function () {
        assert.equal(DNAtoRNA("TTTT"), "UUUU");
        assert.equal(DNAtoRNA("GCAT"), "GCAU");
        assert.equal(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
    });
});
