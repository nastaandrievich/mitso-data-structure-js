import { NotImplementedError } from '../extensions/index.js';
import { Node } from '../extensions/list-tree.js';

export default class BinarySearchTree {
  constructor() {
    this.rootNode = null; // внутренняя переменная для хранения корня
  }

  // возвращает корневой узел
  root() {
    return this.rootNode;
  }

  // добавляет узел
  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._addNode(this.rootNode, newNode);
    }
  }
  // вспомогательный метод для рекурсивного добавления
  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
  }
  }
  // проверяет наличие
  has(data) {
    return this.find(data) !== null;
  }
  // Находит узел
  find(data) {
    return this._findNode(this.rootNode, data);
  }
  _findNode(node, data) {
    if (node === null) return null;
    if (data < node.data) return this._findNode(node.left, data);
    if (data > node.data) return this._findNode(node.right, data);
    return node; // Если data === node.data
  }
  // Удаление
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }
  _removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // нашли узел, который нужно удалить
      // случай1 нет потомков (лист)
      if (node.left === null && node.right === null) {
        return null;
      }
      // случай2 есть только один потомок
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // случай3 есть оба потомка
      // находим минимальный узел в правом поддереве (он встанет на место удаленного)
      let minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      // удаляем этот минимальный узел из правого поддерева
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  // минимальное значение (идем всё время влево)
  min() {
    if (this.rootNode === null) return null;
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  // максимальное значение (идем всё время вправо)
  max() {
    if (this.rootNode === null) return null;
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  // Вспомогательный метод: поиск минимального узла в ветке (нужен для удаления)
  _findMinNode(node) {
    if (node.left === null) return node;
    return this._findMinNode(node.left);
  }
}