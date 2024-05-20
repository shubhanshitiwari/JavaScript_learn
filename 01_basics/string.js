// string 
const name ="shubhanshi"
const repCount=8
console.log(name+repCount) //shubhanshi8
console.log(name,repCount) //shubhanshi 8

//modern syntax ``
//string interpolation
console.log(`hello my name is ${name} my repcount is ${repCount}`) // hello my name is shubhanshi my repcount is 8
console.log(`hello my name is${name} my repcount is${repCount}`)// hello my name isshubhanshi my repcount is8
console.log(typeof name)

//declartion 
const gameName = new String("shubhu") // indexing
//key value 
//length //__proto__

// index
console.log(gameName[0]) //s
//length
console.log(gameName.length) //6

//prototypes
console.log(gameName.__proto__) //{} object

//toUpperCase nd toLowerCase
console.log(gameName.toUpperCase()) //SHUBHU // no change in orginal value 

//charAt
console.log(gameName.charAt(3)) //b

//indexOf
console.log(gameName.indexOf("b")) //3

//few more 
let newStr=gameName.substring(1,3) // substring(start,end) //hu

console.log(typeof gameName) //object
console.log(newStr)

//slice(start,end)
const anotherStr= gameName.slice(-8,4)
console.log(anotherStr) // s-6/0h-5/1u-4/2b-3/3h-2/4u-1/5 //shub

//trim
const newString="   one punch man  "
console.log(newString) //   one punch man  
console.log(newString.trim()) //one punch man

//replace(what,whome)
const url="https://shubhanshi.com/shubhanshi%20tiwari"
//%20 -- blank space
let newUrl= url.replace("%20","-")
console.log(newUrl) //https://shubhanshi.com/shubhanshi-tiwari

console.log(url.includes("shubh")) //true

console.log(newUrl.split("/"))





