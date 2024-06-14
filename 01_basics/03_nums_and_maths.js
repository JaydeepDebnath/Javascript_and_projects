// const number= 400
// console.log(typeof number)

const balance=new Number(200.00)
// console.log(balance)

// console.log(balance.toString()) // to convert into string
// console.log(balance.toFixed(2)) // to fixed floating value


// const otherNumber = 123.2568

// console.log(otherNumber.toPrecision(2))

// const hundreds = 100000000

// console.log(hundreds.toLocaleString('en-IN')); // Blank () produce by default US style, but if we use ('en-IN') it's represent as a indian form


//++++++++++++++++++++++++ MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-10)) // to change negtive to positive value

// console.log(Math.round(3.8)); // use to round off values
// console.log(Math.ceil(5.9))  // use celi to collect ciling values, if is it 5.9 it will be 6(5.1 also generate 6)
// console.log(Math.floor(5.9)) // use floor to collect ground values, 5.9 result will be 5
// console.log(Math.pow(2, 5)) // to use power values
// console.log(Math.sqrt(121))

// console.log(Math.min(2,5,10,20,0))
// console.log(Math.max(2,5,10,20,0))

// console.log(Math.random()) // ives value under 0 to 1
// console.log((Math.random()*10)+1)
// console.log(Math.floor((Math.random()*10)+1))

const maxNumber= 20

const minNumber=5

console.log(Math.floor(Math.random()*(maxNumber-minNumber +1)+minNumber ))