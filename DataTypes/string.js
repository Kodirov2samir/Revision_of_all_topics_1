// In js we cannot crate a string that consist of several lines

// console.log(
//   "w
//   e
//   e"

// );//error
// For that reason we have backticks
console.log(
  `
  w
  e
  e`
);//no error,
// w
// e
// e

// However if we really want to use normal quotes
// There are the things called "special characters"

/////////////////////////////////////////////////////  \n  /////////////////////////////////////////////////////////
// So basically \n does exactly what "eneter" does in the laptop
let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList);
/* John
 * Pete
 * Mary
 * */ 
//or
console.log("hello\n this\n symbols\n creates\n spaces\n");
/*hello
 this
 symbols
 creates
 spaces
*/
// as today they are not used oftenly i decided noy know continue learning them




//Getting element of the string
// So there are two ways 
// 1)by [] and index 
let str = "hello"
console.log(str[1]);//e
//2)By method str.at(index)
console.log(str.at(1));//e

// however
console.log(str[-1]);//undefined (i wanted to take the last letter no matter the length)
console.log(str.at(-1));//o (found the last element)

// basically str.at() works like str.slice() but str.at() shows only one letter

