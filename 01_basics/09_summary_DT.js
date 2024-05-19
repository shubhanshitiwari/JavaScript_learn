// summary 

// primitive 
// number,string,boolean,symmbol,bigint(big nummbers),null,undefined.

// dynamic type language because no need to tell data type it will understand during run time of program.
// Compile-time is the time at which the source code is converted into an executable code while the run time is the time at which the executable code is started running

const isLoggedIn = true;
const outSideTemp=null
let userEmail;

//symbol
const id =Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); //false
// but the value of both id and anotherId id is different 

const bigNumber = 3423233454656355736777n


// reference non primitive 
//array,object,function -- browser events 

const skincare=["facewash","sunscream","lipblam"] //array 

let myObject= {
    key:"value",
    python:"dictonary"
}

let myFunction =function(){
    console.log("this example of function");
}

console.log(typeof myFunction); //object-function
console.log(typeof myObject); //object
console.log(typeof skincare); //object

console.log(typeof bigNumber); //bigint
console.log(typeof id); //symbol
console.log(typeof isLoggedIn); //boolean
console.log(typeof userEmail); //undefined
console.log(typeof outSideTemp); //object 
