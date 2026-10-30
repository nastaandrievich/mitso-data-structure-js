import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

export default function removeKFromList(l, k) {
  // cоздаем "фейковую" голову, чтобы удобно обрабатывать случай, когда нужно удалить самый первый элемент списка.
  let dummy = { value: null, next: l };
  let current = dummy;

  while (current.next !== null) {
    // если следующий элемент содержит k, перепрыгиваем через него
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      // иначе просто идем дальше
      current = current.next;
    }
  }

  // возвращаем реальную голову списка (то, что идет после dummy)
  return dummy.next;
}