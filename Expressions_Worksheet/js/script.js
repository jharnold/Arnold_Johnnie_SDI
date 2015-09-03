/*
Johnnie Arnold
SDI
Expressions Worksheet - Area of a Circle
09/02/2015
 */
alert("Today we are going to find the area of a circle."); //alerts the user to the purpose of the program
var usrRadius = prompt("What is the radius of our circle?"); //prompts for the user to give a number
const pI = 3.14159265; //pI = 3.14159265
area = usrRadius * usrRadius * pI; //calculates the area with the users input

alert("Please use the browser's console to view the answer.") //alerts the user to view the browser's console
console.log("The area of your circle is " + area + " sq feet!"); //prints the answer in the console

