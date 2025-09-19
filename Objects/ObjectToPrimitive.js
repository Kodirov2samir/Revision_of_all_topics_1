/////////////////////////////////////////////////Object to primimtive/////////////////////////////////////////////
//Objects are always true, objects can be coverted either into a number or a string
//1) To a number when we use the object Date(will be discussed later) for example date+date1, i sthe difference between tro dates
//2)To a string whe we use alert(), because alert makes everything string


// When js is trying to convert an object to a string or a number it always uses Hints
/////////////////////////////////////////////Hints/////////////////////////////////////////////////////////
//1)"String" hint
let str ={
  name:"man"
}
// alert
console.log(String(str));//[object Object]
console.log(str + "hello");//[object Object]hello
//2)"Number" hint
let obj ={
  name:"sam",
  age:12
}
let object1 ={}
console.log(Number(obj)); //Nan 
console.log(+obj);//Nan
console.log(obj==object1);//Always false
//"Default" hint
// js uses default hint when it is not sure which type to expect
// also while using == to compare the object and string or number or symbol, js is not sure what to expect
// бинарный плюс использует хинт "default"
let total = object1 + obj;
console.log(total);//Nan

// obj == number использует хинт "default"
console.log(obj == "obj");//false

// There is also a mistake because operators like < > do not use default hint, instead it uses number

// All the built in objects in js(Math,Array,Json,Object,New map,new Set) use default hint, except for Date

// When js is checking methods it uses this order
//1)obj[Symbol.toPrimitive](hint)
//If hint is string
//2) toString() if no valueOf()
//If hint is number or default
//2)obj.valueOf() or obj.toString()

// Basically [Symbol.toPrimitive](hint) says “Если меня (объект) нужно превратить в строку или число — делай это так, как я скажу.”

// То есть это “волшебный метод” для преобразования объекта в примитив.
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
console.log(String(user)); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500