"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return `Hello, ${name}!`;
}
exports.greet = greet;
const chai_1 = require("chai");
describe('Jenny\'s greeting function', function () {
    it('should greet some people normally', () => {
        (0, chai_1.expect)(greet('Jim')).to.equal('Hello, Jim!');
        (0, chai_1.expect)(greet('Jane')).to.equal('Hello, Jane!');
        (0, chai_1.expect)(greet('Simon')).to.equal('Hello, Simon!');
    });
    it('should greet Johnny a little bit more special', () => {
        (0, chai_1.expect)(greet('Jim')).to.equal('Hello, Jim!');
    });
});
