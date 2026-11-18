// // Operators in JavaScript
// // Arithmetic Operators 
// let a=10;
// let b=20;
// // console.log(a+b); // Addition
// // console.log(a>b);
// // console.log(a==b); // Equal to
// let c='10';
// console.log(a==c); // Equal to
// console.log(a===c); // Strictly equal to

// // console.log(a!=b); // Not equal to
// // console.log(a!=c); // Not equal to

// let x=10;
// let y=20;
// let z=(x>y)?'x is greater than y':'x is less than y';
// console.log(z);

// let m=10;
// console.log(m??"right side value"); // Nullish coalescing operator


// let arr=[1,2,3,4,5];
// console.log(arr[0]); // Accessing array element
// console.log(...arr); 
// //spread operator
// let arr4=[...arr];
// console.log(arr4); // Copying array

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3); // [1,2,3,4,5,6]

// //rest operator
// function sum(...nums){
//     let total=0;
//     for(let i=0;i<nums.length;i++){
//         total+=nums [i];
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5)); // 15

// let obj={
//     name:'John',
//     age:30,
//     address:{
//         city:'New York',
//         state:'NY'  
//     }
// }
// console.log(obj.name); // Accessing object property
// console.log(obj.address.city); // Accessing nested object property

// // let obj2={...obj};//shallow copy
// let obj2=structuredClone(obj); // deep copy

// obj2.address.city='Los Angeles'; 
// console.log(obj2); 
// console.log(obj); // Original object remains unchanged


// //const PI=3.14
// //console.log(Math)

// let pi=Math.PI;
// console.log(pi)

// console.log(Math.round(4.7)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.max(1,2,3,4,5)); // 5
// console.log(Math.min(1,2,3,4,5)); // 1
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random()*10); // Random number between 0 and 10    
// console.log(Math.sqrt(16)); // 4    
// console.log(Math.pow(2,3)); // 8
// console.log(Math.cbrt(16)); // 4 
// console.log(Math.floor(Math.random() * 100) + 1);

// //type conversion
// let num=10;
// let s=String(num);
// console.log(typeof s); // string

// let str='20';
// let n=Number(str);
// console.log(typeof n); // number

// let str2='true';
// let b1=Boolean(str2);
// console.log(typeof b1); // boolean          


//implicit type conversion
let a=100;
let b="20";
console.log(a+b);// 10020
console.log(a-b);// 80
console.log(a*b);// 2000
console.log(a/b);// 5   

//conditional operator
let x=10;
let y=20;
let z=(x>y)?'x is greater than y':'x is less than y';
console.log(z);


let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}



for (let i = 1; i <= 10; i++) {
  console.log(i);
}


let student = {
  name: "Rahul",
  age: 20,
  city: "Mathura"
};

for (let key in student) {
  console.log(key, student[key]);
}
