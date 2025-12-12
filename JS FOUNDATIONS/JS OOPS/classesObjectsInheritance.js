// /*                                                         OOPS(OBJECT ORIENTED PROGRAMMING)   

//                                                 Encapsulation , Inheritance , Polymorphism and Abstraction
// */

// /*Object creation literal method: this method can be used when you have to create only one object */
// let car = {
//     make : "Toyota",
//     model : "Camry",
//     year : 2020,

//     start: function() {
//         return `${this.make} car got started in ${this.year}`;
//     },
// };

// // console.log(car.start());

// /*Object creation using constructor function: this method can be used to create multiple objects.*/

// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
// }

// let john = new Person("John Doe", 20);

// // console.log(john.name);

// /*Prototypal change */

// function Animal(type)
// {
//     this.type = type;
// }

// Animal.prototype.speak = function(){

//     return `${this.type} makes a sound`;
// }

// Array.prototype.amrit = function() {
//     return `Custom method ${this} `
// }

// let myArray = [1,2,3];
// // console.log(myArray.amrit());

// let myNewArray = [1,2,3,4,5,6];
// // console.log(myNewArray.amrit());


// /*Creation of Class */
// class Vehicle {

//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//     }

//     start() {
//         return `${this.model} is a car from ${this.make}`;

//     }
  
// }

// class Car extends Vehicle{
//     drive(){
//         return `${this.make} : This is an inheritance example`;
//     }
// }

// let myCar = new Car("Toyota","Corolla")
// // console.log(myCar.start());
// // console.log(myCar.drive());



let car = {
    make : "Toyota",
    year : "2020",
    model : "Camry",

    start : function() {
        return `${this.make} was started in ${this.year}`;
    }
};

// console.log(car.start());

function Person(name,age) {
    this.name = name;
    this.age = age;
}

let john = new Person("john",20);
console.log(john.name);

function Animal(type) {
    this.type = type;
}


Animal.prototype.speak = function() {
    return `${this.type} makes a funny sound`;
}

Array.prototype.hitesh = function() {
    return `custom method ${this}`;
}



//Creation of Class 

class Vehicle {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}


class Cars extends Vehicle {
    drive() {
        return `${this.make} : this is an inheritence example`;
    }
} 


let myCar = new Cars("Toyota","Corolla");
console.log(myCar.start());















