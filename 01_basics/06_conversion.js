//conversion and operation

let score="33a"
console.log(typeof score);
console.log(typeof (score));

let valueInNummber= Number(score);
console.log(typeof (score));
console.log(typeof valueInNummber);
console.log(valueInNummber);//NaN

//null=>0
//undefined=>NaN
//true=>1
//false=>0

// "33" => 33 number
// "33abc" => NaN number
// true => 1 number
// false => 0 number

let isLoggedIn =" "
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn); //true

// 0 => false ; 1-anynumber expect 0=>true
// "" =>false ; "anything but not empty string" =>true

let someNum=33
let strSomeNum= String(someNum);
console.log(strSomeNum);
console.log(typeof strSomeNum);
