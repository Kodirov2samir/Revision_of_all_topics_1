/////////////////////////////////////////////////Garbage collection////////////////////////////////////////////////////////
// In javascript we dont need to control the memory because everything is authomatic
// however what if something is not needed anymore?
//So we have a term reachability, reacheble thing are things that are usable
// And we also have roots, roots are the things that cant be deleted from the memory, for example:
//1) Function which is being used at this moment, and its values and variables
//2) chaining functions and its variables
//3)Global variables
//any other things are reachible => able to be deleted
//So generally reacheble thing that can be reached either by global object window , or other variables
let user = {
  name: "Samir"
};

let admin = user;  // admin и user указывают на один объект

user = null;       // убрали ссылку из user
                   // объект всё ещё достижим через admin

console.log(admin.name); // "Samir"


// let user = {
//   name: "Samir"
// };

// user = null; // теперь нет ссылок на объект => here name samir is going to be deleted because there is no references to this object

// The main algorithm of cleaning is called "mark-and-sweep"