/*
Johnnie Arnold
SDI
09/17/2015
Conditionals

** I used prompts and alerts instead of console.log due to the nature of the program I wrote for this project **

 */

//Variables, prompts, alerts
var humanLife = 100;//Players Life
var dragLife = 100;//Dragon's Life
var userName = prompt("Please enter your name, hero:");//Prompts for user's name
alert("How to play:\n1. When prompted enter a number 1 - 10 to attack the Dragon.");//How to play
var dragAttack = Number(prompt(userName + ", you have been stopped by a dragon!\nSelect a number between 1 - 10 to attack!"));//Prompts player that they there's a dragon

//Conditionals

if(dragAttack <= 5 && dragAttack > 1){//if dragAttack is less than or equal to 5 AND dragAttack is greater than 1
    dragLife = 100 - 10;//Dragon's life - 10
    humanLife = 100 - 40;//Human life - 40
    alert("The dragon has been wounded!\nThe dragon's life is now at " + dragLife + "%!");//Displays the dragons remaining life
    alert("The dragon attacked you for 40% of your life force!\nYour HP is now at " + humanLife + "%!");//Displays the players remaining life
    alert("You attacked the dragon again! Critical Strike! You defeated the dragon!");//attacks the dragon with a critical strike

}

if(dragAttack === 1 && dragAttack < 3){//if dragAttack equals 1 AND dragAttack is less than 3
    alert("You missed!");//You missed
    prompt("You attack the dragon again");//Auto attack
    alert("Critical Strike!\nYou killed the dragon!");//Killed dragon
}

if(dragAttack === 10 && dragAttack > 8){//if dragAttack equals 10 AND dragAttack is greater than 8
        alert("Critical Strike!\nYou killed the dragon!");//Kill Dragon
}
else if(dragAttack === 6 || dragAttack === 7) {//else if dragAttack equals 6 OR 7
    alert("I'm sorry, " + userName + ", but the dragon defeated you!");//User defeated
} else {//else (outside of 1 - 10)
    alert("I can't play like that "+userName+".");//alerts the error
}


