// Variables
var takeOut = prompt("Where did you order from?");
var foodBill = Number(prompt("How much did your food cost?"));

//Tip Variables
var tipPercent = [10, 15, 20];
var generousTip = 40;

//Calculations

var fifteenPercent = foodBill * Number(tipPercent[1]/100);
var tipAddedToBill = fifteenPercent + foodBill;

//var fifteenPercent = foodBill * tipPercent[1];
//var twentyPercent = foodBill * tipPercent[2];
//var fortyPercent = foodBill * generousTip;

//Totals
//var totalTen = tenPercent;
var totalFifteen = foodBill;
//var totalTwenty = foodBill;
//var totalForty = foodBill;

//Totals with other assignment operators
//totalTen += tenPercent;
totalFifteen += fifteenPercent;
//totalTwenty += twentyPercent;
//totalForty += fortyPercent;

alert(tipAddedToBill);
