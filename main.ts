export {};
let message = "Hello World";
console.log(message);

let num1 = 10;
let num2 = 20;

let title = "Welcome";
const name = "Robin"; // const variable must be initialized before use

// Assign the type of variable

let isValue: boolean = true;
let total: number = 0;
let first_name: string = "John";

let sentence: string = `What is your feedback ${first_name}`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: undefined = undefined;

//Array Declaration

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [2, 3, 4];

//limited Array declaration based on type

let persone1: [string, number] = ["Chris", 22];

//enum Declaraion

enum Color {
    Red = 5, //started value
    Green, //6
    Blue, //7
}

let c: Color = Color.Green;
console.log(c);

//"any" type of variable and its limitations

let randomeValue: any = 10;
randomeValue = true;
randomeValue = "Vishwas";

let myVar: any = 20;

console.log(myVar.name); //no Error - Accessing property
myVar(); //noError - calling as a function
myVar.toUpperCase(); //noError - calling method

//"unknown" type of variable (replaceing "any")

let myValue: unknown = 20;
//User Define Type-Guard for "unknown" type
function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myValue)) {
    console.log(myValue.name);
}
(myValue as string).toUpperCase(); //no Error

//  1 . "Type Inference" with type checking

let a; //not working because no variable initialization
a = 10;
a = true; //no Error

let b = 20; //working
// b = true;
// b = "amit"; //Error

// 2 . TS ability to specify the union of types of same variable.

let multiType: number | boolean; //usecase example in calling APis
multiType = 20;
multiType = true; //only supports the defined types and inteliisece support of IDE

let anyType: any; //not useful most of time
anyType = 20;
anyType = true;
//Functions in TS

function add(a: number, b?: number): number {
    if (num2) return num1 + num2;
    else return num1;
}
add(5, 10);
// //static type checking in Functions in TS
// add(5, "rose");

//optional parameters
add(5);

//interfaces : Object as "type"
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Bruce",
    lastName: "Waynne",
};

fullName(p);

//class : Access Modifiers(to limit the visibility scope of properties )

class Employee {
    public empName: string;
    private empAge: number;
    protected empAgree: boolean;

    constructor(name: string, age: number, agree: boolean) {
        this.empName = name;
    }

    greet() {
        //all variable is accesible inside class
        console.log(
            `Good Mornning ${this.empName} ${this.empAge} ${this.empAgree}`
        );
    }
}

let emp1 = new Employee("John", 29, true);
console.log(emp1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected
emp1.greet();

class Manager extends Employee {
    //Derived Class
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        //Error - private property not accessible in Derived class or anywhere outside class

        console.log(
            `Manager Delegated Tasks ${this.empName} ${this.empAge} ${this.empAgree}`
        );
    }
}

let m1 = new Manager("Steve");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected accessible inside derived but not outside derived
