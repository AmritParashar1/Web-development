/*Abstraction : It helps in hiding the complex implementation details */

class CoffeeMachine {
    start(){
        //call DB
        //filter value

        return `Starting the machine...`;

    }

    brewCoffee(){
        //complex calculation
        return `Brewing Coffee`;

    }

    pressStartButton(){
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} + ${msg2}`;
    }

}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton());


