const name = "Amrit Parashar";
const repocount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('amritparashar')
console.log(gamename)

console.log(gamename[0]);  //give you charof specific index

console.log(gamename.__proto__); //gives you the object

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('m'));

const newString = gamename.substring(0,4);
console.log(newString);

const anotherstring = gamename.slice(-6,1);
console.log(anotherstring);

const newstring = "     amrit    ";
console.log(newstring);
console.log(newstring.trim())

const url = "https://amrit.com/amrit%20parashar"
console.log(url.replace('%20','-'));

console.log(url.includes("amrit"))

console.log(url.includes("hello"))






















