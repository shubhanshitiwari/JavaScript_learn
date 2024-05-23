// immediately invoked function expression iife

// no global var 

(function chai(){ //named iife
    console.log("db is connected")
})();

// pollutions caused by global scope 

((name) => { console.log(`${name}`)})("shubhanshi"); //simple iife
