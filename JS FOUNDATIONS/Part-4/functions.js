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

// const calculateTotal = (price,quantity) => {
//     return price * quantity;

// }

// OR

const calculateTotal = (price,quantity) => price*quantity;

let totalCost = calculateTotal(499*100);




