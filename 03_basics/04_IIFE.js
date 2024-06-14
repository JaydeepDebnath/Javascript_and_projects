// Immedietly Invoked Function Expreesion (IIFE) [Used to avoid global scope pollution and also to execute immedietly]

// (function chai (){
//      console.log("DB CONNECTED");
// }) ()
// chai()

// (function code (){
    // named IIFE
//     console.log("MONGO DB CONNECTED");
// })();

// // '()' first paranthisis for function defonation and second '()' for function execution

// ( ()=> {
//     console.log("DB CONNECTED TWO");        // IIFE UNDER ARROW FUNCTION

// })()

((name)=>{
    console.log(`print user name : ${name}`)
})("Jaydeep")