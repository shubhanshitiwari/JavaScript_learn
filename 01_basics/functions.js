//functions
//memory mang..
//part-1

// function sum(num1,num2){ //parameters
//     console.log(num1+num2);
// }

// function sum(num1,num2){ //parameters
//     // const result =num1+num2;
//     // return result; //
//     return num1+num2
// }

// const result = sum(3,null) //arguments //no return
// console.log(result) //undefined

function login(username ="sam"){ //default
    // if(username===undefined){console.log("please enter a username")
    //     return
    // }
    //(!username) ---(username===undefined)
    return `${username} just logged in`
}

const name = login()
console.log(name)

// no value is passed -- undefined

function calculateCartValue(val1,val2,...num1){
    return num1
}
console.log(calculateCartValue(200,440))
//rest -- array //[ 200, 440, 889 ] 
const user={
    username:"shubhanshi",
    price:199
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    price:999
})

const array1=[100,200,300,400]

function return2value(getarray){
    console.log(getarray[0])
}
const chai = () => {
    console.log('hello world')
    console.log(this)
}

chai()
//hello world
//{}

const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(3,4))

// const one = (num1,num2) => num1+num2
// const one = (num1,num2) => (num1+num2)
const one = (num1,num2) => ({num1:0,num2:9})
console.log(one(7,8))

const myarr = [2,3,4,5]

myarr.forEach(() =>)
console.log(return2value(array1))


//higher order 
// const coding=[1,2,3,4,5,6]
// coding.forEach(  (item) => {console.log(item)} ) //no name in call back function
//()=>{}
// greet=()=>{}

// function printMe(item){
//     console.log(item)
// }
// const coding=[1,2,3,4,5,6]
// coding.forEach(  printMe )

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// [{},{},{}]

// const mycoding=[
//     {
//     languageName:"javascript",
//     languageFileName:"js"
// },{
//     languageName:"python",
//     languageFileName:"py"
// },{
//     languageName:"java",
//     languageFileName:"java"
// }
// ]
// mycoding.forEach((item)=>{
//     console.log(item.languageName);
// })

const coding=[1,2,3,4,5,6,7,8,9,10]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values) //undefined
// donot return any value

// const values=coding.filter((num)=> num>5)
// console.log(values)

// const values=coding.filter((num)=> {return num>4})
// console.log(values)

// const newcoding=[]

// coding.forEach((num) => {
//     if(num>4){
//         newcoding.push(num)
//     }
// })
// console.log(newcoding)



// const mycoding=[
//     {
//     languageName:"javascript",
//     languageFileName:"js"
// },{
//     languageName:"python",
//     languageFileName:"py"
// },{
//     languageName:"java",
//     languageFileName:"java"
// }
// ]

// const userBooks =mycoding.filter((bk)=> bk.languageFileName==="py")
// console.log(userBooks);
//[ { languageName: 'python', languageFileName: 'py' } ]

// const userBooks =mycoding.filter((bk)=>{ return bk.publish>=2000})
// console.log(userBooks);

// const userBooks =mycoding.filter((bk)=>{
//     return bk.publish>=2000 && bk.genre==="history"})
// console.log(userBooks);

// const myNum=[1,2,3]

// const newnums=myNumers.map((num) => {return num+10})
// console.log(newnums)

//undefined --- empty array 

// const newnums = myNumers.filter((num) => {return num+10})
// console.log(newnums)

//chaining 
// const newNums = myNumers
//                 .map((num) => {return num*10})
//                 .map((num) => {return num+1})
//                 .filter((num) => num>=40)

// console.log(newNums)


//nine.js
//reducer
//accumulator -- empty variable 
//intialvalue -- onfirst ex. accumulator 

const myNum=[1,2,3]

// const New= myNum.reduce((acc,currval) => {
//     console.log(`acc ${acc}`)
//     return acc+currval
// },0)/

// const New = myNum.reduce((acc,currval) => {return acc+currval},0)

// console.log(New)


const shoppingCart=[
    {
        itemName:"js",
        price:2300
    },{
        itemName:"data",
        price:2300
    },{
        itemName:"python",
        price:2300
    }]

const total=shoppingCart
.reduce((acc,item) =>{return acc+item.price},0)
console.log(total)


























