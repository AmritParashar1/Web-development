//Challenge 1 : 

function makeTea(typeOfTea)
{
   return `Making ${typeOfTea}`;
   
}

let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

//Challenge 2 :

function orderTea(teaType)
{
    function confirmOrder()
    {
        return `Order confirmed for chai`;
        
    }

    return confirmOrder();
}

let orderConfirmation = orderTea("Chai");
// console.log(orderConfirmation);

//Challenge 3: Write an arrow function 


// normal function :- function greet() {}
// arrow function :- const greet = () => {}

//one way 

// const calculateTotal = (price , quantity) => {
//     return price*quantity;
// }  

// let totalCost = calculateTotal(499*100); 

//2nd way : where you will get rid of curly braces and remove the return part and apprantly the code should be in one line.

const calculateTotal = (price,quantity) => price*quantity;

let totalCost = calculateTotal(399,13000);

// console.log(totalCost);

//Challenge 4 : Higher order function or First class function

function makeTea(typeOfTea){
    return `maketea : ${typeOfTea}`;
}
function processTeaOrder(teaFunction)
{
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea);
// console.log(order);

//Challenge 5: 

function createTeaMaker(name)
{
    return function(teaType)
    {
        return `Making ${teaType}`;
    }
}

let teaMaker = createTeaMaker("amrit");
let result = teaMaker("green tea");
console.log(result);

//there is a feature in javaScript which is known as closure which ensures that the variables of the outer function can be accessed by the inner functions. 










