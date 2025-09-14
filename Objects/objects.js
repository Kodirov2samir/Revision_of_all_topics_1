//////////////////////////////////////////////////Objects////////////////////////////////////////////////////////////////////
// There are two ways of opening an object 
// 1) constructor
let obj = new Object 
console.log(obj);
// 2)litteral
let obj1 = {}
console.log(obj1);


// we can also delete something form objects by using "delete"
let exampleobj = {
  name:"Samir",
  age:20
}
console.log(exampleobj); //{ name: 'Samir', age: 20 }
delete exampleobj.age
console.log(exampleobj); //{ name: 'Samir' }


// If we want to make the key consist of two or more words we use ""
let obj2 = {
  name:"Sam",
  //Favourite activity:"football" =>error
  "Favourite activity":"football" //=>correct
}

console.log(obj2);//{ name: 'Sam', 'Favourite activity': 'football' }

// however we cant call the value with two word by full stop
// console.log(obj2.Favourite activity); =>mistake
console.log(obj2["Favourite activity"]); //correct
// however
console.log(obj2.name); //correct
console.log(obj2["name"]); //correct
// in this example both are correct

// to add key with two words
obj2["his name"] = "mrBeast"

obj2["cow"] = "ron"
console.log(obj2);//also correct
 
// if we want to give a variable as a key we do
let cola = "free cola"
obj2[cola] = false
console.log(obj2); //correct

let pepsi = "free pepsi"
obj2.pepsi = true
console.log(obj2); //Also correct


// we also use square brackets to put value oas a prompt
// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5,
// };

// alert( bag.apple );



// we can also shorten our code
function makeUser(name, age) {
  return {
    name, // => name: name
    age   // => age: age
  };
} 
console.log(makeUser("dam",20)); //{ name: 'dam', age: 20 }

// in javascript we can get the element even if it doesnt exist
let user = {};

alert( user.noSuchProperty === undefined ); // true
