console.log("VARIABLE NAMES: LEGAL & ILLEGAL ");

// 1. Declare 3 variables in one statement.

//Solution:

var num1 = 10 , num2 = 20 , num3 = 30;

// 2. Declare 5 legal & 5 illegal variable names.

// Answer:

// Legal

 /*
 1. Values start from any numeric values like variable
 2. value contains number also like num1.
 3. value conatins camel case.
 4. value contains underscore.
 5. firstName and Firstname are multiple variables because of case sensitive
 
 Illegal

1. 123illegalVariable (Variable names cannot start with a number)
2. my-variable (Variable names cannot contain hyphens)
3. var (Reserved keyword in JavaScript)
4. first name (Variable names cannot contain spaces)
5. my variable! (Variable names cannot contain special characters except underscore)
*/

/* 3. . Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________

*/

// Solution: 

var rules = document.querySelector(".rules");
rules.innerHTML = ("Rules for naming JS variables");

var rule2 = document.querySelector(".rule-2");
rule2.innerHTML = (" Variable names can only contain ______, ______,______ and ______.For example $my_1stVariable");

var rule3 = document.querySelector(".rule-3");
rule3.innerHTML = ("Variables must begin with a ______, ______ or _____. For example $name, _name or name");

var rule4 = document.querySelector(".rule-4");
rule4.innerHTML = (" Variable names are case _________");

var rule5 = document.querySelector(".rule-5");
rule5.innerHTML = ("Variable names should not be JS _________");


