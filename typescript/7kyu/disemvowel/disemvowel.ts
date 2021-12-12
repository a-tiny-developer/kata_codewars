export class Kata {
    static disemvowel(str: string): string {
        return str.split("").filter(c => !"aeouiAEIOU".includes(c)).join("");
    }
}


// export class Kata {
//     static disemvowel(str: string) {
//         return str.replace(/[aeiou]/gi, "");
//     }
// }

import { assert } from "chai";

describe("disemvowel", function () {
    it("should pass a sample test", function () {
        assert.strictEqual(Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
});