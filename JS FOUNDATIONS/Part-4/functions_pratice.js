function makeTea(typeoftea) {
    return `Making ${typeoftea}`;
}

let tea = makeTea("chai");
console.log(tea)


//normal function : function greet() {}
//arrow function : const greet = () => {}

const calculateTotal = (price,quantity) => {
    return price*quantity;
}

firsttotal = calculateTotal(10,20);
console.log(firsttotal);


function makeTea(typeofTea) {
    return `Maketea : ${typeofTea}`;
}
function processTeaOrder(teaFunction) {
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
console.log(order);



