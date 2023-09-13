console.log("Hello world");

//variables
const accountId = 144553
let accountEmail = "email@email.com"
var accountPassword = "12345"
accountCity = "banglore"
let accountState;
// const value cannot be changed
// accountId = 2
// console.log(accountId);

accountEmail = "em@gmail.com"
accountPassword = "7896"
accountCity = "Bengeluru"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*
Prefer not to use var because of issue in block scope and functional scope
*/