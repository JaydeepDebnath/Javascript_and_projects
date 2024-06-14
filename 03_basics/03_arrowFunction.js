const user = {
    username : "Jaydeep",
    userId : 789,
    price : 999,
    welcomMassage :function (){
    console.log(`${this.username}, Welcome to Our website`); // this keyword we can use only on a object
    console.log(this);
    }
}

// user.welcomMassage()
// user.username = "Ram"
// user.welcomMassage()
// console.log(this);

// function code() {
//     let userName = "Jaydeep"
//     console.log(this.userName); // this keyword cannot acceseble in function [Undefined]
// }

// code()

// const fun = function() {
//     let userName = "Jaydeep"
//     console.log(userName);
// }
// fun()
// const fun = () => {         // Arrow function{it's also didn't give access to this property}
//     let userName = "Jaydeep"
//     console.log(this.username);
// }
// fun()

// ++++++++++++++++ Basic Arrow Function Declearation +++++++++++++++++

// const addTwoNumber = (num1,num2) => {
//     return num1 + num2   // explicit return {in case of curly braces return must be required in code}
// }

// console.log(addTwoNumber(4,10))
// const addTwoNumber = (num1,num2) => num1 + num2  // implicit return  [special case]
// const addTwoNumber = (num1,num2) => (num1 + num2) // in paranthisis didn't required return keyword
const addTwoNumber = (num1,num2) => ({username : "Jaydeep"})   // for declare any object should be rap in paranthisis
console.log(addTwoNumber(4,10))


