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
// To make iterations with new Map we need three types of methods:
let ite =  new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);
console.log(ite);//Map(3) { 'огурец' => 500, 'помидор' => 350, 'лук' => 50 }


// map.keys()=>shows the keys
console.log(ite.keys())//[Map Iterator] { 'огурец', 'помидор', 'лук' }
for(let ent of ite.keys()){
  console.log(`the key is: ${ent}`);
}
/*the key is: огурец
the key is: помидор
the key is: лук*/



// map.values()=>shows the value
console.log(ite.values());//[Map Iterator] { 500, 350, 50 }
for(let ent of ite.values()){
  console.log(`the value is : ${ent}`);
}
/*the value is : 500
the value is : 350
the value is : 50*/



// map.entries()=>searchs both the value and the key
console.log(ite.entries());//[Map Entries] { [ 'огурец', 500 ], [ 'помидор', 350 ], [ 'лук', 50 ] }
// this is the same with
for (const ent of ite) {
  console.log(ent);
}
/*[ 'огурец', 500 ]
[ 'помидор', 350 ]
[ 'лук', 50 ]*/

ite.forEach((value,key,map)=>{
  console.log(`Map has its own foreach method where first element is :${value}, seacond is ${key}, and the third is ${map}`);
})
/*Map has its own foreach method where first element is :500, seacond is огурец, and the third is [object Map]
Map has its own foreach method where first element is :350, seacond is помидор, and the third is [object Map]
Map has its own foreach method where first element is :50, seacond is лук, and the third is [object Map]*/

// From object to map
// we can make a simple object a map by using Object.entries method
let obj = {
  name:"samir",
  age:20,
  hobby:"football"
}
let map = new Map(Object.entries(obj))
console.log(map);//Map(3) { 'name' => 'samir', 'age' => 20, 'hobby' => 'football' }
// This worked because Object.entries returned an array with key and value, this is what new Map needs
// Example:[ ["name","samir"], ["age", 20], ["hobby":"football"] ].

// From map to object
// if Object.entries makes an array out of the object, we have a reversed method
//  Object.fromEntries => it makes an object out of array
//Note: array should have key and value, like this:
/*[
['banana', 1],
  ['orange', 2],
  ['meat', 4]
  ]*/
 let makeObj = new Map()
 makeObj.set("samir","name")
 makeObj.set("age",20)
 makeObj.set("hobby","football")

 let readyObj = Object.fromEntries(makeObj.entries())
 console.log(readyObj);//{ samir: 'name', age: 20, hobby: 'football' }
//  so here we just say makeObj make an array because fromentries work only with the array and fromentries just makes the object 


////////////////////////////////////////////new Set////////////////////////////////////////////////////////////////
// new Set=> can contain only values, and the values should be always different
let set = new Set()
console.log(set);//Set(0) {}
set.add("we need to add only value")
set.add(28)
set.add(28)
console.log(set);//Set(1) { 'we need to add only value', 28 }=> as we can see 28 is taken only once
set.delete(28)
set.delete("non existent item")
console.log(set);//Set(1) { 'we need to add only value' }

console.log(set.has("we need to add only value"));

console.log(set.size);//1

set.clear()
console.log(set);//Set(0) {}

//Iterations with new Set
let set1 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set1) console.log(value);
/*апельсин
яблоко
банан*/
// то же самое с forEach:
set1.forEach((value, valueAgain, set) => {
  console.log(value);
});
/*апельсин
яблоко
банан*/

// Set has the same methods with Map
let set2 = new Set()
set2.add("kol")
set2.add("look")
set2.add("rok")

// set.values()
console.log(set2.values());//[Set Iterator] { 'kol', 'look', 'rok' }
//set.keys()=>the same with set.value
console.log(set2.keys());//[Set Iterator] { 'kol', 'look', 'rok' }
//set.entries()=>just makes a simple array
console.log(set2.entries());
/*  [ 'kol', 'kol' ],
  [ 'look', 'look' ],
  [ 'rok', 'rok' ]*/
  //  These methods exist only because sometimes we need to work with both Map and Set

  function unique(arr) {
  return[...new Set(arr)]//i added ... because we need to get rid of{} brackets that belong to Set
  //return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );//[ 'Hare', 'Krishna', ':-O' ]

let map1 = new Map();

map1.set("name", "John");
map1.set("age",20)
map1.set("hobby","football")
let keys = [...map1.keys()]
keys.push("ronaldo")
console.log(keys);//[ 'name', 'age', 'hobby', 'ronaldo' ]
