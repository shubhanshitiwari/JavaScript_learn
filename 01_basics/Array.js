//Array-- collection of datatype resizable 
 
 const myArr =[0,1,2,3,4,5,true,"shubhanshi"]
 
 console.log(myArr[0]) //0
 
 //shallow copies -- copy same refer point
 
 const skincare =new Array("facewash","lipblam","nightcream")
 console.log(skincare[0])
  
//push
 skincare.push("happy")
 console.log(skincare)
 
 //pop-- last element
 skincare.pop()
 console.log(skincare)
 
 //unshift  -- adding in start
 skincare.unshift("sad")
 console.log(skincare)
 
 //shift -- starting value
 skincare.shift()
 console.log(skincare)
 
 console.log(skincare.includes(9)) //false
 console.log(skincare.indexOf(3)) //-1
 
 const newarr = skincare.join() 

 console.log(skincare) 
 console.log(newarr)//facwesh,lipblam,nightcream
 console.log(typeof newarr) //string

//nearest function in case of var nearest br in case of let 

//slice(start,end) ,splice include end value 
//remove splice from org array



