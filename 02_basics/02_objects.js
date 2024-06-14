// singelton
// Object.create()

// object literals

const mySymbol = Symbol("key1") 

const Jsuser = {
    name : "Jaydeep",
    age : 18,
    [mySymbol] : "Mykey1", // [] when we declare any symbol , it should be in squre bracket 
    location : "Baidyabati",
    email : "Jaydeep@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","Sunday"]


}

// console.log(Jsuser.email); // first way to access objects
// console.log(Jsuser["location"]); // seconf and best way to use objects
// console.log(Jsuser[mySymbol])

Jsuser.email = "Jaydeepdebnath789@gmail.com"
// Object.freeze(Jsuser)  // freeze is used to fixed values in object 
Jsuser.location = " bandel"
Jsuser.email = "Jaydeepdebnath42@gmail.com"

// console.log(Jsuser)

// Jsuser.greeting = function(){
//     console.log("Hello JS User");
// }
// Jsuser.greetingTwo = function(){
//     console.log(`Hello JS User ${this.email}`); // this property use to access in own object
// }

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());

const tinderUser = new Object() // this are singelton object declare

tinderUser.name = "Lodu"
tinderUser.age = 20

// console.log(tinderUser);

const GanaUser = {
    userEmail : " someone@gmail.com ",
    userFullName : {
        UserFirstname : " Jaydeep ",
        UserLastName : " Debnath"

    },
    UserAge : 20,
    userLocation : "Delhi"
}

// console.log(GanaUser.userEmail);
// console.log(GanaUser.userFullName);

const obj1 = {
    1 : "a",
    2 : " b",
    3 : "c"
}

const obj2 = { 
    4 : " d ",
    5 : " e ",
    6 : " f "
}

const resObj = {obj1,obj2} // wrong approch 

// const obj3 = Object.assign({},obj1,obj2) // assign use to merge objects
// console.log(obj3)

const obj3 = {...obj1,...obj2} // spread operator
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty("userFullName")) // we can check by "hasOwnProperty" that value exsist or not

// ++++++++++++++++++ Object Destructure ++++++++++++++++++++++++++++++++

const coures = {
    coursename : "Java Script",
    coursePrice : "1999",
    courseInstractor : "Harry",
    courseDuration : "Six Month"
}

console.log(coures.coursePrice);

const {courseInstractor} = coures // for multiple time use we can extract using curly braces [Destructure]

const {courseInstractor : instractor } = coures // In Destructure we can change key name also

console.log(courseInstractor);
console.log(instractor);

// {
//     "name" : "Jaydeep",
//     "courseInstractor " : "Hitesh ",   // JSON Structure[API]
//     "coursePrice" : "Free",

// }




