"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var num1 = 10;
var num2 = 20;
var title = "Welcome";
var name = "Robin"; // const variable must be initialized before use
// Assign the type of variable
var isValue = true;
var total = 0;
var first_name = "John";
var sentence = "What is your feedback " + first_name;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Array Declaration
var list1 = [1, 2, 3];
var list2 = [2, 3, 4];
//limited Array declaration based on type
var persone1 = ["Chris", 22];
//enum Declaraion
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//"any" type of variable and its limitations
var randomeValue = 10;
randomeValue = true;
randomeValue = "Vishwas";
var myVar = 20;
console.log(myVar.name); //no Error - Accessing property
myVar(); //noError - calling as a function
myVar.toUpperCase(); //noError - calling method
//"unknown" type of variable (replaceing "any")
var myValue = 20;
//User Define Type-Guard for "unknown" type
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myValue)) {
    console.log(myValue.name);
}
myValue.toUpperCase(); //no Error
//  1 . "Type Inference" with type checking
var a; //not working because no variable initialization
a = 10;
a = true; //no Error
var b = 20; //working
// b = true;
// b = "amit"; //Error
// 2 . TS ability to specify the union of types of same variable.
var multiType; //usecase example in calling APis
multiType = 20;
multiType = true; //only supports the defined types and inteliisece support of IDE
var anyType; //not useful most of time
anyType = 20;
anyType = true;
//Functions in TS
function add(a, b) {
    return a + b;
}
add(5, 10);
//static type checking in Functions in TS
add(5, "rose");
