"use strict";
/*═══════╕
 │ INTRO │
 ╘═══════*/
let myName = "Tristan";
let meaningOfLife;
let isLoading;
let album; // Union type
myName = "Tristan";
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
album = 1984;
const sum = (a, b) => a + b; //function return type
let postId; // Reason for union type
let isActive; // Reason for union type
let re = /\w+/g;
/*════════╕
 │ ARRAYS │
 ╘════════*/
let stringArr = ['one', 'hey', 'Tristan', 'four']; // (string)[]
let guitars = ['Strat', 'Les Pault', 5150]; // (string | number)[]
let mixedData = ['EVH', 1984, true]; // (string | number | boolean)[]
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
// guitars.unshift(true); // Error: wrong type
guitars.unshift('Jim');
guitars = stringArr;
// stringArr = guitars; // Error: wrong type
let test = []; // any[]
let bands = []; // (string)[]
bands.push('Van Halen');
// bands.push(true); // Error: wrong type
/*════════╕
 │ TUPLES │
 ╘════════*/
let myTuple = ['Tristan', 42, true]; // [string, number, boolean]
let mixed = ['John', 1, false]; // (string | number | boolean)[]
mixed = myTuple;
// myTuple = mixed; // Error: Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
// myTuple[3] = 42; // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
myTuple[1] = 42;
/*═════════╕
 │ OBJECTS │
 ╘═════════*/
let myObj;
myObj = [];
// console.log(typeof myObj); // object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Tristan', // string
    prop2: true, // boolean
};
// exampleObj.prop2 = 42; // Error: Type '42' is not assignable to type 'boolean'.
exampleObj.prop2 = false;
// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// } // Interface (same as type alias)
// let evh: Guitarist = {
//   name: 'Eddie Van Halen',      // string?
//   albums: ['Van Halen', 1984],  // (string | number)[]
// }; // Error: Property 'active' is missing in type '{ name: string; albums: (string | number)[]; }' but required in type 'Guitarist'.
let evh = {
    // name: 'Eddie Van Halen',      // string?
    active: false, // boolean
    albums: ['Van Halen', 1984], // (string | number)[]
}; // VALID
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III'],
};
evh = JP;
JP = evh;
// evh.years = 40; // Error: Property 'years' does not exist on type 'Guitarist'.
/*═══════════╕
 │ FUNCTIONS │
 ╘═══════════*/
// const greetGuitarist = (guitarist: Guitarist): string => `Hello, ${guitarist.name.toUpperCase()}!`; // Error: Object is possibly 'undefined'.
// const greetGuitarist = (guitarist: Guitarist): string => `Hello, ${guitarist.name?.toUpperCase()}!`; // VALID: Optional chaining => (string | undefined)
const greetGuitarist = (guitarist) => {
    return guitarist.name
        ? `Hello, ${guitarist.name.toUpperCase()}!`
        : 'Hello!';
};
// console.log(greetGuitarist(evh)); // Hello, Jimmy!
const logMsg = (message) => console.log(message); // void return type
// logMsg('Hello, World!');
// logMsg(sum(2, '2'));  // '22'
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }; // Fx Interface
let multiply = (a, b) => a * b; // Fx Type: (a: number, b: number) => number
// logMsg(multiply(2, 2)); // 4
// Optional Parameters:
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}; // (a: number, b: number, c?: number) => number
// Default Parameters:
const sumAll = (a, b, c = 2) => a + b + c;
// logMsg(addAll(2, 3, 2)); // 7
// logMsg(addAll(2, 3)); // 5
// logMsg(sumAll(2, 3)); // 7
/*═══════╕
 │ ENUMS │
 ╘═══════*/
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
let id = 42;
// Literal Types
let userName;
userName = 'Jim'; // VALID
// userName = 'Rachel' // Error: Type '"Rachel"' is not assignable to type '"Tristan" | "John" | "Jim"'.
