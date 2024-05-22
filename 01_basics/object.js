// object
//part1

//singleton 
//constructors 
Object.create

// object literal no singaleton


const mysym =Symbol("key1")
const JsUser={
    name:"shubhanshi",
     // name will be like "name"
     age:18,
     [mysym]:"mykey1",
     city:"Pune",
     email:"shubhu.gmail.com",
     "lastloginIn":["mon","tue"]
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["lastloginIn"])
console.log(JsUser[mysym]) //Invalid shorthand property initializer

JsUser.email = "sad.gmail.com"

//lock
// Object.freeze(JsUser)
  
//function
JsUser.greeting= function(){
    console.log("hello everyone")
}

JsUser.greetingTwo= function(){
    console.log(`hello everyone,${this.name}`)
}
console.log(JsUser.greeting) //undefined
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

//part-2
// const tinderUser = new Object{} //singleton object 

const tinderUser={}
tinderUser.id="12345"
tinderUser.name="harsh"
tinderUser.isLoggedIn=false

const reg ={
    email:"shunb.com",
    fullname:{
        fisrtname:"arun",
        middlename:"kumar",
        lastname:"tiwari"
    }
}


console.log(tinderUser)
console.log(reg.fullname?.middlename)

//optional channel

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3= {obj1,obj2}

const arr1=[1,2,3]
const arr2=[5,6,7]

// const arr3=[arr1,arr2]
// const arr4=arr1+arr2
// console.log(arr3) //[ [ 1, 2, 3 ], [ 5, 6, 7 ] ]
//1,2,35,6,7

// const arr4 = Array.assign(arr1.arr2)
// console.log(arr4)

// const obj3 = Object.assign({},obj1,obj2) //optional value {}--target rest are source returntarget == {} target true

const obj3={...obj1,...obj2}//spread 


const user=[
    {
    id:"1",
    email:"s.com"
    },
    {
    id:"1",
    email:"s.com"
    },
    {
    id:"1",
    email:"s.com"
    },
    {
    id:"1",
    email:"s.com"
    }
    ]
// console.log(obj3)

user[1].email="happy"
console.log(user[1])

console.log(Object.keys(tinderUser)) //array[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '12345', 'harsh', false ]
console.log(Object(tinderUser).length)//undefined

console.log(Object.entries(tinderUser))//[ [ 'id', '12345' ], [ 'name', 'harsh' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //true





// console.log(tinderUser)
// part 3
const course ={
    name:"ja-in-hindi",
    price:999,
    Instructor:"hitesh"
}

const {Instructor:ins} = course //distru.

console.log(ins)

// const navbar = ({comp}) =>{
    // }
// navbar(comp ="hitesh")

//APIs --  application programming interface
//--json

// {
//     "object":"No Name"
//     "name":"usually"
//     "string":"string"
// }

//[{}] //looping

