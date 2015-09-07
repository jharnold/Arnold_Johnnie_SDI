/*
Johnnie Arnold
Expressions Assignment
09/07/2015
 */
var userName = prompt("Welcome to Faking Banking.\nPlease enter your name:");
alert("Hello " + userName + ". It seems that you have an account with us!");
var aDeps = [1000, 250, 6000, 10000];
var aWits = [900, 100, 3000];
var accountD = aDeps[0] + aDeps[1] + aDeps[2] + aDeps[3];
var accountW = accountD - (aWits[0] + aWits[1] + aWits[2]);
var creditAdd = aDeps[3]++;

alert("You recently made these deposit(s) of: $" + aDeps[0] + ", $" + aDeps [1] + ", $" + aDeps[2] + ", $" + aDeps[3] + ".");
alert("You recently made these withdrawal(s) of: $" + aWits[0] + ", $"  + aWits[1] + ", $"  + aWits[2] + ".");
alert("This puts your grand total at: $" + accountW);

var creditAlert = alert(userName + ", we at Faking Banking would like to show our appreciation for YOU with by crediting your account with $1.00 for the largest deposit you've made! This credit makes your largest deposit of $" + aDeps[3] + "into $" + creditAdd + ".");

prompt("HOLD ON! We're not finished yet.");

userDeps = prompt("You need to put MORE money into your account! How much would you like to deposit?");

alert("You seriously want to put $" + userDeps + " into your account? Well, okay then.");

var userFinal = userDeps + accountW + creditAdd;

alert(userName + ", your account now holds... Oh, hold on. You have to check your browser's console for the answer.)

