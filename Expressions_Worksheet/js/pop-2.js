/*
Johnnie Arnold
Expressions Worksheet - Slice of Pie Part 2
09/06/2015
 */
alert("Let's find out how many pieces of pizza did Sparky got..."); //alerts the user of the programs purpose

var numPeeps = prompt("How many people are at the party?"); //user input for amount of people at the party
var numPizzas = prompt("How many pizzas were ordered?"); //user input for amount of pizzas ordered
var numSlices = prompt("How may slices are there for each pizza?"); //user input for the amount of slices per pizza

var sliceCalc = numPizzas * numSlices/numPeeps; //calculates the amount the slice of pizza each person gets
var sparkySlices = numPizzas/sliceCalc; //calculates the amount of pizza that Sparky gets

alert("Please check your browser's console for the results."); //alerts the user to check the browser's console
console.log("Sparky got " + sparkySlices + " slices of pizza"); //displays the results

