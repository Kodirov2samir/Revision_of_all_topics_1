////////////////////////////////////////////Date/////////////////////////////////////////////////////////////////////
//To create date we do:
let now = new Date()
console.log(now);//2025-10-08T12:35:38.545Z(Moment i consoled)
//A number, that indecates the number of milliseconds passed from 1970 are called timestamp
//Dates before 1970 have negative timestamp
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );//1969-12-31T00:00:00.000Z

//while 0 is equal to 1970
let Jan1970 = new Date(0)
console.log(Jan1970);//1970-01-01T00:00:00.000Z
//new Date(year, month, date, hours, minutes, seconds, ms)
//For year we need to use four numbers: 2002
//Month start from 0 to 11, 0 is january while december is 11(like index)
//Date should be equal to the date of the month: 24. However if the argument is not give by default it is 1
//If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
//For example:
// new Date = (2011,0,1,0,0,0,0)// 1 Jan 2011, 00:00:00
// //will be equal to
// new Date = (2011,0,1)// 1 Jan 2011, 00:00:00
//The recision is 1ms

////////////////////////////////////////////////////Methods//////////////////////////////////////////////////////////
//GetFullYear() => year
let past = new Date(2016,3,18)
let year = past.getFullYear() 
console.log(year);//2016

//getFullMonth() =>month
console.log(past.getMonth());//3

//getDate()=> date
console.log(past.getDate());//18

//getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log(past.getHours(), past.getMinutes());//0 0 (by default)

//We can also get the day(Monday,Friday...)
//0 is Sunday, 6 is Saturday
console.log(now.getDay());//3//Wednesday

/*
Setting date components
The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/


//AutoCorrection
//If we make mistake in writing the date the engine will correct is byitself,For example:
let incDate = new Date(2025,1,32)//the 32 if february doesnt exist so it is:
console.log(incDate);//2025-03-03T19:00:00.000Z

//Making date number
console.log(+now);//1759929206141 it is amount of milliseconds


//Date now
//it is equal to => new Date().getTime()
console.log(Date.now());//1759929352038 milliseconds
console.log(now.getTime());//1759929352038 milliseconds




 



