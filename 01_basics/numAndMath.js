// console.log(Math.floor(Math.random()*(max-min+1))+ min)

//Number and maths 
const score=400
const bal =new Number(100)

console.log(bal) //[Number: 100]
console.log(typeof score)

console.log(bal.toString().length); //3
console.log(typeof bal)

console.log(bal.toFixed(2)) //100.00

const otherNumber = 123.18966
console.log(otherNumber.toPrecision(3)) //1-21 return string //123 

const firstNum =1000000
console.log(firstNum.toLocaleString("en-IN"))

//<------- maths ----->

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)) //-4
console.log(Math.round(4.3)) //4
console.log(Math.ceil(44.2)) //45
console.log(Math.floor(99.9)) //99

console.log(Math.sqrt(44).toString().length)
console.log(Math.min(2,3,4,5)) //2
console.log(Math.max(2,3,4,5)) //5
 
//random-->0 to 1
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+ min)











