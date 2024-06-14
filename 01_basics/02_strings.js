const name = " Jaydeep"
const repoCount = 10


// old type   console.log(name + repoCount + "my name is" );


console.log(`My name is ${name} my repo count is ${repoCount}`);   //We can write any string like that
const gameName = new String('jaydeep-dc')
// console.log(typeof gameName);
// console.log(gameName);
// console.log(gameName[2])
// console.log(gameName.__proto__)


// console.log(gameName.toUpperCase())

// console.log(gameName.charAt('2')) Chareector in wich positiion 
// console.log(gameName.indexOf('d'))   to know charector position

// const newString = gameName.substring(1, 5) // brake into two substring 
// console.log(newString)
// console.log(gameName.codePointAt(5)) // number decimal values

const anothString = gameName.slice(-9,4) //  we can gave (-) values to slice
console.log(anothString)
  



