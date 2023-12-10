import { Stack } from "./app";

describe("Testing Stack class", () => {
  const stack = new Stack<number>();

  it("We should be able to create an instance of Stack", () => {
    expect(stack).toBeTruthy();
  });

  it("Stack should receive pushed element", () => {
    stack.push(2);
    expect(stack.items.length).toEqual(1);
  });

  it("Stack should have 2 elements", () => {
    stack.push(1);
    expect(stack.items.length).toEqual(2);
  });

  it("Retrieving stack item", () => {
    expect(stack.items[0]).toEqual(2);
  });

  it("Remove stack element", () => {
    stack.push(3);
    stack.push(4);
    stack.push(5);

    const removedItem = stack.splice(2, 2);

    expect(removedItem).toEqual([3, 4]);
    expect(stack.items.length).toEqual(3);
    expect(stack.items[2]).toEqual(5);
  });

  it("When insert items using splice", () => {
    stack.splice(1, 0, 4);
    expect(stack.items).toEqual([2, 4, 1, 5]);
  });

  it("When insert 3 items using splice", () => {
    const newStack = new Stack(1, 2, 3);

    expect(newStack.items).toEqual([1, 2, 3]);

    newStack.splice(2, 0, 4, 5, 6);

    expect(newStack.items).toEqual([1, 2, 4, 5, 6, 3]);
  });

  it("Pop method should remove and return last item from collection", () => {
    const newStack = new Stack(4, 5, 6);

    const removedItem = newStack.pop();

    expect(removedItem).toBe(6);

    expect(newStack.items).toEqual([4, 5]);
  });

  it("Pop method when not removing any elements should return null", () => {
    const newStack = new Stack();
    expect(newStack.pop()).toBe(null);
  });
});
