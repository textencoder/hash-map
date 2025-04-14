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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i));
    }

    return hashCode % this.capacity;
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
    console.log("length: ", length);
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

const hashTest = new HashMap(0.75, 16, []);

hashTest.set("Rama", "tricky");
hashTest.set("Rama", "whoaaa");
hashTest.set("Dani", "smiggy");
hashTest.set("Paso", "shifty");
hashTest.set("Sita", "glicky");

//hashTest.get("Dani")
//hashTest.get("Sita")
//hashTest.get("Mono")

//hashTest.has("Dani")
//hashTest.has("Sita")
//hashTest.has("Mono")

// hashTest.set("Sita", "glicky");
// hashTest.set("Rama", "blicky");
// hashTest.get("Rama");
// hashTest.has("Ramo");
//hashTest.remove("Rama");
//hashTest.remove("Paco");
//hashTest.length();
//hashTest.clear();
// hashTest.keys();
// hashTest.values();
hashTest.entries();
console.log(hashTest.map);
