"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static disemvowel(str) {
        return str.split("").filter(c => !"aeouiAEIOU".includes(c)).join("");
    }
}
exports.Kata = Kata;
// export class Kata {
//     static disemvowel(str: string) {
//         return str.replace(/[aeiou]/gi, "");
//     }
// }
const chai_1 = require("chai");
describe("disemvowel", function () {
    it("should pass a sample test", function () {
        chai_1.assert.strictEqual(Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
});
