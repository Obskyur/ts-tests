/*═══════╕
 │ INTRO │
 ╘═══════*/
let myName: string = "Tristan";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; // Union type

myName = "Tristan";
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
album = 1984;

const sum = (a: number, b: string) => a + b; //function return type

let postId: string | number; // Reason for union type
let isActive: number | boolean; // Reason for union type

let re: RegExp = /\w+/g;

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
let bands: string[] = []; // (string)[]
bands.push('Van Halen');
// bands.push(true); // Error: wrong type

/*════════╕
 │ TUPLES │
 ╘════════*/
let myTuple: [string, number, boolean] = ['Tristan', 42, true]; // [string, number, boolean]
 
let mixed = ['John', 1, false]; // (string | number | boolean)[]

mixed = myTuple;
// myTuple = mixed; // Error: Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.

// myTuple[3] = 42; // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
myTuple[1] = 42;

/*═════════╕
 │ OBJECTS │
 ╘═════════*/
let myObj: object;
myObj = [];
// console.log(typeof myObj); // object
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: 'Tristan', // string
  prop2: true,    // boolean
};

// exampleObj.prop2 = 42; // Error: Type '42' is not assignable to type 'boolean'.
exampleObj.prop2 = false;

type Guitarist = {
  name?: string,
  active: boolean, // Optional property
  albums: (string | number)[],
}; // Type alias

// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// } // Interface (same as type alias)

// let evh: Guitarist = {
//   name: 'Eddie Van Halen',      // string?
//   albums: ['Van Halen', 1984],  // (string | number)[]
// }; // Error: Property 'active' is missing in type '{ name: string; albums: (string | number)[]; }' but required in type 'Guitarist'.

let evh: Guitarist = {
  // name: 'Eddie Van Halen',      // string?
  active: false,                // boolean
  albums: ['Van Halen', 1984],  // (string | number)[]
}; // VALID

let JP: Guitarist = {
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
const greetGuitarist = (guitarist: Guitarist): string => {
  return guitarist.name
    ? `Hello, ${guitarist.name.toUpperCase()}!`
    : 'Hello!';
};

// console.log(greetGuitarist(evh)); // Hello, Jimmy!

const logMsg = (message: any): void => console.log(message);  // void return type

// logMsg('Hello, World!');
// logMsg(sum(2, '2'));  // '22'

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number; // Fx Type alias
// interface mathFunction {
//   (a: number, b: number): number;
// }; // Fx Interface

let multiply: mathFunction = (a, b) => a * b; // Fx Type: (a: number, b: number) => number

// logMsg(multiply(2, 2)); // 4

// Optional Parameters:
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};  // (a: number, b: number, c?: number) => number

// Default Parameters:
const sumAll = (a: number, b: number, c: number = 2): number => a + b + c;

// logMsg(addAll(2, 3, 2)); // 7
// logMsg(addAll(2, 3)); // 5
// logMsg(sumAll(2, 3)); // 7

/*═══════╕
 │ ENUMS │
 ╘═══════*/
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
enum Grade {
  U = 1,
  D,  // 2
  C,  // 3
  B,  // 4
  A,  // 5
}

// console.log(Grade.U); // 1

/*══════════════╕
 │ TYPE ALIASES │
 ╘══════════════*/
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type userId = stringOrNumber;

let id: userId = 42;

// Literal Types
let userName: 'Tristan' | 'John' | 'Jim';
userName = 'Jim'; // VALID
// userName = 'Rachel' // Error: Type '"Rachel"' is not assignable to type '"Tristan" | "John" | "Jim"'.
