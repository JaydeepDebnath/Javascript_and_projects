const myNums = [1,2,3]

const numTotal = myNums.reduce((acc,currValue)=>{
    // console.log(`Accumulator valu is : ${acc} and Current Value is : ${currValue}`)
    // return acc + currValue
},3)

// console.log("The result is ",numTotal)

const shoppingCart = [
    {
    itemName : "JS Course",
    price : 2999,
    },
    {
    itemName : "Python Course",
    price : 999,
    },
    {
    itemName : "Data Scicence Course",
    price : 5999,
    },
    {
    itemName : "Linux Course",
    price : 9999,
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(totalPrice)