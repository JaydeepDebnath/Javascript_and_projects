// +++++++++++++++++++ Functions +++++++++++++++++++++++++++++++++

// function sayMyName (){  // Function decleration
// console.log("J")
// console.log("A")
// console.log("Y")
// console.log("D")
// console.log("E")
// console.log("E")
// console.log("P")
// }

// sayMyName() // Function execute
// sayMyName // function's reference

// function addTwoNumbers(num1,num2){ // under function paranthisis called parameter
//     console.log(num1+num2);
// }
// function addTwoNumbers(num1,num2){ // under function paranthisis called parameter
//    //  let result = num1 + num2
//     return num1+num2
// }
 
// const result = addTwoNumbers(8,5) // in call time function () it's called argument
// console.log("Result : ", result)

// function loogedInMassage (userName){
//     if (userName === undefined){  // if(!userName){} it's also a same code 
//         console.log("Please Enter a User Name")
//         return
//     }
//     return `${userName} just logged in`
// }

// console.log(loogedInMassage())

// function calculateCartPice(...num1){
//     return num1
// }

// console.log(calculateCartPice(200,400,500))


const user = {
    username : "Jaydeep",
    userId : 234,
    userLocation: " Kolkata"

}

// function handleObject(anyobject){
//     console.log(`The user name is ${anyobject.username} , and it is the id ${anyobject.userId} . The user locaton is ${anyobject.userLocation} `)

// }

// // handleObject(user)
// handleObject({              // we can pass object direct like that
//     username : " Wangdu",
//     userId : "369",
//     userLocation :"Delhi"
// })

const myArray = [200,400,600,500,900]

function returnArraySecondValue(getArray){      // Array pass through function 
    return getArray[1]
}

// console.log(returnArraySecondValue(myArray))
console.log(returnArraySecondValue([200,40,700,800])) // we can pass direct array from here