class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Name: ${this.name}`);
    }
}
class user extends Person{
    constructor(name, age, email){
        super(name, age);
        this.email = email;
    }
    showInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

class BankAcccount{
    constructor(startingBalance,accountHolderName){
        this.balance = startingBalance;
        this.holderName = accountHolderName;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }
    withdraw(amount){
        this.balance -= amount;
    }
    getBalance(){
        console.log(`Current Balance: ${this.balance}`);
    }
}