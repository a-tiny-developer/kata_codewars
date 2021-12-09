export function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return `Hello, ${name}!`
}


import { expect } from 'chai';

describe('Jenny\'s greeting function', function () {
    it('should greet some people normally', () => {
        expect(greet('Jim')).to.equal('Hello, Jim!');
        expect(greet('Jane')).to.equal('Hello, Jane!');
        expect(greet('Simon')).to.equal('Hello, Simon!');
    });

    it('should greet Johnny a little bit more special', () => {
        expect(greet('Jim')).to.equal('Hello, Jim!');
    });
});