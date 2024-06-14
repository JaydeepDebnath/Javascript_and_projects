// const myArr= [1,2,3,4,5,]

const myHerros=["ironman","Deadpool","Captain America","Thor"]

const myArr2= new Array(2,3,4,5,6,7)

// console.log(myArr[2]);
// console.log(myHerros[1]);
// console.log(myArr2[0]);

// myArr.push(8,9) // to push another elements in array
// myArr.pop() // delete last element of array
// myArr.unshift(7) // to insert elemnt in 0'th index on array
// myArr.shift() // to remove array 0'th element

// console.log(myArr.includes(2)); // its shows that element includes or not
// console.log(myArr.indexOf(3)); // its return us element's index

// const mynewArray = myArr.join()// .join() operator convert array to String

// console.log(myArr)

// console.log(mynewArray)

// console.log(typeof mynewArray)
const myArr= [1,2,3,4,5,]

// console.log(myArr)

// const myn1 = myArr.slice(0,4) // didnt count last element

// console.log(myn1)

// console.log("slice", myn1)

// const myn2 = myArr.splice(1,3) // manipulate original array

// console.log(myn2)

// console.log("splice", myn2)

const marvel_Heros = ["Ironman","Captain America","Thor"]
const dc_Heros = ["Batman","Superman","Flash","woolvarine"]

// marvel_Heros.push(dc_Heros) // push 

// console.log(marvel_Heros)

// const all_heros = marvel_Heros.concat(dc_Heros) // concat gives us a new array

// console.log(all_heros); // to acces array element put first array index then second

const all_Newheros = [...marvel_Heros,...dc_Heros] // "..."- means spread, which spread all arrays so that we can access array elements

// console.log(all_Newheros)

// const another_array = [2,3,4,[15,20],8,[9,20,[10,20]]]

// const real_another_array = another_array.flat(Infinity)  // flat (array_depth) use to create a single array between 2 or 3 connected array


// console.log(real_another_array)

// console.log(Array.isArray("jaydeep"))
// console.log(Array.from("jaydeep")) // from use to convert in array
// console.log(Array.from({name : " jaydeep"}))

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3)) // of use to convert into array some variable or some object 



