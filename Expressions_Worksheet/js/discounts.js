/*
Johnnie Arnold
Expressions Worksheet - Discounts
 */
var item = prompt("What would you like to buy?");
var price = prompt("How much is does the " + item + "cost?");
var discount = prompt("How much is your discount?\nPlease make this a decimal (Example: .20 = 20%:)");
var tax = prompt("How much tax is charged?\nPlease make this a decimal (Example: .20 = 20%:)");

//discount calculation
var calcDiscount = price * discount ;
var calcPrice = calcDiscount - price;

//tax calculation
var wTax = calcPrice * tax;
var taxPrice = wTax - calcPrice;

//Decimal to Whole Calculation
var decWhole = discount/100;

alert("Your " + item + " was originally $" + ", but after a " )

