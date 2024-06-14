// Object literal

const user = {
    username : "Jaydeep",
    loginCount : 8,
    signedIn : true,

    getuserDetails:function(){
        // console.log("Got user details from databas");
        // console.log(`Username : ${this.username}`)
        console.log(this);   // in a object if we call this keywoard, this have access total object
        }

}

// console.log(user.username);
// user.getuserDetails();
// console.log(this);   // if we call this in golbal it will be return epmty object


// const promise = new Promise()
// const date = new Date()  // (new) used to create new context. It's also a constructor function

function User(userName,loginCount,isLoggedIn){
    this.username = userName            // variabel = parameter
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this   // implicitly return this property

    this.gretting = function(){
    //  console.log(`Welcome ${this.username}`);   
    }
}


const userOne = new User("jaydeep",10,true)
const userNameTwo =new  User("Debnath",20,false)
// console.log(userOne);
// console.log(userNameTwo);
// console.log(userOne.constructor);       // constructor define it's own property

console.log(userOne instanceof User);

console.log(userOne instanceof Object);

// New keyword steps:
// first step : whe we used new keyword it's creat a empty object, wich is called instance
// second step : called a constructor function cause of new keyword,packed all argumets and give uss
// third step : Argument's inject in new keyword
// fourth step : We get this object