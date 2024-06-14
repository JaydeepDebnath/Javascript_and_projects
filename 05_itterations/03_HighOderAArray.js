// for of

// ["", "", ""]
// [{}, {}, {}]

const newArr = [1, 2, 3, 4, 5]

for (const obj of newArr) {
    // console.log(obj);
}

// const greetings = "Hello world!"
// for (const great of greetings) {
//     console.log(`Each char is ${great}`)
// }

// Maps  Holds unique valus , also a object

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('UK', "UNited Kingdom")
map.set('SN', "Sweden")


// console.log(map);

for (const [key, value] of map) {
    //  console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman',
//     game3 : 'Valorent',
//     game4 : 'COD',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }