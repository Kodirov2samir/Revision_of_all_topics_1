//////////////////////////////////////////////////Json//////////////////////////////////////////////////////////////
//We need json, to send our code to backend, or to get data
//Actually we could use toString Method
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

console.log(user); 
//But as the values always change, toString function also need to be changed  not authomatically but manually, so to avoid this problem there is json format

//Json.stringify()
let person = {
  name:"John",
  age:20,
  "plays football":true,
  opinion:null
}
console.log(JSON.stringify(person));//{"name":"John","age":20,"plays football":true,"opinion":null}

//Note: Json always uses double ticks "", even keys
//we can stringify primitives too
/*
JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
*/
console.log(JSON.stringify(1));
// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]


//Some object properties are skipped:
//Functions (methods)
//Symbols
//properties that cantaine undefined

let user1 = {
  sayHi() { // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(user1) ); // {} (empty object)

//Circular references are not supported by json
// let ref = {}
// ref.self = ref
//circular reference is when the object refers to itself and infinity is made it is like:
//what is ref? A:ask b about this
//What is ref? B:ask a about this
// console.log(JSON.stringify(circRef));//error

