const { LinkedList, Node } =  require("./linkedList.js");

class HashMap {
  constructor(loadFactor, capacity, map = []) {
    this.loadFactor = loadFactor;
    //this.capacity = capacity;
    this.map = map;
    this.map.length = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 31;
    }

    return hashCode;
  }

  set(key, value) {
    if (this.map[this.hash(key)] !== undefined) {
      if (Object.keys(this.map[this.hash(key)]).toString() !== key) {
        this.map[this.hash(key)].append({ [key]: value })
        //console.log(this.map[this.hash(key)].list)
        //console.log(this.map[this.hash(key)])
        //console.log(Object.keys(this.map[this.hash(key)]).toString())
        console.log("collision handled!");
        return;
      }
    }
    this.map[this.hash(key)] = new LinkedList();
    this.map[this.hash(key)].append({ [key]: value })
    //console.log(this.map[this.hash(key)].list)
    //console.log(this.map);
    //console.log( typeof Object.entries(this.map[this.hash(key)])[0][0])
  }

  get(key) {
    console.log(this.map[this.hash(key)].list)
      if (this.map[this.hash(key)] !== undefined) {
        for (const node of this.map[this.hash(key)].list) {
          console.log("node: ", node)
          console.log("node value: ", node.value)
          console.log("node value key: ", Object.keys(node.value).toString())
          if (Object.keys(node.value).toString() === key) {
            console.log("get value: ", Object.values(node.value).toString())
            return Object.values(node.value).toString();
          }
        }
      }
      console.log("null: key not found")
      return null;
    // if (this.map[this.hash(key)] !== undefined) {
    //   if (Object.entries(this.map[this.hash(key)])[0][0] == key) {
    //     console.log(
    //       "get value: ",
    //       Object.entries(this.map[this.hash(key)])[0][1]
    //     );
    //     return Object.entries(this.map[this.hash(key)])[0][1];
    //   }
    // }
  }

  has(key) {
    if (this.map[this.hash(key)] !== undefined) {
      if (Object.entries(this.map[this.hash(key)])[0][0] == key) {
        console.log(true);
        return true;
      }
    }
    console.log(false)
    return false;
  }

  remove(key) {
    if (this.map[this.hash(key)] !== undefined) {
      if (Object.entries(this.map[this.hash(key)])[0][0] == key) {
        console.log("deleted: ", this.map[this.hash(key)]);
        delete this.map[this.hash(key)];
      }
    }
  }

  length() {
    let length = 0;
    for (const entry of this.map) {
      if (entry !== undefined) {
        length++;
      }
    }
    console.log("length: ", length)
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
        //console.log(Object.keys(entry).toString())
        keysArray.push(Object.keys(entry).toString())
      }
    }
    console.log("keys: ", keysArray)
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for (const [index, entry] of this.map.entries()) {
      if (this.map[index] !== undefined) {
        valuesArray.push(Object.values(entry).toString())
      }
    }
    console.log("values: ", valuesArray);
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    for (const [index, entry] of this.map.entries()) {
      if (this.map[index] !== undefined) {
        entriesArray.push(entry)
      }
    }
    console.log("entries: ", entriesArray);
    return entriesArray;
  }
}

const hashTest = new HashMap(0.75, 16, []);

//console.log(hashTest.hash('Rama'))

hashTest.set("Rama", "tricky");
hashTest.set("Dani", "smiggy");
hashTest.set("Paso", "shifty");
hashTest.set("Sita", "glicky");

hashTest.get("Dani")
hashTest.get("Sita")
hashTest.get("Mono")
// hashTest.set("Sita", "glicky");
// hashTest.set("Rama", "blicky");
// hashTest.get("Rama");
// hashTest.has("Ramo");
// hashTest.remove("Rama");
//hashTest.length();
//hashTest.clear();
//hashTest.keys();
//hashTest.values();
//hashTest.entries();
//console.log(hashTest.map);
