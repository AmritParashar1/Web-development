/*Polymorphism */

class Bird{
    fly(){
        return `Flying...`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//Static method 

/*function with static keyword can't be called using objects*/

class Calculator{
    static add(a,b){
        return a+b;
    }
}

// console.log(Calculator.add(2,3));

//Getters and setters

class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0){
          throw new Error("Salary can't be negetive");
            
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see the salary`
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary");
        }

        else{
           this._salary = value; 
        }
    }
}

let emp = new Employee("Alice",-50000);
console.log(emp._salary);
emp.salary = 60000;

