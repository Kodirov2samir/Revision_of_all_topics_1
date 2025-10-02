/////////////////////////////////////////////////Array methods///////////////////////////////////////////////////////
//deleting
// As arrays are the objects we can try delete obj.key
let arr = [1, 2, 3, 4, 5];
delete arr[2];
// we expect to be [1,2,4,5]
console.log(arr); //[ 1, 2, <1 empty item>, 4, 5 ]
// Moreover the even the length remained
// So we have a better solution
// splice
// it works like this:splice(starting index,how many elements,replace by)
let arr2 = [1, 2, 3, 4, 5];
let res = arr2.splice(1, 2, "hi"); //so i said strating from first index, delete two elements,and replace by "hi"
console.log(arr2); //[ 1, 'hi', 4, 5 ]
// Reminder:splice changes the array so in the example if i had consoled res:console.log(res) the result would be 2,3 this is because res takes only the deleting part
// We can also just add
arr2.splice(1, 0, "i added this as first index");
console.log(arr2); //[ 1, 'i added this as first index', 'hi', 4, 5 ]

//If i we do slice() it will just copy the array

// In concat we can give not only arrays as arguments but also primitive
let ar1 = [1, 2];
let ar2 = [3, 4];
console.log(ar1.concat(ar2, 5, 6)); //[ 1, 2, 3, 4, 5, 6 ]

// The difference between map and foreach
// forEach doesnt return anything
// and it doesnt make the copy of the arr or at least doesnt change the original array

//Map return a new array with changed elements but the same length
let example = [1, 2, 3, 4, 5];
console.log(example.forEach((item) => item + 1)); //undefined, because forech returns undefined
console.log(example.map((item) => item + 1)); //[ 2, 3, 4, 5, 6 ], returned a new arr

// indexOf/includes
// syntax:
//indexOf(item,from index) and returns the indexof element that was found
//includes(item,from index) and return true if the result is successful
let ind = [1, 2, 3, 4, 5, 2];
console.log(ind.indexOf(2)); //1, first index
console.log(ind.indexOf(2, 2)); //5. fifth index

console.log(
  ind.includes(2)
    ? `Yes, the array have the number 2`
    : `No,array doesnt have the number 2`
);
// Yes, the array have the number 2
console.log(
  ind.includes(6)
    ? `Yes, the array have the number 6`
    : `No,array doesnt have the number 6`
);
//No,array doesnt have the number 6
//But there is a problem with indexOf
//indexOf cannot see NaN
let notanumber = [NaN];
console.log(notanumber.indexOf(NaN)); //-1(it didnt find anything)
console.log(notanumber.includes(NaN)); //true(found)

// findIndex its syntax is the same with find but instead findIndex returns index
let array = [1, 2, 3, 4, 5];
console.log(array.findIndex((item) => item == 3)); //2 is the index of the element which is equal to three

//sort
//on default sort() sorts the elements as the string
let arrayd = [46, 5, 39, 5, 721, 83];
console.log(arrayd.sort()); //[ 39, 46, 5, 5, 721, 83 ] => it takes only the first numbers
/*for example:*/ console.log("15" > "95"); //false as 1 is not bigger than nine
//when we sort strings it is better to use localcompare
let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (неправильно)

console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно!)

//Split has the second argument which shows how many elements to take

//Array.isArray(arr)
//it is a function that helps us to check if something is an array
console.log(Array.isArray(["hi", 1])); //true
console.log(Array.isArray({ name: "Samir" })); //false

//Array from is a metgod that makes an array from anything
let str = "hello"
console.log(Array.from(str));//[ 'h', 'e', 'l', 'l', 'o' ]
let obj ={
  name:"samir",
  age:20
}
console.log(Array.from(obj));//[] here it xould make a massive because obj cannot be a massive

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arrs = Array.from(arrayLike); // (*)
console.log(arrs);// [ 'Hello', 'World' ]
