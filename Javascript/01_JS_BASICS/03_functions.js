function verifyPayment(transactionId) {
    if(transactionId === "undefined") {
        console.log("Payment is failed !!");
        return;
    } 
    console.log("Payment is successfull !!");
}
verifyPayment('12345');

// function addExpense(...exp) {
//     console.log("Expenses: " + exp);
//     //return exp1 + exp2;
// }

const addExpense = (exp1, exp2) => {
    return exp1 + exp2;
}

const totalExpense = addExpense(100, 200);
console.log("Total Expense: " + totalExpense);

const addNumbers = (a, b) => {
    return a + b;
}
console.log(addNumbers(10, 20));



const user1={
    "name":"deepti",
    email:"deepti@gmail.com",
    address:"agra",
    ottSubscriptions:{
        netflix:"basic",
        amazonPrime:"premium"
    },
    show:() => {
        console.log(`user:${this.name} has netflix subscription of ${this.ottSubscriptions} variant`)
    }
}
console.log(user1.show());



//callback function
function calc(a, b, callback) {
    console.log(a,b,callback);
    return callback(a, b);
   
    
}
 function add(a, b) {
        return a + b;
    }
console.log(calc(10, 20, add));


const products=[
    {name:"milk", price: 20},
    {name:"bread", price: 30},
    {name:"eggs", price: 10}
]