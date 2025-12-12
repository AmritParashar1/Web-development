// /*Polymorphism */ 

// //Polymorphism can be defined as something that can take multiple forms 

// class Bird{
//     fly(){
//         return `Flying...`;
//     }
// }

// class Penguin extends Bird{
//     fly(){
//         return `Penguins can't fly`;
//     }
// }

// let bird = new Bird();
// let penguin = new Penguin();
// // console.log(bird.fly());
// // console.log(penguin.fly());

// //Static method 

// /*function with static keyword can't be called using objects*/

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
// }

// // console.log(Calculator.add(2,3));

// //Getters and setters

// class Employee{
//     #salary;
//     constructor(name,salary){
//         if(salary<0){
//           throw new Error("Salary can't be negetive");
            
//         }
//         this.name = name;
//         this.#salary = salary;
//     }

//     get salary(){
//         return `You are not allowed to see the salary`
//     }

//     set salary(value){
//         if(value<0){
//             console.error("Invalid salary");
//         }

//         else{
//            this._salary = value; 
//         }
//     }
// }

// let emp = new Employee("Alice",-50000);
// console.log(emp._salary);
// emp.salary = 60000;


class Bird {
    fly() {
        return `Birds can fly`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(penguin.fly());
// console.log(bird.fly());


/*static keyword*/ //: static can be anything it can be a keyword , it can be a method anything

class Calculaor {
    static add(a,b) {
        return `${a+b}`;
    }

    add(a,b) {
        return `${a+b}`;
    }
}

let solution = new Calculaor();
console.log(solution.add(4,3));

console.log(Calculaor.add(2,3));


