class HashMap {
    constructor(loadFactor, capacity, map = {}) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.map = map;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
     
}