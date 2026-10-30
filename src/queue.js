import { ListNode } from '../extensions/index.js';

export default class Queue {
  constructor() {
    this.head = null; // начало очоереди
    this.tail = null; // конец очереди
  }

  // добавить в конец
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; 
      this.tail = newNode;      
    }
  }
  // извлечь из начала
  dequeue() {
    if (this.head === null) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return value;
  }

  // вернуть весь связный список
  getUnderlyingList() {
    return this.head;
  }
}