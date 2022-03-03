class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  find(val) {
    let found = false;
    let cur = this.root;
    while (!found && cur) {
      if (val < cur.val) {
        cur = cur.left;
      } else if (val > cur.val) {
        cur = cur.right;
      } else {
        return true;
      }
    }
    return false;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let cur = this.root;

      while (true) {
        if (val === cur.val) return undefined;
        if (val < cur.val) {
          if (cur.left === null) {
            cur.left = newNode;
            return this;
          } else {
            cur = cur.left;
          }
        } else {
          if (cur.right === null) {
            cur.right = newNode;
            return this;
          } else {
            cur = cur.right;
          }
        }
      }
    }
  }
}

var tree = new BST();
tree.insert(9);
tree.insert(10);

tree.insert(8);

tree.insert(7);

tree.insert(6);

console.log(tree.find(1));
