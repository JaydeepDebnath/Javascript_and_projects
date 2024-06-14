//  ++++++++++++++++++++++++++++ Date ++++++++++++++++++++++++++++++++++++

let myDate = new Date
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toUTCString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.getTimezoneOffset())

 //let createNewDate=new Date(2002,3,6,10,30,15) // yyyy-mm-dd, next numbers are time and hour
// let createNewDate=new Date("01-02-2002")
// console.log(createNewDate.toLocaleString());
// let timeStamp = Date.now()

// console.log(timeStamp)
// console.log(createNewDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let NewDate= new Date()

// console.log(NewDate.getDate()) // to extract current date,Year,Month
// console.log(NewDate.getMonth())
// console.log(NewDate.getFullYear())

console.log(NewDate.toLocaleString('default',{
  dayPeriod:"long", 
  timeZoneName : "shortOffset"
}))

