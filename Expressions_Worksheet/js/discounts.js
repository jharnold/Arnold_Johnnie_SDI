/*
Johnnie Arnold
Expressions Worksheet - Discounts
 */
var item = prompt("What would you like to buy?");
var price = prompt("How much is does the " + item + " cost?");
var discount = prompt("How much is your discount?\n(Example: 25 for 25%)");
var tax = prompt("How much tax is charged?\n (Example 7 for 7%)");

//discount calculation
var calcDiscount = price * discount ;
var calcPrice = calcDiscount - price;

//tax calculation
var wTax = calcPrice * tax;
var taxPrice = wTax - calcPrice;

//Decimal to Whole Calculation
var decWhole = discount/100;

alert("Your " + item + " was originally $" + price + ", but after a " + decWhole + "% discount, it is now $" + calcPrice + " without tax, and $" + taxPrice + " with tax." );

