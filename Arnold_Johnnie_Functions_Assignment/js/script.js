/*
Johnnie Arnold
SDI
Functions Assignment
09/24/2015
*/

var acctAmt = 1000.00;//account amount



var userName = prompt("Please enter your name:");//user name prompt
userName = userName.toLowerCase();//makes input lower case
    while(userName === ""){//while username is blank...
        userName = prompt("Please don't leave your name field blank:");//prompts to not leave blank
    }

var userInp = prompt("Welcome to Faking Banking ATM.\nWould you to Check your (B)alance or (W)ithdrawl cash?");//Balance or Withdrawal prompt
userInp = userInp.toUpperCase();//to UPPER case
while(userInp != "B" && userInp != "W" || userInp==="") {//validates
    userInp = prompt("B for Balance or W for Withdrawal");//if not valid
}
if(userInp === "B"){//if B then call fucntion
    accountBal();//call
}
if(userInp === "W"){//if W call function
    accountW();//call
}
//function
function accountBal(){//function name
alert(userName+", your account balance is: $"+acctAmt);//alert of account amount
var yayOrNay = prompt("Would you like to make a withdrawal? (Y)ES OR (N)O?");//yes or no prompt
    yayOrNay = yayOrNay.toLowerCase();//to lower case
    if(yayOrNay === "y"){//if y
        accountW();//call function
    }
    if(yayOrNay === "n"){// if n goodbye
        alert("Thank you for banking with Faking Banking. Have a nice day!");
    }
}

function accountW() {//function name

    var userWith = Number(prompt("How much will you withdrawal today?"));//cast to number of user prompt
    var x = acctAmt - userWith;//1000.00 - userWithdrawal
    alert("Your account is now: $"+x);//total after withdrawal

}






