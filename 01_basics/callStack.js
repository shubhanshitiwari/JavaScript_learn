// call stack
//javascript execution context 

//global EC -- this -- window object 
//single threaded 
//functional EC
//Eval EC 

//memory ceration phase = creation phase 
//execution phase == maths 

let var1 = 10
let var2= 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1= addNum(val1,val2)
let result2= addNum(10,2) 

//global EC eniv. --- this 
// creation phase val1= undefined val2= undefined
//addNum = defination 
// result1 = undefined result2= undefined 


// val1=10
//val2=5
//addNum === box //memory phasse // exection phase --- //parnet EC --DELETION 
