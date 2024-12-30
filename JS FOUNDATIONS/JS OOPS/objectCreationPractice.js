const car = {
    make:"Toyota",
    model:"hello",
    year : 2022,
    start : function() {
        console.log("Car started");
        
    }
};

console.log(car.make);
car.start();

car.year = 2023;
car.color ="blue";
console.log(car);

let cars = ["toyota","honda","volvo"];
console.log(cars[0]);

const calculateTotal = (price,quantity) => {
    return price*quantity;
}

let firsttotal = calculateTotal(10,200);
console.log(firsttotal);

function maketea(teaType) {
    return `making : ${teaType}`;
}

let firstorder = maketea("chai");
console.log(firstorder);




