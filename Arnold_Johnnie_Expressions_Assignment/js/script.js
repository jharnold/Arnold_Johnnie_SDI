/*
Johnnie Arnold
Expressions Assignment
09/07/2015
 */
var userName = prompt("Welcome to Faking Banking.\nPlease enter your name:");
var hello = prompt("Hello " + userName + ". It seems that you have an account with us!");
var aDeps = [1000, 250, 6000, 10000];
var aWits = [900, 100, 3000];
var accountD = aDeps[0] + aDeps[1] + aDeps[2] + aDeps[3];
var accountW = accountD - (aWits[0] + aWits[1] + aWits[2]);

alert("You recently made these deposits of: $" + aDeps[0] + ", $" + aDeps [1] + ", $" + aDeps[2] + ", $" + aDeps[3] + ".");
alert("You recently made these withdrawals of: $" + aWits[0] + ", $"  + aWits[1] + ", $"  + aWits[2] + ".");
