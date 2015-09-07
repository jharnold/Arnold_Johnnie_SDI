/*
Johnnie Arnold
Expressions Worksheet - Slice of Pie Part 2
09/06/2015
 */
alert("Let's find out how many pieces of pizza did Sparky got...");

var numPeeps = prompt("How many people are at the party?"); //user input for amount of people at the party
var numPizzas = prompt("How many pizzas were ordered?"); //user input for amount of pizzas ordered
var numSlices = prompt("How may slices are there for each pizza?"); //user input for the amount of slices per pizza

var sliceCalc = numPizzas * numSlices/numPeeps;
var sparkySlices = numPizzas/sliceCalc;

alert(sparkySlices);

