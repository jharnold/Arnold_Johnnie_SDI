/*
Johnnie Arnold
Expressions Worksheet - Discounts
 */
var item = prompt("What would you like to buy?");
var price = prompt("How much is does the " + item + " cost?");
var discount = prompt("How much is your discount?\n(Example: 25 for 25%)");
var tax = prompt("How much tax is charged?\n (Example 7 for 7%)");

//discount calculation
disPer = discount/100;
var calcDiscount = price * disPer ;
var calcPrice = price - calcDiscount;


//tax calculation
taxPer = tax/100;
var wTax = calcPrice * taxPer;
var taxPrice = calcPrice + tax;

//Decimal to Whole Calculation
var disWhole = discount/100;
var texPerc = tax/100;


alert("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + calcPrice + " without tax, and $" + taxPrice + " with tax." );

