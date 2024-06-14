const codding = ["js","Ruby","CPP","Python"]

codding.forEach(function (val){
    // console.log(val);
})
// codding.forEach((val)=>{
//     // console.log(val);
// })

// function printMe(item){
//     console.log(item)
// }

// codding.forEach(printMe)

codding.forEach((item,index,array)=>{
    // console.log(item,index,array);
})

const myCoding = [
    {
        codingLanguage : "Java Script",
        codingFileName : ".JS",
    },
    {
        codingLanguage : "Java",
        codingFileName : ".java",
    },
    {
        codingLanguage : "Python",
        codingFileName : ".py",
    },

]

myCoding.forEach((item)=>{              // for each dosen't return values
    // console.log(item.codingLanguage)
    // console.log(item.codingFileName)
})

const coding = ["JS","Ruby","Python","Cpp"]

const itemResult = coding.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(itemResult);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myNewNums = myNums.filter((num)=> num > 4)         // filter return values
// const myNewNums = myNums.filter((num)=> {
//     return num >=5
// })    

// const myNewNums = []

// myNums.forEach((num)=>{
//     if (num>4) {
//         myNewNums.push(num)         // without using filter
//     }
// })

// console.log(myNewNums);


const myBooks = [
    {
        title : "Book One", genre : "Science Fiction",publishDate : 1995,edition : 2004
    },
    {
        title : "Book Two", genre : "Fiction",publishDate : 1990,edition : 2000
    },
    {
        title : "Book Three", genre : "Science",publishDate : 2000,edition : 2008
    },
    {
        title : "Book Four", genre : "History",publishDate : 2002,edition : 2010
    },
]

let myNewBooks = myBooks.filter((bk)=>{
    // return bk.edition >= 2000
})

// myNewBooks.filter((bk)=> bk.genre === "Scicence" && bk.publishDate >2000)

const NewBooks = myBooks.map((bk)=>{
    return bk.genre
})
console.log(NewBooks)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNums.map((num)=> num *10).map((num)=>num +2).filter((num)=> num>=40)

console.log(myNewNums)
