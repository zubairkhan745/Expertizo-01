console.log("Variables for numbers");

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// Solution:

var age = 15;
alert("Your age is : " + age);

/* 2.Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */

// Solution:

// Abhi nahi parha


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

//Solution:

var birthYear = 2002;

var birthyear = document.querySelector(".birth");
birthyear.innerHTML= "Your Birth Year is "+ birthYear;

/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
*/

// Solution:
var visitorName = "Zubair Khan";
var productTitle = "T-shirt";
var quantity = 5;

var visitor = document.querySelector(".online-visitor");
visitor.innerHTML = ("Your Name is " + visitorName +  " Your Product is "+ productTitle + " And quantity is "+ quantity);
