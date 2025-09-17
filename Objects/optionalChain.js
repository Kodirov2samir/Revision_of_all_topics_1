///////////////////////////////////////////optional chain(?)////////////////////////////////////////////////////////
// In javascript when we receive the object from the backend we may not get all the information for example

//  in backend we usually get
let objUsuall = {
 name:"samir",
 age:20
 }

// But this time age is not given
let objgeNotGiven ={
  name:"samir"
}

// And when we were getting information
console.log(objUsuall.age +" "+"years old");//20 years old
console.log(objgeNotGiven.age +" "+"years old"); //undefined
// but if we use undefined then there will be a mistake so code below will stop working
// we can use either if statement
console.log(objgeNotGiven.age ? objgeNotGiven+" "+"years old":"your age is not given");//your age is not given
// However we have more elegant way to do this
let user = {}; // пользователь без адреса

console.log( user?.address?.street ); // undefined (без ошибки)

// However we need to use optional chain where it is importan not just to be safe

// There are also some examples
let userAdmin = {
  admin() {
    console.log("Я админ");
  }
};

let userGuest = {};

userAdmin.admin?.(); // Я админ

userGuest.admin?.(); // ничего не произойдет (такого метода нет)


let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined
// we can also delete by using chain
let deleting = {
  name:"Men",
  age:1000000
}

delete deleting?.hobby //No mistake
delete deleting.hobby //mistake
