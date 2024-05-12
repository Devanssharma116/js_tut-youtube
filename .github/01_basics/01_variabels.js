const accountId=1;
let accountEmail='devsharma116'
var accountpassword='12345'
accountcity="jaipur"
let accountstate;
// const mean now we cant change its value

// accountId=2 --> it throws error not allowed
console.log(accountId);

accountEmail='abc@gmail'
accountpassword='000000'
accountcity='nathdwara'
console.table([accountId,accountEmail,accountpassword,accountcity,accountstate])
// var has scope problem 
/* Prefer not use var
bacause of issue in block scope and functional scope
*/