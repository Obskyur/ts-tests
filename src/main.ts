let myName: string = "Tristan";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; // Union type

myName = "Tristan";
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
album = 1984;

const sum = (a: number, b: string) => a + b;

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;