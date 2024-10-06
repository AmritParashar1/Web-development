//Challenge 1 : declare an array and then extract the first element and assign it to the variable.

let teaFlowers = ["green tea","black tea","oolong tea"];

let teafl = new Array("green tea","black tea","oolong tea");  //another way of initializing an array

// console.log(teaFlowers[0]);

firstTea = teaFlowers[0];

// console.log(firstTea);

//Challenge 2: declare an array and extract the third element and assign it to the variable

let cities = ["London","Tokyo","Paris","New York"];

// console.log(cities[2]);

favoriteCity = cities[2];

// console.log(favoriteCity);

//Challenge 3 : declare an array named teaTypes and change the second element of an array to "jasmine tea"

let teaTypes = ["herbal tea","white tea","masala chai"];

// console.log("Third element before : "+teaTypes[2]);

teaTypes[2] = "jasmine tea";

// console.log("Third element after : "+teaTypes[2]);

//Challenge 4: Declare an array named citiesVisited containing "Mumbai" and "Sydney"

let citiesVisited = ["Mumbai","Sydney"];
// citiesVisited.push("Berlin");
// citiesVisited[2] = "Berlin";
// citiesVisited[citiesVisited.length] = "Berlin"

// console.log(citiesVisited);

//Challenge 5: Pop one element from the array and assign in to the variable

let teaOrders = ["chai","iced tea","matcha","earl grey"];
let n = teaOrders.length;
lastOrder = teaOrders[n-1];

teaOrders.pop();

// console.log(teaOrders);
// console.log(lastOrder);

//Challenge 6: create a soft copy of an array

let popularTeas = ["green Tea","oolong tea","chai"];

let softCopyTeas = popularTeas;

popularTeas.pop();

//In this what is happening that i am deleting something from the main array then it is getting deleted from the copy also.

// console.log(softCopyTeas);
// console.log(popularTeas);

//Challenge 7: create a hard copy of an array

let topCities = ["Berlin","Singapore","New York"];
let hardCopyCities = [...topCities];
topCities.pop();

// console.log(hardCopyCities);
// console.log(topCities);

// Challenge 8: You have two arrays , merge the two arrays to create a third array

let EuropeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];

let worldCities = EuropeanCities.concat(asianCities);

// console.log(worldCities);

//Challenge 9: Find the length of an array and store it in the variable

let teaMenu = ["Masala Chai","oolong tea","green tea","earl tea"];

let menuLength = teaMenu.length;

// console.log(menuLength);


//Challenge 10: Check if the london is their in the array and store the result in the isLondonInList variable

let cityBucketList = ["Kyoto","London","Capetown","Vancouver"];

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);























