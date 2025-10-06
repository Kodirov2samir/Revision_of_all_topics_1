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

// Searching for a substring, there are several methods
//1) indexOf(substr,pos)
let str1 = "Hello my name is Samir"
console.log(str1.indexOf("Hello"));//0
console.log(str1.indexOf("el"));//1
console.log(str1.indexOf("nam"));//9
console.log(str1.indexOf("namd"));//-1 because namd doesnt exist

let str2 = 'Widget with id';

console.log( str2.indexOf('id') ) // 1 becasue Widget has id which is in 1 index

let str3 = 'Widget with id';

console.log( str3.indexOf('id', 2) ) // 12 finds the second id

// Bitwise "Not" operator
// There are several places where this operator can be used
/*1)*/ console.log(~2) // => - 3, because ~ === -(n+1)
// So why do we need that? This operator is mostly used in indexOf()
let name = "Samir"
console.log(~name.indexOf("r"));//To make the indexOf more compact they said, but honestly this trick is not used nowadays but it can be met in old codes

// By the way ~~(double not)can help us by getting rid of fraction part of the number
console.log(~~3.4);//3

// In includes() there is a second parameter position which shows the position

// str.substring is the same with str.slice, however if the start(first parmeter) is bigger then the second substring just swaps their places, while slice cant do it

let vc = "vanilla"
console.log(vc.slice(1,4));//ani
console.log(vc.substring(1,4));//ani
// however here
console.log(vc.slice(4,1));//" " nothing
console.log(vc.substring(4,1));//ani => the same with (1,4)
// however substring doesnt support negative index
console.log(vc.slice(-1));//a => the last a
console.log(vc.substring(-1));//vanilla
console.log(vc.substring(-4));//vanilla

// So to sum up, Nowadays it is better to use slice

// Substr. !!!today it i preferable not to use substr because it is deprecated(old)
// it is very simple, finds out the string by index, and with the second parameter shows how many to take
console.log(vc.substr(2,4));//nill

// Local compare
// if local compare == 0, it means that string are equal
// if local compare ==-1, str1<str2
// if local compare ==1, str1>str2
let comp1 = "sen"
let comp = "zen"
console.log(comp1.localeCompare(comp));//-1, because z>s
// But why do we need that? Why cant we compare with < > == signs? This is because localcompare can compare signs from different languages
let rus = "ю"
let eng = "a"
let engLast = "z"
console.log(rus.localeCompare(eng));//-1
console.log(rus > eng);//-1

let dd = [1,2,3,4,5,6,7]
dd.splice(5,1)
console.log(dd);

