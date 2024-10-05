//*********************************************Types of datatypes******************************************/

// 1. Primitive datatypes
// 2. Non-Primitive datatypes

// Examples of primitive datatypes : String , Boolean , Number , Symbol , Null , undefined

// Examples of non-primitive datatypes : Objects (array , functions , objects).

//numbers
let balance = 120;
let anotherbalance = new Number(120); //not recommended
// console.log(typeof balance);
// console.log(typeof anotherbalance); 


//boolean 
let isActive = true;
let isreallyActive = new Boolean(true); //not recommended

//null and undefined
// undefined -> something now is undefined but might come in the future 

// null -> its empty nothing is there


//Strings

// 1. String interpolation

let myString = "hello";
let myStringOne = "Hola";
let username = "Amrit"

let oldGreet = myString + " " + "Amrit";
// console.log(oldGreet);

let greetMessage = `Hello ${username}!`;
// console.log(greetMessage);

let demoone = `value is ${2*2}`;
// console.log(demoone);

//Symbol 

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

console.log(sm1 == sm2);







