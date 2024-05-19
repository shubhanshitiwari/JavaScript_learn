// Stack and Heap  
//memory allocation
//automatic garbage collection

//stack (primitive datatype)[number,string,boolean,null,undefined,bigint,symbol] 
//copy 
let firstName ="shubhanshi";
let anotherName = firstName;
anotherName ="harsh";
console.log(firstName);
console.log(anotherName); //copy gonna change

//and heap (non-primitive datatype)[array,object,function]
//ref. value

let userOne={
  email:"happy.email",
  name:"harsh"
}
let userTwo= userOne;
userTwo.email="sad.gmail"

console.log(userTwo.email) //sad.gmail
console.log(userOne.email) //sad.gmail

console.log(userOne) //{ email: 'sad.gmail', name: 'harsh' }
console.log(userTwo) //{ email: 'sad.gmail', name: 'harsh' }
