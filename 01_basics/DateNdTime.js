//Dates and Time
//sigle moment 1 jan 1970
 let myDate = new Date()
 console.log( typeof myDate) //object
 
 console.log(myDate) //2024-05-20T15:07:08.399Z
 
 console.log(myDate.toString()) //Mon May 20 2024 15:07:08 GMT+0000 (Coordinated Universal Time)
 
 console.log(myDate.toISOString()) //2024-05-20T15:07:08.399Z
 
 console.log(myDate.JSON) //undefined
 
 console.log(myDate.toLocaleString()) //5/20/2024, 3:08:15 PM //object
//"default"

//  let  myCDate= new Date(2024,0,23)
//  console.log(myCDate.toLocaleString()) //1/23/2024, 12:00:00 AM
 
//  let  myCDate= new Date(2024,12,23) //11--dec
//   console.log(myCDate.toLocaleString()) 
 
//yyyy-mm-dd
//  let  myCDate = new Date("2023-00-23") //Invalid Date
//  console.log(myCDate.toLocaleString())
 
//   let  myCDate = new Date("2023-01-23") //1/23/2023, 12:00:00 AM
//  console.log(myCDate.toLocaleString())
 
 //dd-mm-yyyy
   let  myCDate = new Date("01-23-2023") //1/23/2023, 12:00:00 AM
 console.log(myCDate.toLocaleString()) //1/23/2023, 12:00:00 AM
 console.log(myCDate.getTime()) //1674432000000
  console.log(Math.floor(Date.now()/1000))
  
  
  //methods
  
  let FinalDate =new Date()
  console.log(FinalDate)
  console.log(FinalDate.getFullYear()) //2024
  console.log(FinalDate.getDay())
  
  
  
 
