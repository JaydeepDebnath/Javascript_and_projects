// let isloogedin = 1
// let booleanIsLoogedIn = Boolean(isloogedin)
// console.table([isloogedin,booleanIsLoogedIn]);
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(someNumber);
// console.log(typeof stringNumber)
// console.log("2" == 2);

/* notes of data Types
1.There are 5 types of Premitive Data - String,Number,Boolean,Undefined,Null,Bigint,Symbol

2. Non - premitive data types :- Function,Array,Objects

*/

// const id = Symbol('123')
// const newId = Symbol('123')

// console.log(id == newId);

// ++++++++++++++++++++++++++++

// Types of memory : stack (Premitive) , Heap (Non_Premitive)

let numberOne = 22
number = 23
console.log(number);
console.log(numberOne);


let userOne = {
    mail : "google@com",
    contactNo : '123456' ,
    upiId : 'dayadebnath@ybl'
}

let userTwo = userOne;

userOne.mail = "jaydeep@google.com"

console.log(userOne.mail)
console.log(userTwo.mail)