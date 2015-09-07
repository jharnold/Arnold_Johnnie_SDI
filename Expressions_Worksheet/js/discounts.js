/*
Johnnie Arnold
Expressions Worksheet - Discounts
 */
var item = prompt("What would you like to buy?"); //user inputs the item name
var price = prompt("How much is does the " + item + " cost?"); //asks user the price of item
var discount = prompt("How much is your discount?\n(Example: 25 = 25%)"); //user input for discount
var tax = prompt("How much tax is charged?\n (Example 7 = 7%)"); //user input for tax

//discount calculation
disPer = discount/100; //changes discount into a decimal
var calcDiscount = price * disPer; //price * decimal discount amount
var calcPrice = price - calcDiscount; //user price - calcDiscount


//tax calculation
taxPer = tax/100; //turns tax amount into decimal
var wTax = calcPrice * taxPer; //calcPrice * decimal tax amount
var taxPrice = calcPrice + wTax; //calcPrice - wtax

alert("Please check the browser's console for results."); //tells user the results are in the browser's console
console.log("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + calcPrice + " without tax, and $" + taxPrice + " with tax." ); //results

