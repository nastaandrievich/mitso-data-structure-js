import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
export default class Stack {
  constructor() {
    this.items = []; // используем массив для хранения
  }
  push(element) {  // добавить в конец
    this.items.push(element);
  }
  pop() {  // вернуть верхний (последний) элемент и удалить его
    return this.items.pop();
  }
  peek() {  // вернуть верхний (последний) элемент, но не удалять
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
  }
}
