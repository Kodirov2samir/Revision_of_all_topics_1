// In js there are two ways of creating an array
// 1)[]
// 2)new Array()

// we can change somethig inside of an array by using index
let arr = [1,2,3,4,5]
console.log(arr);//[ 1, 2, 3, 4, 5 ]
arr[2]=100
console.log(arr);//[ 1, 2, 100, 4, 5 ]

/////////////////////arr.at
// arr.at works the same with str.at finds out something by index
// why cant we just do arr[-1] instead of at
//this is because arrays do not support negative index 
console.log(arr[-1]);//undefined
console.log(arr.at(-1));//5 (last element)

// Варианты неправильного применения массива:

// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.


// push is faster then unshift, and it is preferable to use shift more
// when we use unshift:
//it finds out and adds the element with to [0]
//moves all the elemnts after [0] to one more index
//and updates the length
// while push just skips the second part

// Cycles
// there are three cycles that we can use 
//1)for(let i=0;i<10;i++)
//2)for of
//2)for in


