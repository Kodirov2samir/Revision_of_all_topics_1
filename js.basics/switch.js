//////////////////////////////////////////////////Switch//////////////////////////////////////////////////////
// switch perlaces several if statements
// Switch consists of several cases, default and break
let guessedNumber = 8
switch (guessedNumber) {
  case 1: //=> if guessNumber ==1,log"more" and stop working
    console.log("more");
    break
    case 6:
      console.log(console.log("less") //=> else if guessNumber ==6,log"less" and stop working
      );
      break
       case 5:
        console.log("yes");//=>else if guessNumber ==6,log"less" and stop working
        
    break;
   default: //=> Else log("you couldn guess")
    console.log("you couldnt guess");
    
  
}
// In the example above as we can see switch does the exact same thing as if
// If i dont write break even if the case is true it will not stop working