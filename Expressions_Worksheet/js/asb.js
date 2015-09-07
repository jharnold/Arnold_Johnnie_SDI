/*
Johnnie Arnold
SDI
Expressions Worksheet
09/06/2015
 */

var gBills = [123, 456, 789, 1011, 1213]; //array of 5 weeks of grocery bills
var total = gBills[0] + gBills[1] + gBills[2] + gBills[3] + gBills[4]; //bills added together from array
var average = (gBills[0] + gBills[1] + gBills[2] + gBills[3] + gBills[4])/5; //bills added together from array divided by 5 weeks

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average +" each week.");
