/*

LOOPS 

Guidelines for loops : 

i> keywords 
ii> terminating condition
iii> body of the loop

Types of loops :

For loop 
for/in
for/of
for/each

while loop 
do while loop
*/

//Challenge 1 : Write code using while loop

let sum = 0;
let i = 0;

while(i < 6)
{
    // sum = sum + i;
    i++;
}

// console.log(sum);

//Challenge 2: Write a while loop to count down from 5 to 1 and stores the numbers in an array countdown.

let countDown = [];

let j = 5;

while(j>0)
{
    countDown.push(j);
    j--;
}

// console.log(countDown);

// Challenge 3 : Write a do while loop to enter the your favorite teas in the tea collection 

// let teaCollection = [];

// let tea;

// do 
// {
//     tea = prompt(`Enter your favorite tea (type "stop" to finish)`)

//     if(tea != "stop")
//     {
//         teaCollection.push(tea)
//     }
// }

// while(tea != "stop") 


// Challenge 4 : Write a do- while loop adds number from 1 to 3 and stores the result in a variable named "total"


let k = 0;
let summ = 0;
do
{
    summ = summ + i;
    i++;
}
while(i<4)

// console.log(summ);

//Challenge 5 : Write a for loop that multiplies each element in an array [2,4,6] by 2 and stores the result in a new array

let multipliedNumbers = [];
let numbers = [2,4,6];

for(let l=0;l<numbers.length;l++)
{
    // takenumbers = numbers[l] * 2;
    // multipliedNumbers.push(takenumbers);

    multipliedNumbers.push(numbers[l]*2);
}

// console.log(multipliedNumbers);

//Challenge 6: Write a for loop that lists all the cities in the array and stores each city in the new array named "cityList"

let cities = ["Paris","New York","Tokyo","London"];

let cityList = [];

for(let c=0;c<cities.length;c++)
{
    cityList.push(cities[c]);
}

console.log(cityList);











