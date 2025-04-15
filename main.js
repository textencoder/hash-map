const {HashMap} = require("./hashMap");

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
//hashTest.entries();


hashTest.set('apple', 'red')
hashTest.set('banana', 'yellow')
hashTest.set('carrot', 'orange')
hashTest.set('dog', 'brown')
hashTest.set('elephant', 'gray')
hashTest.set('frog', 'green')
hashTest.set('grape', 'purple')
hashTest.set('hat', 'black')
hashTest.set('ice cream', 'white')
hashTest.set('jacket', 'blue')
hashTest.set('kite', 'pink')
hashTest.set('lion', 'golden')

console.log(hashTest.map);

hashTest.set('moon', 'silver')

console.log(hashTest.map);