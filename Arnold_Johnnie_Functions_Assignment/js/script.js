/*
Johnnie Arnold
SDI
Functions Assignment
09/24/2015
*/
var userName = prompt("Please enter your name:");
userName = userName.toLowerCase();
var userInp = prompt("Welcome to Faking Banking ATM.\nWould you to Check your (B)alance or (W)ithdrawl cash?");
userInp = userInp.toLowerCase();
var acctAmt = 1000.00;

while(userName===""){
    if(userName===""){
        prompt("Please don't leave your name field blank:");
    }else if(userName=== isNaN){
        alert("Thank you "+userName+".");
    }
}

while(userInp===""){
    if(userInp===""){
        prompt("Please do not leave this field blank.\n(B)alance or (W)ithdrawal:");
    }
}
while(userInp != "b" && userInp != "w"){
    if(userInp != "b" && userInp != "w"){
        prompt("Please use B for balance or W for withdrawal:")
    }
}

function acctBal() {
    alert("Your balance is $" + acctAmt+".");
    alert("Thank you banking with Faking Banking.");
}

function acctWith(){
    var amountWith = Number(prompt("Your account is $"+acctAmt+". How much would you like to withdrawal?"));
    while(isNaN(amountWith)){
        Number(prompt("Please enter a numerical amount:"));
    }
    var remainingBal = acctAmt - amountWith;
    var final = alert("You withdrew $"+amountWith+". Your remaining balance is $");
}

