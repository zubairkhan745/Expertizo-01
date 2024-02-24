// console.log("Functions in JavaScript");

// function merafunc(){
//     console.log("Zubair Khan Function is available");
// }

// merafunc();
// // function merafunc(parameter){
// //     console.log("Zubair Khan Function is available");
// // }
// // merafunc(argument);
// function tableNumber(num){
//     console.log(num + " x 1 = " + num*1);
//     console.log(num + " x 2 = " + num*2);
//     console.log(num + " x 3 = " + num*3);
//     console.log(num + " x 4 = " + num*4);
//     console.log(num + " x 5 = " + num*5);
//     console.log(num + " x 6 = " + num*6);
//     console.log(num + " x 7 = " + num*7);
//     console.log(num + " x 8 = " + num*8);
//     console.log(num + " x 9 = " + num*9);
//     console.log(num + " x 10 = " + num*10);
// }
// var numberOfTable = +prompt("Enter number of table");
// tableNumber(numberOfTable);


// console.log('hello world');
// console.log('hello world1');
// console.log('hello world2');
// console.log('hello world3');


// function greetUser() {
//     console.log('hello world');
//     console.log('hello world1');
//     console.log('hello world2');
//     console.log('hello world3');
// }

// greetUser();
// greetUser();



//function bnata waqt () ka undar jo bhi likhonga iska matlb function k undar parameter receive horha haa || function call krta waqt jo values bhejonga usko kahonga argument pass kr rha ho!


// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// var abc = +prompt('Enter num1');
// var xyz = +prompt('Enter num2');
// sum(abc, xyz)


// function createTable(num){
//     console.log(num + " x 1 = " + num * 1);
//     console.log(num + " x 2 = " + num * 2);
//     console.log(num + " x 3 = " + num * 3);
//     console.log(num + " x 4 = " + num * 4);
//     console.log(num + " x 5 = " + num * 5);
//     console.log(num + " x 6 = " + num * 6);
//     console.log(num + " x 7 = " + num * 7);
//     console.log(num + " x 8 = " + num * 8);
//     console.log(num + " x 9 = " + num * 9);
//     console.log(num + " x 10 = " + num * 10);
// }

// var numberForTable = +prompt('enter number for table!');
// createTable(numberForTable)


// var num = prompt('enter value');
// console.log(num);


// function sum(num1 , num2){
//     // console.log(num1 + num2);
//     var sumOfNumber = num1 + num2
//     return sumOfNumber
// }
// var user = sum(10 , 20);
// console.log('custom function===>' , user);


// function multiplyNumbers(num1, num2, num3) {
//     return num1 * num2 * num3
// }

// var totalAmount = multiplyNumbers(10, 20, 30)
// console.log('multiplication ===> ', totalAmount);


// function greetUser(num1 , num2){
//     console.log(num1 + num2);
//     return 'hello world'
// }

// greetUser(10 , 20);



//local or global variable


// var username = 'abdullah'

// function greetUser(){
//     var lastname = 'khan'
//     console.log('Hello ' + username + ' ' + lastname);
// }
// console.log(lastname);
// greetUser()


// var num = null;
// console.log(num);


// function calculator(num1, num2, symbol) {
//     if (isNaN(num1) || isNaN(num2)) {
//       return "Invalid input: Please enter valid numbers.";
//     }

//     if (symbol === "+") {
//       return num1 + num2;
//     } else if (symbol === "-") {
//       return num1 - num2;
//     } else if (symbol === "*") {
//       return num1 * num2;
//     } else if (symbol === "/") {
//       if (num2 === 0) {
//         return "Division by zero error!";
//       } else {
//         return num1 / num2;
//       }
//     } else {
//       return "Invalid symbol: Please use +, -, *, or /.";
//     }
//   }
  
//   let num1 = +prompt("Enter first number:");
//   let num2 = +prompt("Enter second number:");
//   let symbol = prompt("Enter symbol (+, -, *, /):");
  
//   try {
//     let result = calculator(num1, num2, symbol);
//     console.log("Result:", result);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
  

// var h1 = document.querySelector(".header");
// h1.innerHTML = "Change by me" ;
// console.log(h1);


// function call(){
//     console.log("This is it");
// }


var h1 = document.querySelector("h1")

function call() {
    if (h1.innerHTML === "Hello Functions") {
        h1.innerHTML = "Changed By Js";
    }else{
        h1.innerHTML = "Hello Functions";
    }
}
