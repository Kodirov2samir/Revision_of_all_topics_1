// Function expression is  a type of function that is anonymous
// anonymous means doesnt have a name for example:arr.filter((item)=>console.log(item))=> this is anonymous
// the syntax is simple
let welcome = function () {
  console.log("hello");
};
welcome();
// callback function is the type of function that is given for other function as an argument
function names(question, yes, no) {
  if (false) {
    yes();
  } else {
    no();
  }
}
names(
  "how are you",
  function () {
    console.log("wooooooow");
  },
  function () {
    console.log("why??????????");
  }
);
//so here wooooow and why?????? are callback functions because they are the arguments of a function names
// by the way these callback functions are anonymous 

// the main advantage of expression over declaration (the only)
// let age = 16; // возьмём для примера 16

// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     alert("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }
// }

// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined
// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// welcome(); // теперь всё в порядке