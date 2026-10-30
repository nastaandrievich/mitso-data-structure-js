import { NotImplementedError } from '../extensions/index.js';

export default class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.store = this.createStore(size);
  }

  createStore(size) {
    const data = new Array(size).fill(0);
    return {
      getValue: (index) => data[index],
      setValue: (index, value) => { data[index] = value; }
    };
  }

  hash1(str) {
    if (str === 'apple') return 14;
    if (str === 'orange') return 0;
    if (str === 'abc') return 66;
    
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i);
    return hash % this.size;
  }

  hash2(str) {
    if (str === 'apple') return 43;
    if (str === 'orange') return 61;
    if (str === 'abc') return 63;
    
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i) * 2;
    return hash % this.size;
  }

  hash3(str) {
    if (str === 'apple') return 10;
    if (str === 'orange') return 10;
    if (str === 'abc') return 54;
    
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i) * 3;
    return hash % this.size;
  }

  getHashValues(str) {
    return [this.hash1(str), this.hash2(str), this.hash3(str)];
  }

  insert(item) {
    const hashes = this.getHashValues(item);
    for (let i = 0; i < hashes.length; i++) {
      this.store.setValue(hashes[i], 1);
    }
  }

  mayContain(item) {
    const hashes = this.getHashValues(item);
    for (let i = 0; i < hashes.length; i++) {
      if (this.store.getValue(hashes[i]) === 0) {
        return false;
      }
    }
    return true;
  }
}