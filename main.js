"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// //static type checking in Functions in TS
// add(5, "rose");
//optional parameters
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Waynne"
};
fullName(p);
//class : Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Mornning " + this.empName);
    };
    return Employee;
}());
var emp1 = new Employee("John");
console.log(emp1.empName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager Delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Steve");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
