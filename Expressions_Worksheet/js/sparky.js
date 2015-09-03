/*
Johnnie Arnold
SDI
Expressions Worksheet - Dog Years
09/02/2015
 */

alert("It is said that dogs age 7 times faster than humans.\nLet's see what that really means..."); //alert about dogs aging 7 times faster than humans and alerts user of programs purpose
var sparkyAge = prompt("Today we are going to find out how old sparky is in dog years.\n\nHow old is sparky in human years?"); //gathers user input of age
dogYears = 7; //dogYears = 7
var sparkyMath = sparkyAge * dogYears; //user's number times 7

alert("To find out how old sparky is in dog years please check the browser's console."); //alerts user to view the browser's console for the answer
console.log("Sparky is " + sparkyAge + " human years old which is " + sparkyMath + " in dog years."); //prints result to browser's console