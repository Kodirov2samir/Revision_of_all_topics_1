//As we know the garbage is saved in js untill it is reacheble(it means the can be used)
let john = { name: "John" };

// объект доступен, переменная john — это ссылка на него

// перепишем ссылку
john = null;
// объект будет удалён из памяти

let john1 = { name: "John" };

let array = [ john1 ];

john = null; // перезаписываем ссылку на объект

// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// мы можем взять его значение как array[0]

// The same with map if the object is inside of map even if it is null it will be saved in the memory

// The difference between weakmap and map is that in weakmap the keys always have to be the objects
let weakmap = new WeakMap()
let map = new Map()
map.set("age",10)
weakmap.set({},"hello")
console.log(weakmap);//correct,WeakMap { <items unknown> }
console.log(map);//correct,Map(1) { 'age' => 10 }

map.set({},"hi")
// weakmap.set("age",20)
// console.log(weakmap);//error,we can save primitive
console.log(map);//correct

//so the second difference is that any changes made to an object outside the weakmap will effect the obj inside for example: 
let john2 = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john2 = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!
//But in map, john would be saved

// The third difference is that, there are no iterations with weakmap, so it means that methods like:keys(),value(),entries() do not work with weakmap
// Weakmap has only following methods:
/*
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
*/

// So there is a reason for that. Here javascript itself decide when to delete the object it can be later or immediately, shortly whenever, and the size of the weakmap is unknown, for that reason weakmap dont have access for all the elements inside of itself

// So why do we need weakmap, the answer is: If we are working with the objects that bleong to other code or objects from libraries, we need to save tjis object to weakmap because in case the object is delted it will also be deleted for us, that is why it will not litter our memory

//weakMap.set(john, "секретные документы");
// если john умрёт, "секретные документы" будут автоматически уничтожены

// weakset
// it is similar with set however weakset cant save primitives
//weakset doesn`t have entries key value and size methods
//weakset is just udes to save yes/no answers

 let visitedSet = new WeakSet();

let john4 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john4); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john4); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john4)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false
john4 = null;
// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)