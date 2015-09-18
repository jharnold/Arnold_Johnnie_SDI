/*
Johnnie Arnold
SDI
09/17/2015
Conditionals
 */

//Variables, prompts, alerts
var humanLife = 100;//Players Life
var dragLife = 100;
var userName = prompt("Please enter your name, hero:");
alert("How to play:\n1. When prompted enter a number 1 - 10 to attack the Dragon.");
var dragAttack = Number(prompt(userName + ", you have been stopped by a dragon!\nSelect a number between 1 - 10 to attack!"));

//Conditionals

if(dragAttack <= 5 && dragAttack > 1){
    dragLife = 100 - 90;
    humanLife = 100 - 40;
    alert("The dragon has been wounded!\nThe dragon's life is now at " + dragLife + "%!");
    alert("The dragon attacked you for 40% of your life force!\nYour HP is now at " + humanLife + "%!");
    alert("You attacked the dragon again! Critical Strike! You defeated the dragon!");

}

if(dragAttack === 1 && dragAttack < 3){
    alert("You missed!");
    var attackAgain = prompt("Attack the dragon again");
    alert("Critical Strike!\nYou killed the dragon!");
}

if(dragAttack === 10 && dragAttack > 8){
        alert("Critical Strike!\nYou killed the dragon!");
}
else if(dragAttack === 6 || dragAttack === 7) {
    alert("I'm sorry, " + userName + ", but the dragon defeated you!");
} else {
    alert("Huh?");
}


