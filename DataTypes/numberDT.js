///////////////////////////////////////////////Numbers//////////////////////////////////////////////////////////////
//There are two ways of writing the number
// 1)normal
console.log(120000000)
//2)syntactic sugar
console.log(120_000_000);
//3)Writing "e"
console.log(1e6);//1000000
//In the third way i literally say add to a number 1, 6 zeroes
// Ot this one
console.log(6e2);//600
// Here i say add to the six two zeroes
// With this method we can write small numbers also for ex: 0,0000002
console.log(2e-6); //0.000002
// So it says put 6 zeroes before 2
// however it only works till 6 not 7
 
//toString(base)/Hex, binary and octal numbers
//To string base shows the number in hex,octal or binary numbers
//we need this to protect the code(kodirovanie)
// there are 4 most used number systems
//1) base(2) =>Binary 0b
//2) base(8) =>Octal 0o
//3)base(10) =>decimal(normal number)
//4)base(16) =>hex(ox)
// Note to make the mothod work for a number itself we use double dot(..)
// or we can cover a number into a bracket ()
console.log((20).toString(2));//10100
console.log(20..toString(2));//10100
console.log(20..toString(8));//24
console.log(20..toString(10));//20
console.log(20..toString(16));//14

// toFixed()
// This method shows how many number will be after the ","
console.log(2..toFixed(0));//2
console.log(2..toFixed(4));//2.0000

