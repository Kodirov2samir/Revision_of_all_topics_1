////////////////////////////////////////////////////Symbol///////////////////////////////////////////////////////
// In javascript to create a special identificator which will not be equal to anything even if the name is the same we have Symbols
// Symbols are created with the function Symbol()
let id = Symbol("hi") //Symbol(hi)
console.log(id);

// Even if the description of the symbols are the same they will not be equal
let man = Symbol("man")
let man1 = Symbol("man")
console.log(man == man1);//False

// Symbols cant be unexpectedly converted into a string
// let ball = Symbol("ball")
//alert(ball)=> error
 //This is because alert always converts any data type to a string and shows to the client however Symbol is the exception to make it string we need to directly convert it
 let willBecomeString = Symbol("yes")
 console.log(typeof String(willBecomeString));//String
//  Symbol has its special method: Symbol.description, which shows the description of the symbol
let sink = Symbol("sink")
console.log(sink.description);//sink
// we need to use symbol as a key in object because if we will be using libraries the name "id" can already be taken
//but id never equals to smth that is why it is good to use
let user={
  name:"sam"
}
let ids = Symbol(1)
user.ids = "there"
 console.log(user);//{ name: 'sam', sim: 'there' }
 console.log(user.ids); //there
// in litteral we need to do []
//  let id = Symbol("id");

// let user = {
//   name: "Вася",
//   [id]: 123 // просто "id: 123" не сработает
// };

// the "for in" and "object.keys" both ignore symbols
let addId = Symbol("id")
let obj={
  [addId]:1,
  name:"wolf",
  color:"gray"
}
console.log(obj);//{ name: 'wolf', color: 'gray', [Symbol(id)]: 1 }
let obj1 = {}
 for (const key in obj) {
  obj1[key] = obj[key];
 }
 console.log(obj1);//{ name: 'wolf', color: 'gray' }
//  id is not being shown
// Or
console.log(Object.keys(obj));//[ 'name', 'color' ]
// Again symbol is ignored
//  However when we do object assign id will be copied
let clone = Object.assign({},obj)
console.log(clone);//{ name: 'wolf', color: 'gray', [Symbol(id)]: 1 }

// Sometimes if we want to really make id equal we can use Symbol.for()
// it will search for key with the same name if it doesnt find it will create a new one
// читаем символ из глобального реестра и записываем его в переменную
let idss = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
console.log( idss === idAgain ); // true



// If now we were getting the symbol by the name now we can find them by the symbol
// to do this we have Symbol.keyFor()
let sym = Symbol.for("laptop") //For is needed without it the result is undefined 

console.log(Symbol.keyFor(sym));//laptop
// However as i said before symbol.description is universal
let sym1 = Symbol.for("pc")
  console.log(sym1.description);//pc
  

 
