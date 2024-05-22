//scope

// let a=10
// const b=122
// var c=3 //block scope
let a = 300

if(true){
    let a=10
    const b=122
    //var c=3  //global
    console.log("inner",a)
}

// for (let i=0; i<array.length ; i++)}{
//     const element = array[i];
// }



console.log(a)
// console.log(b)
// console.log(c)

// hosting

function one(){
    const username ="hitesh"
    
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)// scope is not defined
    
    // two() //hitesh
}
//call stack

one()
// hosting

function one(){
    const username ="hitesh"
    
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)// scope is not defined
    
    // two() //hitesh
}
//call stack

one()

if (true){
    const username ="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website) //error scope ReferenceError 
    console.log(username)
}


//+++++++++++++++++++ something +++++++++++++++++//
console.log(addone(5))
function addone(num){
    return num+1
}
addone(5)


console.log(addTwo(5)) //ReferenceError
const addTwo = function addTwo(num){
    return num+2
}
addTwo(9)
