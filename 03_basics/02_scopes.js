// Why we dosen't us var ?

// let a = 10
// const b = 20
let a = 300     // global scope


// if (true){      // block scope 
//     let a = 10
//     const b = 20  
//     // var c = 10
//     console.log("INNER :",a)
// }

// console.log("OUTER :",a)
// console.log(b)
// console.log(c) // var exist the outside of block scope, thats why we didnt use var

// function one(){
//     const usrName = "Jaydeep"
//     function two(){
//         const id = "SocialMedia"
//         console.log(usrName)
//     }
//     // console.log(id)

//     two()
// }
//  one()

if(true){
    const username   = "Jaydeep"
    if (username === "Jaydeep") {
        const website = " My web page"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


// ++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++
console.log(addOne(5)) // if we declare function alone we can access before execution
function addOne(num){
    return num+1
}

// console.log(addTwo(5))           // [Hosting], if we declare function as a constant we cannot access before execution
const addTwo = function (num){
    return num +2
}

// console.log(addTwo(5))