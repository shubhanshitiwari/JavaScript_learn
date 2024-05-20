const accountId=144553 //prefered to lock the value
let accountEmail="happygmail.com" //memory allocation
var accountPassword="12345"
accountCity ="Pune" //

/*var  vs let
scope--{}
prefer not to use var cause' block and functional scope*/


/*accountId=3 not allowed
console.log(accountId); Assignment to constant variable.*/

console.log(accountId);
accountEmail="sadgmail.com"
accountPassword=232323
accountCity="Bhopal"
let accountState; //undefined: value is not defined

console.table([accountEmail,accountPassword,accountCity,accountState]);
