console.log("Math Expressions");

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//Solution:
var num1 = 3;
var num2 = 5;

var sum = document.querySelector(".cal");
sum.innerHTML = ("The Sum of " + num1 + " and " + num2 + " is " + (num1 + num2));


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// Solution: 

// var num1 = 3;
// var num2 = 5;

// var sub = document.querySelector(".cal");
// sub.innerHTML = ("The subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2));

// var num1 = 3;
// var num2 = 5;

// var mul = document.querySelector(".cal");
// mul.innerHTML = ("The Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2));

// var num1 = 3;
// var num2 = 5;

// var div = document.querySelector(".cal");
// div.innerHTML = ("The division of " + num1 + " and " + num2 + " is " + (num1 / num2));

// var num1 = 3;
// var num2 = 5;

// var mod = document.querySelector(".cal");
// mod.innerHTML = ("The modulus of " + num1 + " and " + num2 + " is " + (num1 % num2));

/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.

Solution:

Increment abhi nahi parha


*/

/* 4.Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie.
*/

// Solution:

var movieTicket = 600;
var buyticket = 5;

var cost = document.querySelector(".cost");
cost.innerHTML = ("Total Cost to buy " + buyticket + " tickets to a movie is " + (movieTicket * buyticket) +"PKR");

// 5. Write a script to display multiplication table of any number in your browser.

var table = 9;
var tables = document.querySelector(".table");
tables.innerHTML = (
    table + " X 1 = " + (table * 1)+ "<br>" +
    table + " X 2 = " + (table * 2)+ "<br>" +
    table + " X 3 = " + (table * 3)+ "<br>" +
    table + " X 4 = " + (table * 4)+ "<br>" +
    table + " X 5 = " + (table * 5)+ "<br>" +
    table + " X 6 = " + (table * 6)+ " <br>"+
    table + " X 7 = " + (table * 7)+ " <br>"+
    table + " X 8 = " + (table * 8)+ "<br>" +
    table + " X 9 = " + (table * 9)+ "<br>" +
    table + " X 10 = " + (table * 10));

    /* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables 

a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
*/

// Solution:

var priceItem1 = 650;
var orderItem1 = 3;
var priceItem2 = 100;
var orderItem2 = 7;
var shippingCharges = 100;

var cost = document.querySelector(".items");
cost.innerHTML = ("Total Cost of Your Order is " + (priceItem1 * orderItem1 + priceItem2 * orderItem2 + shippingCharges));

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

//Solution:

var obtainMarks = 804;
var TotalMarks = 980;

var student = document.querySelector(".student");
student.innerHTML = ("The Percentage of Student is " + (obtainMarks/TotalMarks*100)+ "%");

/* 
9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)
*/

// Solution:

var usd = 10;
var usdValue = 104.80;
var saudiRiyal = 25;
var riyalValue = 28;

var currency = document.querySelector(".currency");
currency.innerHTML = ("Total Currency in PKR is "+ (usd * usdValue + saudiRiyal*riyalValue));

/*
10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
*/

//Solution:

var intialNumber = 10;
var addNumber = 5;
var multiply = 10;
var divide = 2;

var operation = document.querySelector(".operation");
operation.innerHTML = ((intialNumber + addNumber) * multiply)/divide;

/* 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
*/

//Solution:
var birthYear = 2000;
var currentYear = 2024;
var birth = document.querySelector(".birth");
birth.innerHTML = ("Your age is "+ (currentYear-birthYear));

/* 13. . The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”.
*/

// Solution:

var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;   
var totalSnacksNeeded = daysRemaining * amountPerDay;

var calculate = document.querySelector(".supplycal");
calculate.innerHTML = (
    "Your favourite snack is:" + favoriteSnack +"<br>" +
    "Your Current age is:" + currentAge +"<br>" +
    "Your Maximum age is:" + maximumAge +"<br>" +
    "Your Ammount of snack per day is:" + amountPerDay +"<br>" +
    "You will need :" + totalSnacksNeeded + " " + favoriteSnack + " to last until the rip old age of " + maximumAge);
