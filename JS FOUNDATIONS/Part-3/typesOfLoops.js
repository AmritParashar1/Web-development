// Write a for loop that loops through the array and stops the loop when it finds "chai". Store all values before "chai" in a new 
// array named "selectedteas".

let teas = ["green tea","black tea","chai","oolong tea"];

let selectedteas = [];

for(let i=0; i<teas.length;i++)
{

    if(teas[i]=="chai")
    {
        break;
    }
    selectedteas.push(teas[i]);
}

// console.log(selectedteas);


//Challenge 2 : Write a for loop that loops through the array and skips a particular element and stores the other elements

let cities = ["London","New York","Paris","Berlin"];

let visitedCities = [];

for(let i=0;i<cities.length;i++)
{
    if(cities[i]=="Paris")
    {
        continue;
    }

    visitedCities.push(cities[i]);
}

// console.log(visitedCities);

//Challenge 3 : Use a for-of loop to iterate through an array and stop when a particular element is found. Store the numbers before that
// particular element;

let numbers = [1,2,3,4,5];
let smallerNumbers = [];

for (const num of numbers) {

    if(num == 4)
    {
        break;
    }
    smallerNumbers.push(num);
    
}

// console.log(smallerNumbers);

// Challenge 4 : Use a for-of loop to iterate through an array

let teass = ["chai","green tea","herbal tea","black tea"]
let preferredTeas = [];

for (const i of teass) {

    if(i=="herbal tea")
    {
        continue;
    }

    preferredTeas.push(i);
    
}

// console.log(preferredTeas);

//Use a for-in loop to loop through an object containing city populations

let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};

let cityNewPopulation = {};

for (const city in citiesPopulation) {

    if(city == "Berlin")
    {
      break;  
    }

    cityNewPopulation[city] = citiesPopulation[city];
    
}

// console.log(cityNewPopulation);


// console.log(Object.keys(citiesPopulation));

//Challenge 6: Use a for-in loop to loop through an object containing city populations. Skip any city below 3 million population

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
};

let LargeCities = {};

for (const city in worldCities) {

    if(worldCities[city] < 3000000)
    {
        continue;
    }

    LargeCities[city] = worldCities[city];

}

// console.log(LargeCities);

//Challenge : 7 Write a for-each loop that iterates through an array and stop the loop when a particular element is found;

let teaCollection = ["earl grey","green tea","chai","oolong tea"];

let availableTeas = [];

teaCollection .forEach(function(tea){
    if(tea == "chai")
    {
        return;
    }

    availableTeas.push(tea);
});

// console.log(availableTeas);

//Challenge 8 : Write a for-each loop that iterates through the array and skip a specific element and store the rest of the elements in the new array.

let WorldCities = ["Berlin","Tokyo","Sydney","Paris"];

let traveledCities = [];

WorldCities.forEach((city) => {

    if(city == "Sydney")
    {
        return;
    }

    traveledCities.push(city);
    
});

// console.log(traveledCities);

//Challenge 9 : Write a for - loop 

let numberss = [2,5,7,9];
let doubleNumbers = [];

for(let i=0;i<numberss.length;i++)
{
    if(numberss[i]==7)
    {
        continue;
    }
    doubleNumbers.push(numberss[i]*2);
}

console.log(doubleNumbers);


//Challenge 10: 

let myTeas = ["chai","greenTea","blackTea","jasmine tea","herbal tea"];

let shortTeas = [];

for (const teas of myTeas) {

    if(teas.length>10)
    {
        break;
    }

    shortTeas.push(teas);
    
}

console.log(shortTeas);














