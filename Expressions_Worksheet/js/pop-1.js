/*
Johnnie Arnold
SDI
Expressions Worksheet - Piece of Pie Part 1
 */

alert("Let's find out how many pieces of pizza everyone ate at the party!"); //alerts user of purpose of program
var numPeeps = prompt("How many people are at the party?"); //user input for amount of people at the party
var numPizzas = prompt("How many pizzas were ordered?"); //user input for amount of pizzas ordered
var numSlices = prompt("How may slices are there for each pizza?"); //user input for the amount of slices per pizza

var sliceCalc = numPizzas * numSlices/numPeeps; //calculates the number of pizzas times amount of slices then divides the total by the amount of people at the party

alert("Please check your browser's console for the answer."); //alerts user to check their browser's console to view the answer
console.log("Each person ate " + sliceCalc + " slices of pizza at the party."); //displays the result
