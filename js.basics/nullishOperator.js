// //////////////////////////////////////////////////Nullish Operator///////////////////////////////////////////////
// ?? is used to manipulate with something if it is neither undefined nor null
console.log(12??undefined);//=>12
//or
let user;
console.log(user ?? "Anonym")//=> "anonym" as user is null
// Actually ?? = || however ?? can differenciate 0 and "" with null and undefined
console.log(0 || 12);//12 as 0 is falsy
console.log(0 ?? 12);//0 as 0 is not null or undefined
// ||=>false
// ??=>undefined or null
// ??=
// we use this to say that if it is null or undefined it has to change
let hi;
hi = hi ??= 15;
console.log(hi);//=>15



