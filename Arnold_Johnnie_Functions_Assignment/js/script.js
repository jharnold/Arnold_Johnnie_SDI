/*
Johnnie Arnold
SDI
Functions Assignment
09/24/2015
*/

var userInp = prompt("Welcome to Faking Banking ATM. Would you to Check your (B)alance or (W)ithdrawl cash?");

userInp = userInp.toLowerCase();

while(userInp !="b" && userInp !="w") {
    prompt("I'm sorry, but that input is invalid.\nPlease enter B for Balance or W for withdrawal.");
}

function userAcct(balance, withdrawl){
    if(userInp = "b"){
        balanceIt = Math.round(Math.random()*100);
        alert("Your balance is: $"+balanceIt);
    }

}
