// console.log("i am task1");
// console.log("i am task2");
// setTimeout(() => {
//     console.log("i am called after 2 seconds");
// }, 2000);
// console.log("i am task3");
// Promise.resolve().then(()=>console.log("promise resolved"));


// setTimeout(() => {
//     console.log("i am called after 0 seconds");
// }, 1000);

// setInterval(() => {
//     console.log("i am called after 3 seconds");
// }, 2000);


//clearInterval() and clearTimeout() are used to stop the execution of setInterval() and setTimeout() respectively.
// let intervalId = setInterval(() => {
//     console.log("i am called after 3 seconds");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 4000);

//order is placed and then you can browse the other items while your order is confirming
// , order is confirmed after 3 seconds

console.log("order placed");
setTimeout(() => {
    console.log("order confirmed !!");
}, 3000);
console.log("you can browse other items while your order is confirming");
