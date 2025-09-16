"use strict"
////////////////////////////////////////////Object methods////////////////////////////////////////////////
// Object methods are usually written like this:
let obj = {
  name: function () {
    console.log("Hello");
  }
}
obj.name()
// But we have shorter version 
let shorter = {
  name(){
    console.log("Hello");
    
  }
}
shorter.name()
// It is preferable to use the shorter one



//////////////////////////////////////////////////////This/////////////////////////////////////////////////////////
// Actually we can always use obj.name instead of this.name for example
let objThis ={
  name:"samir",
  greet(){
    console.log(this.name + " "+ "Hello");
  }
}

let objDot ={
  name:"samir",
  greet(){
    console.log(objDot.name + " "+ "Hello");
  }
}

objThis.greet()
objDot.greet()
// The same

// However when we dublicate there can be same bugs for example:
// let objInCorrect = {
//     name:"sam",
//   greet(){
//     console.log(objInCorrect.name + " "+ "Hello");
//   }
// }
// let copy = objInCorrect
// objInCorrect = null
// copy.greet()//error because the name objIncorrect is null
// but if i had used this there wouldn be any mistakes


// Inside of function in use strict "this" is undefined hovewer in normal global
function sayHi() {
  console.log(this); 
}
sayHi()

// Arrow functions dont have their this