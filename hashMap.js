const { LinkedList, Node } = require("./linkedList.js");

class HashMap {
  constructor(loadFactor, capacity, map = []) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.map = map;
    this.map.length = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    if (
      hashCode % this.capacity < 0 ||
      hashCode % this.capacity >= this.capacity
    ) {
      throw new Error("Trying to access index out of bounds");
    }

    return hashCode % this.capacity;
  }

  resize() {
    console.log("resizing...");
    this.capacity *= 2;
    this.map.length = this.capacity;
    const oldEntries = this.entries();
    this.clear();
    oldEntries.map((entry) => {
      this.set(String(Object.keys(entry)), String(Object.values(entry)));
    });
    //get all current entries
    //rehash each entry with set method
  }

  set(key, value) {
    if (this.map[this.hash(key)] !== undefined) {
      for (const node of this.map[this.hash(key)].list) {
        if (Object.keys(node.value).toString() == key) {
          node.value = { [key]: value };
          return;
        }
        if (Object.keys(node.value).toString() !== key) {
          //console.log(Object.keys(node.value).toString());
          this.map[this.hash(key)].append({ [key]: value });
          return;
        }
      }
    }
    this.map[this.hash(key)] = new LinkedList();
    this.map[this.hash(key)].append({ [key]: value });

    if (this.length() >= this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    if (this.map[this.hash(key)] !== undefined) {
      for (const node of this.map[this.hash(key)].list) {
        if (Object.keys(node.value).toString() === key) {
          console.log("get value: ", Object.values(node.value).toString());
          return Object.values(node.value).toString();
        }
      }
    }
    console.log("null: key not found");
    return null;
  }

  has(key) {
    if (this.get(key)) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }

  remove(key) {
    if (this.map[this.hash(key)] !== undefined) {
      for (const [index, node] of this.map[this.hash(key)].list.entries()) {
        if (Object.keys(node.value).toString() === key) {
          this.map[this.hash(key)].removeAt(index);
          console.log("node removed");
          return true;
        }
      }
    }
    console.log("no matching nodes");
    return false;
  }

  length() {
    let length = 0;
    for (const entry of this.map) {
      if (entry !== undefined) {
        length += entry.list.length;
      }
    }
    //console.log("length: ", length);
    return length;
  }

  clear() {
    for (const [index, entry] of this.map.entries())
      if (this.map[index] !== undefined) {
        console.log("to be cleared: ", index);
        console.log("to be cleared: ", entry);
        delete this.map[index];
      }
  }

  keys() {
    let keysArray = [];
    for (const [index, entry] of this.map.entries()) {
      if (this.map[index] !== undefined) {
        for (const node of entry.list) {
          keysArray.push(Object.keys(node.value).toString());
        }
      }
    }
    console.log("keys: ", keysArray);
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for (const [index, entry] of this.map.entries()) {
      if (this.map[index] !== undefined) {
        for (const node of entry.list) {
          valuesArray.push(Object.values(node.value).toString());
        }
      }
    }
    console.log("values: ", valuesArray);
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    for (const [index, entry] of this.map.entries()) {
      if (this.map[index] !== undefined) {
        for (const node of entry.list) {
          entriesArray.push(node.value);
        }
      }
    }
    console.log("entries: ", entriesArray);
    return entriesArray;
  }
}

module.exports = {
  HashMap,
};
