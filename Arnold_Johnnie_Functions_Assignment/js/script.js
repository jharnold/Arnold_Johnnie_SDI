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
    prompt("Please don't leave your name field blank:");
}

var userInp = prompt("Welcome to Faking Banking ATM.\nWould you to Check your (B)alance or (W)ithdrawl cash?");
userInp = userInp.toLowerCase();
while(userInp != "b" && userInp != "w" || userInp==="") {
    prompt("B for Balance or W for Withdrawal");
}
if(userInp === "b"){
    accountBal();
}
//function
function accountBal(){
alert(userName+", your account balance is: $"+acctAmt);
var yayOrNay = prompt("Would you like to make a withdrawal? (Y)ES OR (N)O?");
    yayOrNay = yayOrNay.toLowerCase();
    if(yayOrNay === "y"){
        accountW();
    }
    if(yayOrNay === "n"){
        alert("That you for banking with Faking Banking. Have a nice day!");
    }
}
function accountW(bal, withd){
    var userWith = Number(prompt("How much will you withdrawal today?"));
    return bal - withd;
    totalLeft();

}

function totalLeft(){
alert("Your remaining balance is $"+accountW());
}






