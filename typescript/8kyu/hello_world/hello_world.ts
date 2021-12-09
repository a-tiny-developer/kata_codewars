// Export a function "greet" that returns "hello world!"
export function greet(): string {
    return "hello world!"
}

import { assert } from "chai";

describe("hello world", () => it("greeting", () => assert.equal(greet(), "hello world!")));