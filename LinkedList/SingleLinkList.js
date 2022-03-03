console.log("SingleLinkList");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  get(idx) {
    let counter = 0;
    let start = this.head;

    while (counter !== idx) {
      start = start.next;
      counter++;
    }
    return start;
  }
  set(idx, val) {
    this.get(idx).val = val;
  }
  insert(idx, val) {
    if (idx === 0) {
      this.unshift(val);
    }
    if (idx === this.length) {
      this.push(val);
    } else {
      let prev = this.get(idx - 1);
      let next = prev.next;
      let curr = new Node(val);
      prev.next = curr;
      curr.next = next;
      this.length++;
    }
  }
  remove(idx) {
    if (idx === 0) {
      this.shift();
    }
    if (idx === this.length) {
      this.pop();
    } else {
      let prev = this.get(idx - 1);
      let remove = prev.next;
      prev.next = remove.next;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.head === null) return undefined;
    let newHead = this.head.next;
    let oldHead = this.head;
    this.head.next = null;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  pop() {
    if (this.head === null) return undefined;

    let prev = this.head;
    if (prev.next === null) {
      let lastitem = this.tail;
      this.head = null;
      this.tail = null;
      return lastitem;
    }
    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    let removed = this.tail;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return removed;
  }
  traverse() {
    let start = this.head;
    if (start === null) {
      return undefined;
    }

    while (start !== null) {
      console.log(start.val);
      start = start.next;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
let list = new SingleLinkList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.traverse();
list.reverse();
list.traverse();
// list.unshift(5);
// console.log("!!", list.head);
// list.traverse();
// list.shift();
// console.log("!!", list.head);
// list.traverse();
// list.shift();
// console.log("!!", list.head);
// list.traverse();
// list.shift();
// console.log("!!", list.head);
// list.traverse();
// console.log(list.pop());
// list.traverse();
// console.log(list.pop());
// list.traverse();
// console.log(list.pop());
// list.traverse();
// console.log(list.pop());
// list.traverse();
