import { Stack } from "./app";

describe("Testing Stack class", () => {
    it("We should be able to create an instance of Stack", () => {
        const stack = new Stack()

        expect(stack).toBeTruthy()
    })
})