// const promiseOne = new Promise(function (resolve,reject){
//     // do an async task
//     // DB calls,Cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()   // resolv directly connect through .then
//     },1000)
// })

// promiseOne.then(function(){    // .then autometically return to promise, and connect resolve
//     console.log('Promise consumed')
// })

new Promise(function(resolve,reject){  // we can use promise directly, without holding a variable
    setTimeout(function(){
        // console.log('Async task two')
        resolve()
    },1000)
}).then(function(){
    // console.log('Async task Two Resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email : "Jaydeep@goole.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user)
})

const promiseFour = new Promise(function (resolve,reject){
    setTimeout(function (){
        let error = false
        if(!error){
            resolve({username : "Jaydeep" , password : "123"})
        }else{
            reject ('ERROR  : something went wrong ')
        }
    },1000)
})

promiseFour.then((user)=>{
    // console.log(user);
    return user.username
})
.then(function(username){
    // console.log(username);   // we can use muultiple .then function.#chaining[it trsansfer previous then to next then] 
})
.catch(function(error){
    // console.log(error);
})

const promiseFive = new Promise (function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error ){
            resolve({username : "javaScript",pass : "1234"})
        }else{
            reject('ERROR : Something went wrong ')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive              // async await didn't accept any error. await is a function but didn't need any paranthisis
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
try {
    const response = await fetch('https://raw.githubusercontent.com/hiteshchoudhary/apihub/main/package.json')
    console.log(response);
    const data = await response.json()          // we shold await json response also. it takes time
    console.log(data) 
} catch (error) {
    console.log("ERROR 404",error);
    
}
}

getAllUsers()



fetch('https://raw.githubusercontent.com/hiteshchoudhary/apihub/main/package.json')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("ERROR")
})