/*
Johnnie Arnold
SDI
Functions Assignment
09/24/2015
*/

var acctAmt = 1000.00;
var userName = prompt("Please enter your name:");
userName = userName.toLowerCase();
while(userName ==="") {
    alert("Please don't leave your name field blank:");
    prompt(userName);
}

if(userName === isNaN){
    alert(userInp);
}

var userInp = prompt("Welcome to Faking Banking ATM.\nWould you to Check your (B)alance or (W)ithdrawl cash?");
userInp = userInp.toLowerCase();
while(userInp != "b" && userInp != "w" || userInp==="") {
    if (userInp === "b") {
        acctBal();
    }
    if (userInp === "w") {
        acctWith();
    }





