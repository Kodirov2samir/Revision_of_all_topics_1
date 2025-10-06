//////////////////////////////////////////////Iterations with object///////////////////////////////////////////////
//There three iteration methods with objects in js
//Object.keys()
//Object.values()
//Object.entries()
//Note:Regular objects dont have obj.keys() methods.But why?
/*
First reason:
Flexibility,you can create your own method obj.keys() but you still can be using Object.keys(obj) method
Second reason:
Object.* returns a real object, unlike others that return only iterable
*/
let obj = {
  name:"Samir",
  age:20,
  hobby:"football"
}
console.log(Object.keys(obj).map((item)=>item.toUpperCase()));//[ 'NAME', 'AGE', 'HOBBY' ]

let map = new Map()
map.set("name","samir")
map.set("age",20)
map.set("hobby","football")
let keysOfMap = map.keys()//[Map Iterator] { 'name', 'age', 'hobby' }, we can only iterate, to make a real array we need to do this manually
console.log([...keysOfMap]);//[ 'name', 'age', 'hobby' ]

//Object.keys/values/entries ignore symbolic properties

//If we want to make use of array methods for the objects we can do
function makeAllCapital(obj) {
  return Object.fromEntries(Object.entries(obj).map((item)=>item.map((item)=>String(item).toUpperCase())))
}
 console.log(makeAllCapital(obj));//{ NAME: 'SAMIR', AGE: '20', HOBBY: 'FOOTBALL' }
 //FromEntries makes an object out of array, entries makes array out of object


 let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(Object.values(salaries).reduce((acc,item)=>acc +item,0));
let sum = 0
for (const value in salaries) {
  sum+=salaries[value]
}
console.log(sum);


let user = {
  name: 'John',
  age: 30
};
function onlyNumbers(obj) {
  let arr =[]
   Object.values(obj).filter((item)=>typeof item == "number" ?arr.push(item):item)
   return arr
}

console.log(onlyNumbers(user));



