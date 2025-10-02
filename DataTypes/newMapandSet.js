////////////////////////////////////////////////new Map//////////////////////////////////////////////////////////////
//Map is a simple object but with the ability to have any type of key
//There is only one way of creating a new Map which is constructor
let objMap = new Map()
console.log(objMap);//Map(0) {}
 //Methods:
 //Map.set(key,value)
 objMap.set(true,"samir")
 objMap.set("age",20)
 console.log(objMap);//Map(2) { true => 'samir', 'age' => 20 }

 //  Map.get(key)=> gets the key, if it doesnt find returns undefined
console.log(objMap.get(true));//samir, so i said get the values of the keys that are true
console.log(objMap.get("hobby"));//undefined

//Map.has(key)=> returns true if the key exists, othervise false
console.log(objMap.has("age"));//true
console.log(objMap.has("hobby"));//false

//Map.delete(key)=>deletes the key and value by key
objMap.delete("age")
console.log(objMap);//Map(1) { true => 'samir' }

//Map.size => checks the size
console.log(objMap.size);//1

//Map.clear()=>clears the whole object
objMap.clear()
console.log(objMap);//Map(0) {}

// The method map[key] = "hi" works, but it is incorrect to use,because in this scenario map will become a simlpe object

//we can also save objects as a key
let john = { name: "John" };

let visitsCountMap = new Map();


visitsCountMap.set(john, 123);

console.log(visitsCountMap); // Map(1) { { name: 'John' } => 123 }

// The keys are compared like Object.is() or === mostly like Object.is() because NaN == Nan true
// Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:

// map.set("1", "str1")
//   .set(1, "num1")
//   .set(true, "bool1");

// iterations of map
let ite = new Map()
ite.set("name","sam")
.set("world","hello")
.set("age",20)
console.log(ite);//Map(3) { 'name' => 'sam', 'world' => 'hello', 'age' => 20 }


console.log(ite.entries());
/*[Map Entries] {
  [ 'name', 'sam' ],
  [ 'world', 'hello' ],
  [ 'age', 20 ]
}*/