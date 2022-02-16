// export function createPhoneNumber(numbers: number[]): string {
//     return numbers.join('')
//         .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// }

export function createPhoneNumber(numbers: number[]): string {
    let s = numbers.join('');
    return `(${s.substring(0, 3)}) ${s.substring(3, 6)}-${s.substring(6)}`;
}


import { assert } from "chai";

describe("Create Phone Number", () => {
    it("Fixed tests", () => {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});
