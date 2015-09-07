/*
Johnnie Arnold
Expressions Assignment
09/07/2015
 */
var userName = prompt("Welcome to Faking Banking.\nPlease enter your name:"); //asks users name
alert("Hello " + userName + ". It seems that you have an account with us!"); //alerts usersName with message
var aDeps = [1000, 250, 6000, 10000]; //array for deposits
var aWits = [900, 100, 3000]; //array for withdrawals
var accountD = aDeps[0] + aDeps[1] + aDeps[2] + aDeps[3]; //adds deposits
var accountW = accountD - (aWits[0] + aWits[1] + aWits[2]); //adds deposits first then subtracts from total deposits (played around with PEMDAS here)
var plus1 = aDeps[3] + 1; //adds 1 to aDeps[3]


alert("You recently made these deposits of: $" + aDeps[0] + ", $" + aDeps [1] + ", $" + aDeps[2] + ", $" + aDeps[3] + ".");//displays deposits info from array
alert("You recently made these withdrawals of: $" + aWits[0] + ", $"  + aWits[1] + ", $"  + aWits[2] + "."); //displays withdrawal info from array
alert("This puts your grand total at: $" + accountW); //gives total of accountW

alert(userName + ", we at Faking Banking would like to show our appreciation for YOU by crediting your account with $1.00 for the largest deposit you've made! This credit makes your largest deposit of $" + aDeps[3] + " into $" + plus1 + "."); //dispalys $1.00 credit

alert("HOLD ON! We're not finished yet."); //alerts user it's still going

var userDeps = Number(prompt("You need to put MORE money into your account! How much would you like to deposit?")); //prompt to turns string into a number

alert("You seriously want to put $" + userDeps + " into your account? Well, okay then."); //displays the users deposit amount

accountW++; //adds 1 to accountW
var userFinal = userDeps + accountW; //adds user deposit to accountW + 1

alert(userName + ", your account now holds... Oh, hold on. You have to check your browser's console for the answer."); //alerts user to view browser's console

console.log(userName + ", your account now holds: $" + userFinal + "." + "\nWOW!"); //console result

