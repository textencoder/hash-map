import { LinkedList, Node } from "./linkedList.js";

class HashMap {
    constructor(loadFactor = capacity * 0.75, capacity, map = []) {
        this.loadFactor = loadFactor;
        //this.capacity = capacity;
        this.map = map;
        this.map.length = capacity;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 4;
        }
     
        return hashCode;
      } 

    set(key, value) {
      if (this.map[this.hash(key)] !== undefined) {
        if (Object.keys(this.map[this.hash(key)])[0] !== key) {
          console.log('collision course!')
          return;
        }     
      }
      this.map[this.hash(key)] = {[key]: value};
      console.log(this.map);
      //console.log( typeof Object.entries(this.map[this.hash(key)])[0][0])
    }

    get(key) {
      if (this.map[this.hash(key)] !== undefined) {
        if (Object.entries(this.map[this.hash(key)])[0][0] == key) {
          console.log('get value: ', Object.entries(this.map[this.hash(key)])[0][1])
          return Object.entries(this.map[this.hash(key)])[0][1];
        }     
      }
    }
     
    has(key) {
      for (const entry of this.map) {
        if (entry !== undefined) {
          if (Object.keys(entry)[0] == key) {
            console.log('has: ', true);
            return true;
          } else {
            console.log('has: ', false);
            return false;
          }
        }     
      }
    }

    remove(key) {
      for (const [index, entry] of this.map.entries()) {
        if (entry !== undefined) {
          if (Object.keys(entry)[0] == key) {
            delete this.map[index];
            console.log("entry removed")
            return true;
          } else {
            console.log('entry not found/removed');
            return false;
          }
        }     
      }
    }
}

const hashTest = new HashMap(0.75, 12, [])

//console.log(hashTest.hash('Rama'))

hashTest.set('Rama', "tricky")
hashTest.set('Sita', 'glicky')
hashTest.set('Rama', "blicky")
hashTest.get('Rama');
hashTest.has('Ramo');
hashTest.remove('Rama')
console.log(hashTest.map)