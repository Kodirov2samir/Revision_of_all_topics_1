/////////////////////////////////////////////////Array methods///////////////////////////////////////////////////////
//deleting
// As arrays are the objects we can try delete obj.key
let arr =[1,2,3,4,5]
delete arr[2]
// we expect to be [1,2,4,5]
console.log(arr);//[ 1, 2, <1 empty item>, 4, 5 ]
// Moreover the even the length remained
// So we have a better solution
// splice
// it works like this:splice(starting index,how many elements,replace by)
let arr2 = [1,2,3,4,5]
let res =arr2.splice(1,2,"hi") //so i said strating from first index, delete two elements,and replace by "hi" 
console.log(arr2);//[ 1, 'hi', 4, 5 ]
// Reminder:splice changes the array so in the example if i had consoled res:console.log(res) the result would be 2,3 this is because res takes only the deleting part
// We can also just add
arr2.splice(1,0,"i added this as first index")
console.log(arr2);//[ 1, 'i added this as first index', 'hi', 4, 5 ]


//If i we do slice() it will just copy the array


// In concat we can give not only arrays as arguments but also primitive
let ar1 = [1,2] 
let ar2 = [3,4]
console.log(ar1.concat(ar2,5,6));//[ 1, 2, 3, 4, 5, 6 ]

// The difference between map and foreach
// forEach doesnt return anything
// and it doesnt make the copy of the arr or at least doesnt change the original array

//Map return a new array with changed elements but the same length
let example = [1,2,3,4,5]
console.log(example.forEach((item)=>item + 1));//undefined, because forech returns undefined
console.log(example.map(item => item + 1));//[ 2, 3, 4, 5, 6 ], returned a new arr


// indexOf/includes
// syntax:
//indexOf(item,from index) and returns the indexof element that was found
//includes(item,from index) and return true if the result is successful
let ind = [1,2,3,4,5,2]
console.log(ind.indexOf(2));//1, first index
console.log(ind.indexOf(2,2));//5. fifth index

console.log(ind.includes(2) ? `Yes, the array have the number 2` :`No,array doesnt have the number 2`);
// Yes, the array have the number 2
  console.log(ind.includes(6) ? `Yes, the array have the number 6` :`No,array doesnt have the number 6`);
//No,array doesnt have the number 6
  


