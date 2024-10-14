/*Encapsulation
Its a simple concept that restricts direct access to data objects.
*/


class BankAccount{

    #balance = 0;

    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());


