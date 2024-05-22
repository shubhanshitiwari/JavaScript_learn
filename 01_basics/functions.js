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

console.log(return2value(array1))
